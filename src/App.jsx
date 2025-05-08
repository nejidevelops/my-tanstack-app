import { Link, Outlet } from '@tanstack/react-router';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🚀 TanStack Router Starter</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/users/123">User 123</Link> |{' '}
        <Link to="/users/404">User 404 (error demo)</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
