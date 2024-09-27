import React from 'react';
import useIsMobile from '../utils/useIsMobile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FAQCard from '../components/FAQCard';
import { faqData } from './faqData.jsx';

export default function FAQ() {
  const isMobile = useIsMobile();

  const midpoint = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, midpoint);
  const secondHalf = faqData.slice(midpoint);

  const DesktopFAQStack = () => (
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
  );

  const MobileFAQStack = () => (
    <div className='faqStack'>
      {faqData.map((faq, index) => (
        <FAQCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );

  return (
    <div className='pageContent'>
      <h3 className='sectionHeader'>Frequently Asked Questions</h3>
      { isMobile
        ? <MobileFAQStack/>
        : <DesktopFAQStack/>
      }
      <div className='emailDetails'>
        <h4>Have any further questions? Email Kyra:</h4>
        <a href='mailto:kyramolyneaux@gmail.com' className='experienceName bottomMargin' id='emailLink' >kyramolyneaux@gmail.com <FontAwesomeIcon icon={faPaperPlane}/></a>
      </div>
    </div>
  );
}