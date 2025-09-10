"use client";
import { useEffect } from "react";
import { useUserContext } from "@/utils/contexts";
import { useRouter } from "next/navigation";
import LogInForm from "@/components/LogInForm";

const Login = () => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/profile"); // redirect if already logged in
    }
  }, [user, router]);

  if (user) return null; // prevents showing login form when logged in

  return <LogInForm />;
};

export default Login;
