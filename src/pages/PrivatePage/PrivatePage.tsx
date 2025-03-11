import { useHypershipAuth } from "@hypership/auth-react";
import { Navigate } from "react-router-dom";

const PrivatePage = () => {
  const { isAuthenticated, currentUser, signOut, authenticating } =
    useHypershipAuth();

  if (authenticating) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const handleSignOut = () => {
    signOut();
    return <Navigate to="/auth" />;
  };

  return (
    <div>
      <p>This is a private route. You have to be signed in to view this.</p>
      <div>
        <p>Current User: {currentUser?.username}</p>
        <p>User ID: {currentUser?.id}</p>
      </div>
      <button className="button-primary" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default PrivatePage;
