import { useParams } from 'react-router-dom';

function User() {
  const { userName } = useParams();
  function LogOut() {
    
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">User Page</h1>
      <h2 className="text-gray-300">
        User's Name: <span className="text-blue-400">{userName}</span>
      </h2>

      <button onClick={()=> LogOut()}>LogOut</button>
    </div>
  );
}
export default User;
