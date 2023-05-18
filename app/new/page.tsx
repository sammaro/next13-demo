'use client'

import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Props = {
  id: string;
}

const NewPage = ({ params }: { params: Props }) => {

  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const isEditing = params.id !== undefined;

  useEffect(() => {
    if (isEditing) {
      const taskFound = tasks.find((task: Task) => task.id === params.id);
      setValue('id', taskFound.id);
      setValue('title', taskFound.title);
      setValue('description', taskFound.description);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (isEditing) {
      updateTask(data);
      toast.success("Item edited successfully")
    } else {
      createTask(data);
      toast.success("New item added successfully")
    }
    router.push('/');
  });

  return (
    <div className="flex justifi-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="New task"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span
            className="block text-red-400 mb-2"
          >
            This field is required
          </span>
        )}
        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span
            className="block text-red-400 mb-2"
          >
            This field is required
          </span>
        )}
        <button
          className="bg-green-600 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
        >Save</button>
      </form>
    </div>
  )
}

export default NewPage;