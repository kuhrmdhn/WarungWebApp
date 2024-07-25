import { signOut } from "next-auth/react";
import Image from "next/image";

export default function LogOutButton() {
  return (
    <button onClick={() => signOut()} className="flex px-5 items-center gap-3">
      <Image width={20} height={20} alt="Log out button icon" src="/logout-icon.svg" />
      Logout
    </button>
  )
}
