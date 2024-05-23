import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FAQCard from '../components/FAQCard';

export default function FAQ() {
  const faqData = [
    {
      question: "What is the dress code?",
      answer: "Semi-formal attire is requested. Please no jeans, shorts, or flip-flops."
    },
    {
      question: "Will there be food and drinks?",
      answer: "Yes! We will have a full dinner and an open bar."
    },
    {
      question: "Can I bring a plus one?",
      answer: "If you have been given a plus one, you will see an option to accept it in the RSVP form."
    },
    {
      question: "What is the parking situation?",
      answer: "There is a parking lot at the venue that is free to use."
    },
    {
      question: "Can I bring my kids?",
      answer: "We love kids, but this is an adults-only event."
    },
    {
      question: "What time does the ceremony start?",
      answer: "The ceremony will begin at 4:00 PM."
    },
    {
      question: "What time does the reception end?",
      answer: "The reception will end around 12:00 AM."
    },
    {
      question: "Can I take pictures?",
      answer: "We have hired a professional photographer to capture the event, so we ask that you leave the picture-taking to them."
    },
    {
      question: "How did you source such a brilliant website?",
      answer: "Well, Aiden created everything himself! He's a software developer and wanted to make something special for our wedding guests."
    }
  ];

  const midpoint = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, midpoint);
  const secondHalf = faqData.slice(midpoint);

  return (
    <div className='pageContent'>
      <h3 className='sectionHeader'>Frequently Asked Questions</h3>
      <div className='faqStacks'>
        <div className='faqStack'>
          {firstHalf.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className='faqStack'>
          {secondHalf.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className='emailDetails'>
        <h4>Have any further questions? Email Kyra:</h4>
        <a href='mailto:kyramolyneaux@gmail.com' className='experienceName bottomMargin' id='emailLink' >kyramolyneaux@gmail.com <FontAwesomeIcon icon={faPaperPlane}/></a>
      </div>
    </div>
  );
}