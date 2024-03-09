/**
 * _actions.js
 */
"use server";

import nodemailer from "nodemailer";

export async function onSubmit(data) {
  try {
    console.log("Form data:", data);

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

    // Send email
    async function sendAdminEmail() {
      const info = await transporter.sendMail({
        from: '"Extension Construct" <marketing.extension.con@gmail.com>',
        to: "bitcode222@gmail.com",
        subject: "Hello ✔",
        text: "Multumim ca ne-ati contactat.",
        html: "<basjbkdakjs bdakjs bdjas bdkjasd</b>",
      });

      console.log("Message sent: %s", info.messageId);
    }

    async function sendUserEmail() {
      const info = await transporter.sendMail({
        from: '"Extension Construct" <marketing.extension.con@gmail.com>',
        to: "marketing.extension.con@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
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
