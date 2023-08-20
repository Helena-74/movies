import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
<>
    <header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movies</Link>
      </nav>
    </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
</>
  );
}