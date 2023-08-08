import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import sendgrid from "~/utils/sendgrid";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(5).max(100).email(),
        message: z.string().min(50).max(500),
      })
    )
    .mutation(async ({ input }) => {
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
