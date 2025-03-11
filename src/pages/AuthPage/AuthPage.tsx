import { AuthFlowPage } from "@hypership/auth-react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  return <AuthFlowPage onAuthSuccess={() => navigate("/private")} />;
};

export default AuthPage;
