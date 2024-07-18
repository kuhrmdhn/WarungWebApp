import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return <Button onClick={() => signOut()}>Log Out</Button>
}
