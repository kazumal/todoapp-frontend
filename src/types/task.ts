export interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskInput {
  title: string;
  description: string;
  isCompleted: boolean;
} 