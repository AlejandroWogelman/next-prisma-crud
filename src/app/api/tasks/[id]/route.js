import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  console.log(task);

  return NextResponse.json(task);
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data,
  });
  return NextResponse.json(taskUpdated);
}
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
