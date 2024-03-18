"use client";
import Image from "next/image";
import React from "react";
import Paystride from "@/app/assets/Paystride.svg";
import Link from "next/link";
import { useForm, FieldValues } from "react-hook-form";

type Props = {};

const Login = (props: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();

  const handleOnSubmit = (data: FieldValues) => {
    const loginData = getValues();
    console.log(loginData);
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-b from-[#e0e2eb70] to-[#091f8e4b] text-[#7F7F7F] w-[80%] md:w-[40rem] p-5 rounded-xl">
        <Image src={Paystride} alt="paystride" className="w-auto" />
        <div className="my-8">
          <h2 className="font-bold text-3xl">Sign In</h2>
          <p className="text-xs mt-2">Welcome back, enter your login details</p>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="border-[1.5px] border-[#091f8e] outline-0 rounded-lg py-3 px-5"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="border-[1.5px] border-[#091f8e] outline-0 rounded-lg py-3 px-5"
          />
          <div className="flex justify-between items-center text-xs mb-10">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="" id="rememberCheck" required />
              <label htmlFor="rememberCheck">Remember me</label>
            </div>
            <Link href="/forget-password">
              <p>Forgot Password?</p>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#091f8e] text-white text-sm py-3 px-10 w-fit hover:bg-[#111b4d]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
