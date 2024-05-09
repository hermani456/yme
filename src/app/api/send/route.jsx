// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const RESEND_API_KEY = "re_cLfRQ98L_Nz9tYZSc34fZad1a2aub2asQ";
const resend = new Resend(RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { file } = body;
  const fileBuffer = Buffer.from(file.replace('data:application/pdf;base64,', ''), 'base64');
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hermani457@gmail.com"],
      subject: "Hello world",
      text: "hey",
      attachments: [{ filename: "file.pdf", content: fileBuffer }],

    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
