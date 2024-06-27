"use client"
import "./globals.css"
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Button onClick={() => signIn("credentials")} type="submit" colorScheme='blue' className="w-1/4 self-end">Sign In</Button>
  );
}
