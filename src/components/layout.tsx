// import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "src/auth/useAuth";

const Layout = ({ children }) => {
  const { authenticated, logout } = useAuth();
  return (
    <>
      <nav className="bg-gray-800 h-16 shadow-sm text-white">
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img
                src="/home-color.svg"
                alt="Home House"
                className="inline w-6"
              />
            </a>
          </Link>
          {authenticated ? (
            <>
              <Link href="/houses/add">
                <a>Add House</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/auth">
              <a>Login / Signup</a>
            </Link>
          )}
        </div>
      </nav>
      <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
