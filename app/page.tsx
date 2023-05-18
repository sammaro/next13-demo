'use client';

import { TaskCard } from '@/components/Task/TaskCard';
import { useTasks } from '@/context/TasksContext';

const HomePage = () => {

  const { tasks } = useTasks();

  return (
    <div className="flex justify-center">
      <div className="w-7/12">

        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}

      </div>
    </div>
  )
}

export default HomePage;