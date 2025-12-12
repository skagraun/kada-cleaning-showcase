"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";

import { Loader2, Send } from "lucide-react";

import { sendRequestFormAction } from "@/actions/mail";
import { ContactMeSchema } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const t = useTranslations("contact.form");
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactMeSchema>>({
    resolver: zodResolver(ContactMeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactMeSchema>) => {
    startTransition(async () => {
      const { errorMessage } = await sendRequestFormAction(values);
      if (errorMessage) {
        toast({
          title: t("error"),
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        toast({
          title: t("success"),
          description: t("successDescription"),
        });
        form.reset();
      }
    });
  };

  const inputClassName =
    "h-12 bg-white/80 dark:bg-gray-800/80 border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">
                  {t("lastName")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("lastNamePlaceholder")}
                    className={inputClassName}
                    disabled={isPending}
                    {...field}
                    autoComplete="family-name"
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">
                  {t("firstName")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("firstNamePlaceholder")}
                    className={inputClassName}
                    disabled={isPending}
                    {...field}
                    autoComplete="given-name"
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">
                  {t("email")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("emailPlaceholder")}
                    type="email"
                    className={inputClassName}
                    disabled={isPending}
                    {...field}
                    autoComplete="email"
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-foreground">
                  {t("phone")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("phonePlaceholder")}
                    type="tel"
                    className={inputClassName}
                    disabled={isPending}
                    {...field}
                    autoComplete="tel"
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-sm font-medium text-foreground">
                  {t("message")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("messagePlaceholder")}
                    className="min-h-32 bg-white/80 dark:bg-gray-800/80 border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
          >
            {isPending ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2">
                {t("submit")}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
