import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute({
  isAllowed,
  children,
}) {
  // Use an effect to alert the user without interrupting the render tree execution
  useEffect(() => {
    if (!isAllowed) {
      alert("Your favorites shelf is currently empty! Add some books from the Suggestions page first. ❤️");
    }
  }, [isAllowed]);

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}