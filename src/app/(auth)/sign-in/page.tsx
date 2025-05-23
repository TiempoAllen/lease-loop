"use client";
import React from "react";
import googleIcon from "@/assets/googleIcon.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import signInImage from "../../../../public/svg/sign-in-background.svg";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="p-8 flex justify-center items-center h-screen">
      <div className="flex flex-col xl:w-[500px] xl:h-[500px] justify-center items-center py-6 px-8 border rounded-l-lg rounded-tr-none rounded-br-none border-gray-200">
        <div className="flex justify-center items-center relative mb-4">
          <Image
            src={signInImage}
            alt="sign-in-image"
            className="max-w-[220px] h-auto"
          />
        </div>
        <h1 className="text-xl font-bold mb-2">Lease-Loop</h1>
        <p className="text-sm">
          From tools to tech, fashion to furniture, borrow what you need or earn
          from what you own—securely and hassle-free.
        </p>
      </div>

      <div className="border rounded-r-lg rounded-tl-none rounded-bl-none border-gray-200 py-6 px-8 flex flex-col xl:w-[500px] xl:h-[500px] flex flex-column items-center justify-center">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-gray-500 mb-4">
            Choose your preferred sign in method
          </p>
          <Button
            variant="outline"
            className="w-full mb-2"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image src={googleIcon} alt="google-icon" className="h-4 w-4" />
            Sign in with Google
          </Button>
          <div className="flex items-center my-4 text-gray-400">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <span className="text-black">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
