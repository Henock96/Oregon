import { NextApiRequest, NextApiResponse } from 'next';

var accountSid = process.env.TWILIO_ACCOUNTSID;
var authToken = process.env.TWILIO_AUTHTOKEN;

var client = require('twilio')(accountSid, authToken);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { patientName, appointmentDateTime, appointmentReason, patientEmail } = req.body;


    /*const data = {
      from: 'Excited User <no-reply@yourdomain.com>', // Utilisez une adresse email vérifiée
      to: patientEmail, // Adresse du destinataire
      subject: 'Nouveau Rendez-vous',
      text: `Nom du Patient: ${patientName}\nDate et Heure du Rendez-vous: ${appointmentDateTime}\nMotif du rendez-vous: ${appointmentReason}`,
    };*/
    const data = {
      to: '+242065727846',
      from: '+15735333892',
      body: 'Ahoy!',
    } 

    try {
      await client.messages().create(data);
      res.status(201).json({ message: 'Rendez-vous pris avec succès!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'La prise de rendez-vous a échoué. Veuillez réessayer plus tard.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

/*import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';


export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const API_KEY = 'mlsn.f0e26e0fe8cb71751581fa019aa0737951166cd27fd6cff3372f8e9fe11dac9a';

  if (!API_KEY) {
    return res.status(500).json({ error: 'MAILER_SEND_API_KEY is not set.' });
  }

  if (req.method === 'POST') {
    const { patientName, appointmentDateTime, appointmentReason, patientEmail } = req.body;

    const mailerSend = new MailerSend({
      apiKey: API_KEY,
    });

    // Utilisez une adresse email vérifiée
    const sentFrom = new Sender('trial-z86org8oq104ew13@mlsender.net', 'Mipoka');
    const recipients = [new Recipient("hmipoka@gmail.com", patientName)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Nouveau Rendez-vous')
      .setText(`Nom du Patient: ${patientName}\nDate et Heure du Rendez-vous: ${appointmentDateTime}\nMotif du rendez-vous: ${appointmentReason}`);

    try {
      await mailerSend.email.send(emailParams);
      res.status(200).json({ message: 'Rendez-vous pris avec succès!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'La prise de rendez-vous a échoué. Veuillez réessayer plus tard.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
/*export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  /*const API_KEY = 'mlsn.f0e26e0fe8cb71751581fa019aa0737951166cd27fd6cff3372f8e9fe11dac9a';

  if (!API_KEY) {
    return res.status(500).json({ error: 'SENDGRID_API_KEY is not set.' });
  }**/

  /*if (req.method === 'POST') {
    const { patientName, appointmentDateTime, appointmentReason, patientEmail } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.mailersend.net', // Remplacez par votre fournisseur SMTP
      port: 587, // Port pour le fournisseur SMTP
      secure: false, // true pour les connexions TLS
      auth: {
        user: 'MS_lwQYnm@trial-z86org8oq104ew13.mlsender.net', // Remplacez par votre adresse email
        pass: 'HXbCaM6O6R5DxqLY', // Remplacez par votre mot de passe email
      },
    })
    /*const msg = {
      to: patientEmail, // Replace with the patient's email address
      from: 'doctor.smith@gmail.com', // Replace with the doctor's email address
      subject: 'New Appointment Scheduled',
      text: `Patient Name: ${patientName}\nAppointment Date and Time: ${appointmentDateTime}\nReason for Appointment: ${appointmentReason}`,
    };*/

    /*try {
      const mail = await transporter.sendMail({
        from: "trial-z86org8oq104ew13.mlsender.net",
        to: "hmipoka@gmail.com",
        replyTo: "trial-z86org8oq104ew13.mlsender.net",
        subject: `Website ${patientName}`,
        text: `Nom du Patient: ${patientName}\Date et Heure du Rendez-vous: ${appointmentDateTime}\nMotif du rendez vous: ${appointmentReason}`

      });
      res.status(200).json({ message: 'Rendez-vous pris avec succès!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'La prise de rendez-vous a échoué. Veuillez réessayer plus tard.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
*/
