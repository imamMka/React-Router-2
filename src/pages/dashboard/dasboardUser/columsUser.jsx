import { Trash2, Info, Pencil } from "lucide-react";
import { deleteUser } from "@/utils/api/users";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    accessorKey: "fullname",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Nomor Telepon",
  },
  {
    accessorKey: "age",
    header: "Umur",
  },
  {
    accessorKey: "address",
    header: "Alamat",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;
      const navigate = useNavigate();

      // handler delete user

      const handleDeleteUser = async (id) => {
        try {
          await deleteUser(id);
          alert("Data User Berhasil Dihapus");
          window.location.reload();
        } catch (error) {
          alert("Gagal Menghapus Data User" + error);
        }
      };

      return (
        <div className="flex gap-2">
          {/* Button Info */}
          <button onClick={() => navigate(`/dashboard/user/${id}`)}>
            <Info size={20} />
          </button>
          {/* Button Edit */}
          <button onClick={() => console.log("Ini Butto Edit")}>
            <Pencil size={20} />
          </button>
          {/* Button Delete */}
          <AlertDialog>
            <AlertDialogTrigger><Trash2 size={20} /></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah Anda yakin menghapus data</AlertDialogTitle>
                <AlertDialogDescription>
                  Data yang sudah dihapus tidak dapat dikembalikan lagi
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDeleteUser(id)}>Yes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
