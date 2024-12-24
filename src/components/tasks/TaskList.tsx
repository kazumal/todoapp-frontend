"use client";

import { Task } from "@/types/task";
import Link from "next/link";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => Promise<void>;
}

export default function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="border p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <span className={`text-sm ${task.isCompleted ? 'text-green-600' : 'text-yellow-600'}`}>
                {task.isCompleted ? '完了' : '未完了'}
              </span>
            </div>
            <div className="space-x-2">
              <Link
                href={`/tasks/update/${task.id}`}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                編集
              </Link>
              <button
                onClick={() => onDelete(task.id)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                削除
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 