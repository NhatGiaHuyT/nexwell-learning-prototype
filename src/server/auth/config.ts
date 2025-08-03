import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      onboardingCompleted: boolean;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    onboardingCompleted?: boolean;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    require("next-auth/providers/google").default({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    require("next-auth/providers/linkedin").default({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials provider authorize called with:", credentials);
        const { email, password } = credentials ?? {};
        if (typeof email !== "string" || typeof password !== "string") {
          console.log("Invalid email or password type");
          return null;
        }
        const user = await db.user.findUnique({ where: { email }, select: { id: true, email: true, name: true, password: true, onboardingCompleted: true } });
        console.log("User found in database:", JSON.stringify(user, null, 2));
        if (!user || !user.password) {
          console.log("User not found or no password");
          return null;
        }
        const bcrypt = require("bcryptjs");
        const valid = await bcrypt.compare(password, user.password);
        console.log("Password valid:", valid);
        if (!valid) {
          console.log("Invalid password");
          return null;
        }
        console.log("Authentication successful");
        return { id: user.id, email: user.email, name: user.name, onboardingCompleted: user.onboardingCompleted };
      },
    },
  ],
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    signIn: async (message) => {
      console.log("User signed in:", message);
    },
    signOut: async (message) => {
      console.log("User signed out:", message);
    },
    createUser: async (message) => {
      console.log("User created:", message);
    },
    linkAccount: async (message) => {
      console.log("Account linked:", message);
    },
    session: async (message) => {
      console.log("Session event:", message);
    },
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      console.log("Session callback called with:", { session, user, token });
      
      // If user object is available (during initial sign in)
      if (user) {
        console.log("Using user object for session");
        return {
          ...session,
          user: {
            ...session.user,
            id: user.id,
            onboardingCompleted: user.onboardingCompleted ?? false,
          },
        };
      }
      
      // If token is available (for subsequent requests), use token data
      if (token) {
        console.log("Using token data for session");
        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub as string,
            email: token.email as string,
            name: token.name as string,
            onboardingCompleted: (token.onboardingCompleted as boolean) ?? false,
          },
        };
      }
      
      console.log("Returning default session");
      return session;
    },
    jwt: async ({ token, user }) => {
      console.log("JWT callback called with:", { token, user });
      
      // If user object is available (during initial sign in)
      if (user) {
        console.log("Adding user data to token");
        return {
          ...token,
          sub: user.id,
          email: user.email,
          name: user.name,
          onboardingCompleted: user.onboardingCompleted ?? false,
        };
      }
      
      console.log("Returning existing token");
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
