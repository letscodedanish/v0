"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, }from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    fullname: z.string().min(2, {
        message: "must be at least 2 Characters long."
    }).max(50),
    orgtype: z.string(),
    email: z.string().min(2, {
        message: "username must be at least 2 Characters long."
    }).max(50),
    password: z.string().min(8, {
        message: "must be at least 8 characters long"
    }).max(50),

});

export function SignIn() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            orgtype: "",
            email: "",
            password: "",
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
                        <h1 className="font-bold text-[38px]">Welcome to AlumniCo.!</h1>
                        <p className="text-[18px]"> New Here? No Worries, Lets get you started! </p>
                    </div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <div className="flex flex-col gap-4 p-2">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Select>
                        <FormLabel>Type of Organization</FormLabel>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Organization Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="College">College</SelectItem>
                            <SelectItem value="University">University</SelectItem>
                            <SelectItem value="Company">Company</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    
                    <FormField
                        control={form.control}
                        name="email"
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
                    
                    <Button type="submit">SignIn</Button>

                    <div className="flex gap-2 justify-center">
                        Already have an account? 
                        <p className="font-bold"> Log In </p>
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