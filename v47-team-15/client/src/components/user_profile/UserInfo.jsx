import Chart from '../Chart';
import Chart2 from '../Chart2';
import { UserContext } from '../userContext';
import { useContext } from 'react';
// import { useParams } from "react-router";

function UserInfo() {
  const { username } = useContext(UserContext);
  // const { username: routeUsername } = useParams();

  return (
    <>
      <div className="w-full bg-[#1A183E] text-white h-1/2 p-16 flex flex-col justify-center items-center gap-4">
        <div className='text-2xl'>Hello, {username}!</div>
        <div className="w-28 h-28 text-center rounded-full bg-[#24224B] uppercase relative">
          <span className='text-3xl absolute top-8 left-0 right-0'>{username.charAt(0)}</span>
          </div>
        <small>Your portfolio includes favourites</small>
      </div>
    </>
  );
}

export default UserInfo;
