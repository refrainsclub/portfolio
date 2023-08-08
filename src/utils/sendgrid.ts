import sendgrid from "@sendgrid/mail";
import { env } from "~/env.mjs";

sendgrid.setApiKey(env.SENDGRID_API_KEY);

export default sendgrid;
