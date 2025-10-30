import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "@/utils/api/users";
import { useState, useEffect } from "react";
import { Navigate, useParams,useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


function DetailUser() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fecthUserById = async (id) => {
    try {
      const response = await getUserById(id);
      setUser(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthUserById(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <LayoutDashboard>
        <div className="mb-6">
            <button onClick={() => navigate("/dashboard/user")}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition" >
                <ArrowLeft className="h-5 w-5" />
                <span>Kembali ke dashboard</span>
            </button>

        </div>
      <div className="mb-5 font-bold text-[16px]">Detail User</div>
      <div className="space-y-8">
        <div>
          <Label className="mb-1">Nama Lengkap</Label>
          <Input disable value={user.fullname} />
        </div>

        <div>
          <Label className="mb-1">Username</Label>
          <Input disable value={user.username} />
        </div>

        <div>
          <Label className="mb-1">Email</Label>
          <Input disable value={user.email} />
        </div>

        <div>
          <Label className="mb-1">Nomor Telepon</Label>
          <Input disable value={user.phone_number} />
        </div>

        <div>
          <Label className="mb-1">Umur</Label>
          <Input disable value={user.age} />
        </div>

        <div>
          <Label className="mb-1">Alamat</Label>
          <Input disable value={user.address} />
        </div>

        <div>
          <Label className="mb-1">Role</Label>
          <Input disable value={user.role} />
        </div>
        {/* <div>
            <Label>Password</Label>
            <Input disable value={user.password} />
        </div> */}
      </div>
    </LayoutDashboard>
  );
}

export default DetailUser;
