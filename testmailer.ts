import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "mail.buddhaspa.kz",
    port: 25,
    secure: false,
    auth: {
        user: "noreply@buddhaspa.kz",
        pass: "fz7eT$v6&keluJ",
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function testSMTP(): Promise<void> {
    try {
        const info = await transporter.sendMail({
            from: `"cert.buddhaspa" <noreply@buddhaspa.kz>`,
            to: "bakhitov.akhan@gmail.com",
            subject: "SMTP Test",
            text: "Этот email подтверждает, что SMTP работает корректно.",
        });

        console.log("✅ SMTP работает, письмо отправлено!");
        console.log("Ответ сервера:", info.response);
        console.log("Message ID:", info.messageId);
    } catch (error) {
        console.error("❌ SMTP тест провалился!");
        console.error(error);
    }
}

testSMTP();
