"use client";
import { UserContextType } from "@/utils/types";
import LogInForm from "../LogInForm";
import { useUserContext } from "@/utils/contexts";
import React from "react";

const LogInWrapper = ({ children }: { children: React.ReactNode }) => {
  //deconstract useUserContext
  const { user } = useUserContext() as UserContextType;
  //choldren came from layout
  return <>{!user ? <LogInForm /> : children}</>;
};

export default LogInWrapper;
