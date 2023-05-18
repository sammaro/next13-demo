import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { toast } from 'react-hot-toast';

export const TaskCard = ({ task }: { task: Task }) => {

  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleClick = (e: MouseEvent<HTMLButtonElement>, task: Task) => {
    e.stopPropagation();
    const accept = window.confirm('Are you sure you want to delete?');
    if (accept) {
      deleteTask(task);
      toast.success(`Task ${task.title} deleted successfully`);
    }
  }

  return (
    <div
      className="bg-gray/50 hover:bg-slate-600/50 px-20 py-5 m-2 cursor-pointer flex justify-between border-[1px] border-black "
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div>
        <h1>{task.title}</h1>
        <p className="text-gray-400 text-xs">{task.description}</p>
        <p className="text-gray-400 text-xs">{task.id}</p>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 px-3 py-1 font-bold rounded-sm inline-flex items-center"
        onClick={(e) => handleClick(e, task)}
      >Delete</button>
    </div>
  )
}
