import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const {status} = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="mx-auto sd:mx-2">
          Login
        </Link>
      ) : (
        <>
          <div className="flex gap-4">
            <div className="">
              <Link href="/write" className="mx-auto sd:mx-2">
                Write
              </Link>
            </div>
            <div className="">
              <span className="mx-auto sd:mx-2 cursor-pointer" onClick={signOut}>Logout</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
