import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = ({closeMenu}) => {
  const {status} = useSession();
  const handleLogout = () => {
    signOut();
    closeMenu();
  };
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="mx-auto sd:mx-2" onClick={closeMenu}>
          Login
        </Link>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-[60px] sm:gap-4 justify-center items-center">
            <div className="">
              <Link href="/write" className="mx-auto sd:mx-2" onClick={closeMenu}>
                Write
              </Link>
            </div>
            <div className="">
              <span className="mx-auto sd:mx-2 cursor-pointer" onClick={handleLogout} >Logout</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
