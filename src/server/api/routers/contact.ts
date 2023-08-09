import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import sendgrid from "~/utils/sendgrid";

interface CaptchaResponse {
  success: boolean;
}

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        captcha: z.string(),
        name: z.string().min(3).max(100),
        email: z.string().min(5).max(100).email(),
        message: z.string().min(50).max(500),
      }),
    )
    .mutation(async ({ input }) => {
      const params = new URLSearchParams();
      params.append(
        "secret",
        env.NODE_ENV === "development"
          ? "0x0000000000000000000000000000000000000000"
          : env.HCAPTCHA_SECRET_KEY,
      );
      params.append("response", input.captcha);

      const response = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const json: CaptchaResponse = (await response.json()) as CaptchaResponse;
      const { success } = json;

      if (!success)
        throw new TRPCError({ code: "BAD_REQUEST", message: "Captcha failed" });

      const email = {
        to: env.CONTACT_EMAIL,
        from: "noreply@jamesblair.nz",
        subject: `Contact form message received from ${input.name} (${input.email})`,
        text: `${input.message}`,
      };

      await sendgrid.send(email);
      return email;
    }),
});
