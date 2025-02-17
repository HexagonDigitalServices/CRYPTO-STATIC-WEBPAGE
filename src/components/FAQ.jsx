import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I get started?",
      answer: "Begin by creating an account and exploring our interactive tutorials."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel anytime through your account settings."
    },
    {
      question: "Is my data secure?",
      answer: "We use bank-grade encryption and follow strict security protocols."
    }
  ];

  return (
    <div>

    </div>
  );
};

export default FAQ;
