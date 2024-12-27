import React, { useState } from 'react'; // เพิ่ม useState
import RightPicWithButton from './RightPicWithButton';
import Semetry from './Semetry';
import LeftPicWithButton from './LeftPicWithButton';
import SpaFeelingsSection from './SpaFeelingsSection';
import Footers from './Footers';
import HeroSection from './HeroSection';

function SPA({ setActiveSection }) {
    const buttons = [
        { text: 'BOOK NOW', path: '/Booknow' },
    ];
    const button2 = [
        { text: 'BOOK NOW', path: '/Booknow' },
    ];
    

    return (
        <div>
            <HeroSection
                title="XDD"
                subtitle="A RAT SPA"
            />
            <RightPicWithButton
                description="Our spa is a place of serenity for you to relax and rejuvenate.
                We offer a variety of treatments and services to help you feel your best.
                Our spa is a place of serenity for you to relax and rejuvenate.
                We offer a variety of treatments and services to help you feel your best."
                imgSrc="/image/spa.jpg"
                buttons={buttons}
            />
            {/* ส่ง setActiveSection ไปยัง Semetry */}
            <Semetry setActiveSection={setActiveSection} />
            <LeftPicWithButton
                title="MEDITATION"
                description="Our meditation room features one of our favorite offerings in the spa, 
                our Meditation Loungers. This technology has been used to treat PTSD and 
                addiction and has recently been making its way into the spa world. 
                The loungers remove distractions and allow you to melt into a meditation 
                practice quickly and easily, leading to unprecedented levels of relaxation. 
                When you're short on time but in need of a reset, a 20-minute session in the 
                meditation room is the perfect solution."
                imgSrc="/image/spa3.png"
                buttons={button2}
            />
            <SpaFeelingsSection />
            <Footers />
        </div>
    );
}

export default SPA;
