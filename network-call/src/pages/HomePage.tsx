import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `Apakah yakin ingin menghapus data ${user.username}?`
    );
    if (confirmSubmit) {
      try {
        await axios.delete(`/users/${user.id}`);
        setReload(!reload);
        alert(`data ${user.username} berhasil dihapus!`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="flex justify-center justify-items-center py-10 gap-4">
      <table className="table-auto ">
        <thead className="p-4 bg-slate-600 text-white ">
          <tr>
            <th className="p-2 border text-center min-w-[50px]">No</th>
            <th className="p-2 border text-center min-w-[200px]">Username</th>
            <th className="p-2 border text-center min-w-[200px]">Email</th>
            <th className="p-2 border text-center min-w-[30px] items-center justify-center"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr key={idx} className="hover:bg-slate-300">
                <td className="p-2 border text-center">{idx + 1}</td>
                <td
                  className="p-2 border text-center"
                  onClick={() => navigate(`/${item.id}`)}
                >
                  {item.username}
                </td>
                <td className="p-2 border text-center">{item.email}</td>
                <td className="p-2 border text-center">
                  <MdDeleteOutline
                    className="text-red-400 text-lg hover:bg-red-500 rounded-full"
                    onClick={() => handleDelete(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
