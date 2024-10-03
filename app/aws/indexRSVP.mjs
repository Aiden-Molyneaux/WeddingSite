import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'us-east-1' });

export const handler = async (event) => {
  const formData = JSON.parse(event.body);
  const { 
    name, 
    acceptPlusOne, 
    namePlusOne, 
    willAttend,
    mealChoice,
    mealChoicePlusOne,
    dietaryRestrictions,
    additionalNotes  
  } = formData;

  const emailBody = `
    RSVP form submission:

    Name: ${name}
    
    Attendance Details:
    - Will Attend: ${willAttend ? 'Yes' : 'No'}
    - Accepting Plus One: ${acceptPlusOne ? 'Yes' : 'No'}
    ${acceptPlusOne ? `- Plus One's Name: ${namePlusOne}` : ''}

    Meal Choices:
    - Guest's Meal Choice: ${mealChoice}
    ${acceptPlusOne ? `- Plus One's Meal Choice: ${mealChoicePlusOne}` : ''}

    Dietary Restrictions: ${dietaryRestrictions || 'None'}
    
    Additional Notes:
    ${additionalNotes || 'No additional notes.'}`
  ;

  const emailParams = {
    Source: 'molyneaux271@gmail.com',
    Destination: {
      ToAddresses: ['aidenmolyneaux@hotmail.com'],
    },
    Message: {
      Subject: {
        Data: `New RSVP from ${name}`,
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