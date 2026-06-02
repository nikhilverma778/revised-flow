import { Navigate } from "react-router-dom";
import { useCareSessionStore } from "../store/useCareSessionStore";

export default function ProtectedCareRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isVerified = useCareSessionStore(
    (state) => state.isVerified
  );

  if (!isVerified) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}