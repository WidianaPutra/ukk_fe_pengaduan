"use client";
import z from "zod";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import { useState, useRef } from "react";

type ErrorFormType =
  | [{ key: "username"; message: string }, { key: "password"; message: string }]
  | null;

export default function PsStudentLogin() {
  const [error, setError] = useState<ErrorFormType>([
    { key: "username", message: "" },
    { key: "password", message: "" },
  ]);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleLogin = () => {
    const inputSchema = z.object({
      username: z.string().min(5, "Minimal 5 karakter"),
      password: z.string().min(4, "Minimal 4 karakter"),
    });
    const result = inputSchema.safeParse({
      username: usernameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    });

    if (!result.success) {
      const errors = result.error.format();
      setError([
        {
          key: "username",
          message: errors.username?._errors?.[0] ?? "",
        },
        {
          key: "password",
          message: errors.password?._errors?.[0] ?? "",
        },
      ]);
      return;
    }
    setError(null);
    console.log("Login success", result.data);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-800">
      <div className="grid w-[450px] gap-[10px] rounded-xl bg-gray-100 px-5 py-7">
        <h1 className="mb-5 text-center text-2xl font-bold">Student Login</h1>
        <PsInput
          fullWidth={true}
          placeholder="username"
          ref={usernameRef}
          error={error?.[0].message}
        />
        <PsInput
          fullWidth={true}
          placeholder="password"
          ref={passwordRef}
          error={error?.[1].message}
          type="password"
        />
        <div className="mt-3 w-full">
          <PsButton fullWidth={true} event={handleLogin} variant="secondery">
            Login
          </PsButton>
        </div>
      </div>
    </div>
  );
}
