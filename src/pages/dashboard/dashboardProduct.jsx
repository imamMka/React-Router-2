import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dasboardUser/columsUser";
import { data } from "@/utils/dataUser/dataUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";

export default function DashboardProduct() {

  return (
    <LayoutDashboard>
      <DataTable columns={columns} data={data} />
    </LayoutDashboard>
  );
}
