import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <Outlet />   {/* sirf admin pages */}
    </div>
  );
};

export default AdminLayout;
