import { useSelector } from "react-redux";
import { Outlet } from "react-router";

import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const adminAuth = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminAuth;

  return <>{adminInfo ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
