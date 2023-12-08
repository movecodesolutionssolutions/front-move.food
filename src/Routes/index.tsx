import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../Pages/Login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/Dashboard" element={<h1>Dasboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
