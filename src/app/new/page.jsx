"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NewPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    const { title, description } = e.target;
    e.preventDefault();
    console.log(title.value, description.value);

    const resp = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        description: description.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    router.push("/");
  };

  return (
    <div className=" h-screen flex justify-center items-center ">
      <form className="bg-slate-600 p-8 text-white" onSubmit={handleSubmit}>
        <label className=" font-bold text-sm" htmlFor="title">
          Título de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="text-black border p-2 border-gray-400 mb-4 w-full "
        />
        <label className=" font-bold text-sm" htmlFor="description">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          className="text-black border p-2 border-gray-400 mb-4 w-full "
          cols="30"
          rows="3"
        ></textarea>
        <button className=" bg-cyan-800 p-2 text-white rounded"> Crear</button>
      </form>
    </div>
  );
}
