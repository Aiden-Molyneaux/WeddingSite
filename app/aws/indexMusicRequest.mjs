import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'us-east-1' });

export const handler = async (event) => {
  const formData = JSON.parse(event.body);
  const { name, songs } = formData;
  
  let emailBody = `
    Music Request form submission:
    
    Name: ${name}`;
  
  for (let i = 0; i < songs.length; i++) {
    emailBody += `
      
      Song name: ${songs[i].songTitle}
      Song artist: ${songs[i].artistName}
    `;
  }

  const emailParams = {
    Source: 'molyneaux271@gmail.com',
    Destination: {
      ToAddresses: ['aidenmolyneaux@hotmail.com'],
    },
    Message: {
      Subject: {
        Data: `New Music Requests from ${name}`,
      },
      Body: {
        Text: {
          Data: emailBody,
        },
      },
    },
  };

  try {
    // Send the email using SESClient
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};