import { EmailTemplate } from '../../components/EmailTemplate.jsx';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { file } = body;
  const { userData } = body;
  const { name, cargo, email, phone } = userData;
  const fileBuffer = Buffer.from(
    file.replace("data:application/pdf;base64,", ""),
    "base64"
  );
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hermani457@gmail.com"],
      subject: "Yme - Solicitud de empleo",
      react: EmailTemplate({name, cargo, email, phone}),
      attachments: [{ filename: `${name}.pdf`, content: fileBuffer }],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
