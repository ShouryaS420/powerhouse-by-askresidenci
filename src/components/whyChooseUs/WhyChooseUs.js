import React from 'react';
import './WhyChooseUs.css'; // Make sure your CSS is imported
import img1 from "../../assets/images/whychooseus/1.png";
import img2 from "../../assets/images/whychooseus/2.png";
import img3 from "../../assets/images/whychooseus/3.png";
import img4 from "../../assets/images/whychooseus/4.png";

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: `${img1}`, // Inline SVG or path to your SVG file
            title: 'Lead Optimization',
            description: 'Elevate conversion rates with our efficient lead management system designed to optimize sales outcomes.'
        },
        {
            icon: `${img2}`,
            title: 'Team Synergy',
            description: 'Enhance team productivity and accountability with tools that support seamless collaboration and real-time updates.'
        },
        {
            icon: `${img3}`,
            title: 'Insightful Analytics',
            description: 'Drive strategic decisions with our analytics dashboard, offering real-time insights to monitor and boost performance.'
        },
        {
            icon: `${img4}`,
            title: 'Broker-Centric Design',
            description: 'Enjoy a CRM tailored for real estate brokers, simplifying compliance and daily operations with specialized features.'
        }
    ];

    return (
        <div className="why-choose-us">
            <div className="container">
                <h2>Why Choose Us?</h2>
                <div className="benefits">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit">
                            <div className="benefit-icon">
                                <img src={benefit.icon} alt="" />
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
