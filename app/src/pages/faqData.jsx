const setLocation = () => {
  window.localStorage.setItem('location', JSON.stringify({ path: '/RSVP' }));
};

export const faqData = [
  {
    question: 'When is the wedding?',
    answer: (
      <>
        The wedding ceremony will be held on Saturday, September 20th, 2025 at 4:00pm. Stewart Park (41 Mill St, Perth, ON K7H 1W2). Following the ceremony, there will be a reception at Michael's Table (110 Gore St E, Perth, ON K7H 1J3).
      </>
    )
  },
  {
    question: 'Do you have any hotel recommendations?',
    answer: (
      <>
        We haven't secured room blocks, but there are a couple of nearby options for your convenience: <br/><br/>Best Western Hotel / Spa<br/>AirBnB
      </>
    )
  },
  {
    question: 'What is the dress code?',
    answer: 'We kindly request semi-formal attire for the wedding. Please avoid jeans or overly casual wear. We encourage you to wear the colours blush and navy blue, but feel free to wear whatever makes you feel comfortable and festive!'
  },
  {
    question: 'When is the RSVP deadline?',
    answer: (
      <span>
        The RSVP deadline is June 1st. Please let us know if you can attend by using our <a href='/RSVP' onClick={setLocation} className='faqRSVP'>RSVP form</a>.
      </span>
    )
  },
  {
    question: 'Are children invited?',
    answer: 'We love kids, but this is an adults-only event.'
  },
  {
    question: 'Can I bring a guest?',
    answer: 'If you have been given a plus one, you will see an option to accept it in the RSVP form.'
  },
  {
    question: 'What is the schedule for the day?',
    answer: 'The ceremony will begin at 4:00pm, followed by a cocktail hour from 5:00pm to 6:00pm. The reception will start at 6:00pm and continue into the evening.'
  },
  {
    question: 'Who can I contact with questions?',
    answer: 'If you have any further questions, please feel free to contact Kyra. Her contact email is at the bottom of the page.' // or Brooke (on the Wedding day enter number).
  },
  {
    question: 'What is the wedding hashtag?',
    answer: 'Feel free to share photos and well wishes using our wedding hashtag: #MolyneauxWedding.'
  },
  {
    question: 'How did you source such a lovely website?',
    answer: 'Well, Aiden created everything himself! He\'s a software developer and wanted to make something special for our wedding guests.'
  }
];