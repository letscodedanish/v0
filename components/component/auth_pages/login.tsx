"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
    email: z.string().min(2, {
        message: "username must be at least 2 Characters long."
    }).max(50),
});

export function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <>
            <div className='absolute top-0 left-0 p-5 font-bold'>AlumniCo.</div>
            <Form {...form}>
                <div className="sm:w-420 flex flex-col w-1/2 justify-center items-center">
                    <div className="font-mono">
                        <h1 className="font-bold text-[38px]">Welcome Back!</h1>
                        <p className="text-[18px]"> Good to have you back! </p>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <div className="flex flex-col gap-3">
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
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
                                <Input placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <Button type="submit">Login</Button>

                    <div className="flex gap-2 justify-center">
                        Not have an account? 
                        <p className="font-bold"> Sign up </p>
                    </div>
                </form>
                </div>
            </Form>
            <div className='absolute bottom-0 p-5 font-bold text-gray-400'>
                <h1>© AlumniCo.</h1>
                <p className='font-normal'>All rights Reserved</p> 
            </div>
        </>
      );
}