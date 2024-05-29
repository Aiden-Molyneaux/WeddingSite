import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function FAQCard({ id, question, answer }) {
  FAQCard.propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  };

  return (
    <div key={id} className='faqCard'>
      <h6>Q: {question}</h6>
      <p>A: {answer}</p>
    </div>
  );
}