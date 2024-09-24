import React, { useState, useRef } from 'react';
import "./keyBenifits.css";

export default function Keybenifits() {
    
    const [activeTab, setActiveTab] = useState('tab1');
    const tabRefs = useRef({});
    const tabsContainerRef = useRef(null);

    const tabs = [
        {
            id: 'tab1',
            title: 'Efficiency',
            heading: 'Streamlined Processes',
            subHeading: 'Enhance productivity with automated lead and team management systems.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
        {
            id: 'tab2',
            title: 'Insights',
            heading: 'Real-Time Analytics',
            subHeading: 'Gain actionable insights with live dashboards and performance metrics.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
        {
            id: 'tab3',
            title: 'Collaboration',
            heading: 'Team Collaboration',
            subHeading: 'Foster teamwork with tools that support seamless communication and updates.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
        {
            id: 'tab4',
            title: 'Compliance',
            heading: 'Regulatory Compliance',
            subHeading: 'Stay compliant with local real estate regulations effortlessly.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
        {
            id: 'tab5',
            title: 'Security',
            heading: 'Robust Security',
            subHeading: 'Secure your data with advanced encryption and privacy protocols.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
        {
            id: 'tab6',
            title: 'Support',
            heading: 'Continuous Support',
            subHeading: 'Access reliable support and assistance anytime through multiple channels.',
            imgUrl: 'https://assets.website-files.com/6133e256fb865fe4d677acbf/61fa259a9f8b4c69af2b3640_supercharge.webp'
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        if (tabRefs.current[tabId]) {
            const index = tabs.findIndex(tab => tab.id === tabId);
            const isTabInFirstHalf = index < (tabs.length / 2);
            const selectedTab = tabRefs.current[tabId];

            selectedTab.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: isTabInFirstHalf ? 'start' : 'end'
            });

            // Adjust scroll with a timeout to allow for smooth scroll completion
            setTimeout(() => {
                const scrollPadding = 10; // Adjust this value as needed for padding
                if (tabsContainerRef.current) {
                    if (isTabInFirstHalf) {
                        tabsContainerRef.current.scrollLeft -= scrollPadding;
                    } else {
                        tabsContainerRef.current.scrollLeft += scrollPadding;
                    }
                }
            }, 200); // Delay in ms, adjust timing if needed
        }
    };

    return (
        <div className="benefits-container" id="home-page">
            <h2 className="heading-h2">Core Advantages Unlocked</h2>
            <div className="home-usecases-tabs-menu" ref={tabsContainerRef}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        ref={el => tabRefs.current[tab.id] = el}
                        className={`home-usecases-tabs-link ${activeTab === tab.id ? 'show' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <div>{tab.title}</div>
                    </button>
                ))}
            </div>
            <div className="home-usecases-tabs-content show" id="tab1">
                {tabs.map(tab => (
                    activeTab === tab.id && (
                        <div key={tab.id} className="home-usecases-tabs-content-main">
                            <div className="home-usecases-tabs-content-text">
                                <h3>{tab.heading}</h3>
                                <p>{tab.subHeading}</p>
                                <button className="button-primary">See an Example</button>
                            </div>
                            <img src={tab.imgUrl} alt={`image-${tab.id}`} className="home-usecases-tabs-content-image" />
                        </div>
                    )
                ))}
            </div>
            {/* <!-- Additional content for other tabs --> */}
        </div>
    )
}
