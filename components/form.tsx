"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/moving-border";
import {
  Form,
  FormControl,
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
  phone: z.string().max(24, { message: "Phone number is too long." }).optional(),
  description: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(600, {
      message: "Please keep the message under 600 characters.",
    }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_USER_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !publicKey) {
    toast.error("Email service is not configured.");
    return false;
  }

  const templateParams = {
    from_name: `${values.username} (${values.email})`,
    to_name: "Aswin Anand",
    company: values.phone ?? "",
    msg: values.description,
  };

  await toast.promise(emailjs.send(serviceId, templateId, templateParams, publicKey), {
    loading: "Sending...",
    success: "Email sent successfully!",
    error: "Email failed to send.",
  });
  return true;
}

export const FormUI = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      description: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            if (await onSubmit(values)) form.reset();
          })}
          className="space-y-7"
        >
          <div className="grid gap-7">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem data-aos="fade-down" data-aos-delay="120">
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <InputShad
                      placeholder="Your name"
                      {...field}
                      className="border-none bg-white/[0.09] text-white ring-none placeholder:text-neutral-500"
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
                <FormItem data-aos="fade-down" data-aos-delay="220">
                  <FormLabel className="text-white">Email address</FormLabel>
                  <FormControl>
                    <InputShad
                      placeholder="you@company.com"
                      {...field}
                      className="border-none bg-white/[0.09] text-white ring-none placeholder:text-neutral-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem data-aos="fade-down" data-aos-delay="320">
                <FormLabel className="text-white">Company or phone (optional)</FormLabel>
                <FormControl>
                  <InputShad
                    placeholder="Company, role, or phone"
                    {...field}
                    className="border-none bg-white/[0.09] text-white ring-none placeholder:text-neutral-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem data-aos="fade-down" data-aos-delay="420">
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about the role, project, timeline, or problem to solve."
                    className="min-h-28 resize-none border-none bg-white/[0.09] text-white ring-none placeholder:text-neutral-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            data-aos="fade-down"
            data-aos-delay="520"
            className="bg-white/[0.08] text-white"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send inquiry"}
          </Button>
        </form>
      </Form>
    </>
  );
};
