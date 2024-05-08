"use client";
// import "@/app/form.css";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/moving-border";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputShad } from "@/components/ui/inputshad";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Too long name.",
    }),
  email: z.string().email({ message: "Please enter a valid email." }),
  description: z
    .string()
    .min(5, {
      message: "Message must be atleast 5 characters.",
    })
    .max(100, {
      message: "Too long message",
    }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  // Defining template params for eamil js template

  const templateParams = {
    from_name: values.email,
    to_name: "Aswin Anand",
    msg: values.description,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_USER_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID ?? "",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      //@ts-ignore
    )
    .then((res) => {
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Email" }), 2000)
        );
      
        res.status == 200 && toast.promise(promise, {
        loading: "Loading...",
        success: (data: any) => {
          return `${data.name} sent successfully!`;
        },
        error: "Error",
      });
    });

  console.log("HERE", values);
}

export const FormUI = () => {
  //1. Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: " ",
      email: " ",
      description: " ",
    },
  });
  return (
    <>
        {/* <Toaster position="bottom-right" /> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-row justify-between items-center space-x-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <FormControl>
                    <InputShad
                      placeholder="Jhon Doe..."
                      {...field}
                      className="bg-[#ffffff12] text-white ring-none border-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <InputShad
                      placeholder="email@example.com"
                      {...field}
                      className="bg-[#ffffff12] text-white border-none ring-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message..."
                    className="resize-none bg-[#ffffff12] text-white border-none ring-none "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

//iztd gapw zwqd itfu
//invictusasw7@gmail.com
