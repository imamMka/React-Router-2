import { useState } from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <aside className={`${isOpen ? "w-64" : "w-16"} bg-white shadow-md p-4 flex flex-col transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        {isOpen && <h2 className="">Dashboard</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Link to="/dashboard/user" className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded">
          {isOpen && <span>User</span>}
          <User />
        </Link>

        <Link to="/dashboard/product" className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded">
          {isOpen && <span>Product</span>}
          <Package />
        </Link>
      </div>
    </aside>
  );
}
