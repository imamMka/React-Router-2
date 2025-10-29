import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dasboardUser/columsUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { getUsers} from "@/utils/api/users";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function DashboardUser() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddUser = () => {
    navigate("/dashboard/user/add");
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LayoutDashboard>
      <Button className="bg-[#0077b6] hover:bg-[#003566] text-white px-4 py-2 shadow-md transition mb-1" onClick={handleAddUser}>Add user</Button>
      <DataTable columns={columns} data={users} />
    </LayoutDashboard>
  );
}
