'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ActiveLink = ({ href, title }: LinkProps) => {

  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${pathName === href ? 'text-[#0070f3]' : 'text-white'} mr-3 font-bold text-3xl`}
    >
      {title}
    </Link>
  )
}