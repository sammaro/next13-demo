'use client';
import { useTasks } from '@/context/TasksContext';
import { ActiveLink } from './ActiveLink';
import { menuItems } from './MenuItems';

export const NavBar = () => {

  const { tasks } = useTasks();
  return (
    <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
      <h1 className="font-bold text-3xl text-white">
        Task App <span className="text-slate-300 text-sm ml-5">({tasks.length} tasks)</span>
      </h1>
      <nav>
        {
          menuItems.map((props) => (
            <ActiveLink
              key={props.href}
              {...props}
            />
          ))
        }
      </nav>
    </header>
  )
}
