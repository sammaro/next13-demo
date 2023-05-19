import Image from 'next/image';
import Link from 'next/link';

export const UserCard = ({ user }: { user: UserCardPros }) => {

  const { id, first_name, last_name, email, avatar } = user;

  return (
    <div
      className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-2 m-3 text-center">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-6 inline-flex"
        data-te-ripple-init
        data-te-ripple-color="light">
        <Link href={`/users/${id}`}>
          <Image
            src={avatar}
            className="rounded-full"
            alt={email}
            width={85}
            height={85}
          />
        </Link>
      </div>
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {first_name} {last_name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {email}
        </p>
      </div>
    </div>
  );

}