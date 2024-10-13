import { Logout } from "@mui/icons-material";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return (
    <button onClick={() => signOut()} className="flex px-5 items-center gap-3">
      <Logout/>
      Logout
    </button>
  )
}
