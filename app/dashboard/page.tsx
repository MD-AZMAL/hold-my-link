import LogoutButton from "@/components/auth/LogoutButton";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <LogoutButton />
    </div>
  );
}
