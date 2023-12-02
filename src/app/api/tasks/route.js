import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const { title, description } = await request.json();
  const newTasks = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTasks);
}
