/**
 * _actions.js
 */
"use server";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Email from "../../emails";

export async function onSubmit(data, services) {
  try {
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const emailHtml = render(<Email />);

    // Send email
    async function sendAdminEmail() {
      const info = await transporter.sendMail({
        from: '"Extension Construct" <marketing.extension.con@gmail.com>',
        to: "marketing.extension.con@gmail.com",
        subject: "Cerere servicii",
        html: emailHtml,
      });

      console.log("Message sent: %s", info.messageId);
    }

    async function sendUserEmail() {
      const info = await transporter.sendMail({
        from: '"Extension Construct" <marketing.extension.con@gmail.com>',
        to: data.email,
        subject: "Mutumim ca ne-ati contactat",
        html: emailHtml,
      });

      console.log("Message sent: %s", info.messageId);
    }

    await sendAdminEmail();
    await sendUserEmail();
    return { message: "Mesaj trimis cu success!", ok: true };
  } catch (error) {
    console.log(error);
    return {
      message:
        "S-a produs o eroare, incercati mai tarziu sau contactatine telefonic.",
      ok: false,
    };
  }
}
