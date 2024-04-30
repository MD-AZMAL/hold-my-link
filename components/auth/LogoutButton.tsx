"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  const handleClick = () => {
    signOut();
  };
  return <Button onClick={handleClick}>Logout</Button>;
}
