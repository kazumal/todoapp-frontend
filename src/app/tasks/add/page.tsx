import TaskForm from "@/components/tasks/TaskForm";
import { createTaskAction } from "@/app/actions/tasks";

export default function AddTaskPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">新規タスク作成</h1>
      <TaskForm action={createTaskAction} submitLabel="作成" />
    </div>
  );
} 