import { fetchTasks, deleteTaskAction } from "./actions/tasks";
import TaskList from "@/components/tasks/TaskList";
import Link from "next/link";

export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">タスク一覧</h1>
        <Link
          href="/tasks/add"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          新規作成
        </Link>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTaskAction} />
    </main>
  );
} 