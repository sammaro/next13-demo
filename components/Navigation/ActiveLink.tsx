'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ActiveLink = ({ href, title }: LinkProps) => {

  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${pathName === href
        ? 'text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-text-blue-600 active:text-text-blue-700'
        : 'text-white hover:text-slate-600 focus:text-slate-600 active:text-seslatecondary-700'} transition duration-150 ease-in-out mr-3 font-bold text-3xl`}
    >
      {title}
    </Link>
  );

}