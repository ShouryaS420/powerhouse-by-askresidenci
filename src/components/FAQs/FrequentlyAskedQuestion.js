import React, { useState } from 'react';
import "./FrequentlyAskedQuestion.css";

export default function FrequentlyAskedQuestion() {

    const faqs = [
        {
            question: 'What is AskResidenci Powerhouse?',
            answer: 'AskResidenci Powerhouse is a comprehensive CRM solution designed specifically for real estate brokers to manage leads, team activities, and performance analytics efficiently.'
        },
        {
            question: 'How does the lead management system work?',
            answer: 'Our system allows for bulk upload, automatic assignment, and detailed tracking of leads to ensure maximum engagement and higher conversion rates.'
        },
        {
            question: "Can I track my team's performance and attendance?",
            answer: 'Yes, the app includes features for real-time attendance tracking with selfie and location verification, alongside performance monitoring via our live dashboard.'
        },
        {
            question: 'How does the app handle data security?',
            answer: 'We prioritize data security with advanced encryption and compliance with industry-standard data protection regulations to safeguard your information.'
        },
        {
            question: 'Is AskResidenci Powerhouse compliant with local real estate regulations?',
            answer: 'Absolutely, our CRM is built to comply with local regulations, including RERA, ensuring that all brokerage activities are up to standard.'
        },
        {
            question: 'What support is available for users of AskResidenci Powerhouse?',
            answer: 'We offer comprehensive support through multiple channels including email, phone, and a dedicated online help center to assist with any questions or issues.'
        },
        // Add other FAQs as needed
    ];

    // State to track expanded FAQ items
    const [expanded, setExpanded] = useState({});

    const toggleFAQ = index => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div class="faq-section" id="faqs" >
            <div class="container">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-columns">

                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button onClick={() => toggleFAQ(index)} className={`faq-question ${expanded[index] ? 'shadow' : ''} `}>
                                {faq.question} <span className="plus">{expanded[index] ? '-' : '+'}</span>
                            </button>
                            <div className={`faq-answer ${expanded[index] ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                    {/* <div class="faq-item">
                        <button class="faq-question">What is your return policy? <span class="plus">+</span></button>
                        <div class="faq-answer">
                            <p>We offer a 30-day return policy...</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
