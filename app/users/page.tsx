import { UserCard } from '@/components/User/Card';

const fetchUsers = async () => {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  return data.data;
}

const UsersPage = async () => {

  const users: UserCardPros[] = await fetchUsers();

  return (
    <div className='flex flex-wrap'>
      {
        users && users.length > 0 &&
        users.map((user: UserCardPros) => {
          return (
            <UserCard key={user.id} user={user} />
          )
        })
      }
    </div>
  );

}

export default UsersPage;