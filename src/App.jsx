import { Link, Outlet } from "@tanstack/react-router";

function App() {
  return (
    <div>
      <h1>Root</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
