import { Router } from "./Routes";
import { AuthProvider } from "./Context/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
