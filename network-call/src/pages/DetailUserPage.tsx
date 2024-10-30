import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../helpers/axios";
import { IUser } from "../types/user";

function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className=" flex flex-col items-center text-2xl font-semibold p-10 min-w-[400px] bg-gray-300 rounded-lg">
        <div className="flex w-25">
          <h1>Username : {user?.username}</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailUserPage;
