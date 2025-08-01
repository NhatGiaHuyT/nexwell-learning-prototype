import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { db } from "@/server/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }
    // Check if user already exists
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }
    // Hash password
    const hashedPassword = await hash(password, 10);
    // Create user
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ message: "User created", user: { id: user.id, email: user.email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
