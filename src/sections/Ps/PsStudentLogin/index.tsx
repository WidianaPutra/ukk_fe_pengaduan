"use client";
import z from "zod";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import PsSVG from "@/components/Ps/PsSVG";
import { useState, useEffect, useRef } from "react";

type ErrorFormType = [
  { key: "username"; message: string },
  { key: "password"; message: string },
];

export default function PsStudentLogin() {
  const [error, setError] = useState<ErrorFormType>([
    { key: "username", message: "" },
    { key: "password", message: "" },
  ]);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const inputSchema = z.object({
      username: z.string().min(5),
      password: z.string().min(4),
    });

    const inputValidation = inputSchema.safeParse({
      username: usernameRef?.current?.value,
      password: passwordRef?.current?.value,
    });

    if (inputValidation.error?.format()) {
      setError([
        {
          key: "username",
          message: inputValidation.error.format().username?._errors?.[0]
            ? "Minimal 5 karakter"
            : "",
        },
        {
          key: "password",
          message: inputValidation.error.format().password?._errors?.[0]
            ? "Minimal 4 karakter"
            : "",
        },
      ]);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid w-[400px] gap-[10px] rounded-lg bg-gray-200 p-7">
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
        />
        <div className="mt-3 w-full">
          <PsButton fullWidth={true} event={handleLogin}>
            Login
          </PsButton>
        </div>
      </div>
    </div>
  );
}
