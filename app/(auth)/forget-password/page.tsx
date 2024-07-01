"use client";
import React from "react";
import Image from "next/image";
import Paystride from "@/app/assets/Paystride.svg";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const ForgetPassword = (props: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();
  const handleOnSubmit = (data: FieldValues) => {
    const formData = getValues();
    console.log(formData);
    reset();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-b from-[#e0e2eb70] to-[#091f8e4b] text-[#7F7F7F] w-[80%] md:w-[40rem] p-5 rounded-xl">
        <Image src={Paystride} alt="paystride" className="w-auto" />
        <div className="my-8">
          <h2 className="font-bold text-3xl">Forgot password</h2>
          <p className="text-xs mt-2">Welcome back, enter your email address</p>
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
          <button
            type="submit"
            className="bg-[#091f8e] text-white text-sm py-3 px-10 w-fit mt-10 hover:bg-[#111b4d]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
