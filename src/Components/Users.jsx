import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      <h1>Users 1</h1>
      <h1>Users 2</h1>
      <h1>Users 3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
    </div>
  );
}

export default Users;
