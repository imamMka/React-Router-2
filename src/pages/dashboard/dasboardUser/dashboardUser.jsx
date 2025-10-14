import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dasboardUser/columsUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { getUsers} from "@/utils/api/users";
import { useState, useEffect } from "react";

export default function DashboardUser() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LayoutDashboard>
      <DataTable columns={columns} data={users} />
    </LayoutDashboard>
  );
}
