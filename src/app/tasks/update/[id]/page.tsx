import TaskForm from "@/components/tasks/TaskForm";
import { fetchTasks, updateTaskAction } from "@/app/actions/tasks";
import { redirect } from "next/navigation";
import { Task } from "@/types/task";

export default async function UpdateTaskPage({ params }: { params: { id: string } }) {
  const tasks = await fetchTasks();
  const task = tasks.find((t: Task) => t.id === params.id);

  if (!task) {
    redirect("/");
  }

  // Server Actionをラップする関数を作成
  async function handleUpdate(formData: FormData) {
    "use server";
    await updateTaskAction(params.id, formData);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">タスク編集</h1>
      <TaskForm 
        action={handleUpdate}
        initialData={task} 
        submitLabel="更新" 
      />
    </div>
  );
} 