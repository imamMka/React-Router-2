import axios from "axios";
import Swal from "sweetalert2";

export const getUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/users`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Data user ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "User telah dihapus.",
          icon: "success",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/users", data);
    // console.log("Response backend:", response.data);
    console.log("Data dikirim ke backend:", JSON.stringify(data, null, 2));

    return response.data.message; // ✅ ambil message
  } catch (error) {
    console.error("Error addUser:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
