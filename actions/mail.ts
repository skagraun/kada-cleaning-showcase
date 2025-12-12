"use server";

import { z } from "zod";
import { ContactMeSchema } from "@/lib/validation";

type ContactFormData = z.infer<typeof ContactMeSchema>;

export async function sendRequestFormAction(
  data: ContactFormData
): Promise<{ errorMessage: string | null }> {
  // Validate the data
  const validatedFields = ContactMeSchema.safeParse(data);

  if (!validatedFields.success) {
    return { errorMessage: "Invalid form data" };
  }

  // Portfolio demo: simulate email sending with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, you would send an actual email here
  // For portfolio purposes, we just log and return success
  console.log("Contact form submission (demo):", {
    name: `${data.lastName} ${data.firstName}`,
    email: data.email,
    phone: data.phone,
    message: data.message,
  });

  return { errorMessage: null };
}
