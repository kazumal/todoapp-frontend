"use server";

import { TaskInput } from "@/types/task";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// API関数
async function fetchTasks() {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
}

async function createTask(task: TaskInput) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
}

async function updateTask(id: string, task: TaskInput) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
}

async function deleteTask(id: string) {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error('Failed to delete task');
}

// Server Actions
export async function createTaskAction(formData: FormData) {
  const task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    isCompleted: formData.get("isCompleted") === "on",
  };

  await createTask(task);
  revalidatePath("/");
  redirect("/");
}

export async function updateTaskAction(id: string, formData: FormData) {
  const task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    isCompleted: formData.get("isCompleted") === "on",
  };

  await updateTask(id, task);
  revalidatePath("/");
  redirect("/");
}

export async function deleteTaskAction(id: string) {
  await deleteTask(id);
  revalidatePath("/");
}

export { fetchTasks };  // 読み取り専用の関数は再エクスポート 