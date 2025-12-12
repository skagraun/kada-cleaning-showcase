import * as z from "zod";

// Magyar telefonszám regex: +36, 06, vagy sima szám, 9-12 számjegy
const phoneRegex = /^(\+36|06)?[\s-]?\d{1,2}[\s-]?\d{3}[\s-]?\d{3,4}$/;

export const ContactMeSchema = z.object({
  lastName: z.string().min(1, { message: "Vezetéknév megadása kötelező!" }),
  firstName: z.string().min(1, { message: "Keresztnév megadása kötelező!" }),
  phone: z
    .string()
    .min(1, { message: "Telefonszám megadása kötelező!" })
    .regex(phoneRegex, {
      message: "Érvényes telefonszám formátum: +36 30 123 4567 vagy 06 30 123 4567",
    }),
  email: z
    .string()
    .email({ message: "Érvényes e-mail cím megadása kötelező!" }),
  message: z
    .string()
    .min(10, { message: "Üzenet megadása kötelező! (legalább 10 karakter)" }),
});
