'use client';

import { UserCard } from '@/components/User/Card';

const fetchUser = async (id: string) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

interface Props {
  id: string;
}

const UserDetail = async ({ params }: { params: Props }) => {

  const user: UserCardPros = await fetchUser(params.id);

  return (
    <>
      <UserCard user={user} />
    </>
  );

}

export default UserDetail;