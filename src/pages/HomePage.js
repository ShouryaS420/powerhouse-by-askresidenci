import React from 'react'
import Header from '../components/Header/Header';
import CarouselComponent from "../components/Carousel/CarouselComponent.js";
import FormComponent from "../components/Form/FormComponent.js";
import Keybenifits from "../components/benifits/Keybenifits.js";
import CallToAction from "../components/callToAction/CallToAction.js";
import FrequentlyAskedQuestion from "../components/FAQs/FrequentlyAskedQuestion.js";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs.js";
import Footer from "../components/Footer/Footer.js";

export default function HomePage() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Header />

            <div className="app">
                <CarouselComponent />
                <div className="carousel-overlay">
                    <FormComponent />
                </div>
            </div>

            <Keybenifits/>

            <WhyChooseUs/>

            <CallToAction/>

            <FrequentlyAskedQuestion/>

            <Footer/>
            
        </div>
    )
}
