import React from 'react';
import HeroSection from './HeroSection';
import RightPicWithButton from './RightPicWithButton';
import FeaturedTreatment from './FeaturedTreatment';
import TREATMENTSMENU from './TREATMENTSMENU';
import LeftPicNoButton from './LeftPicNoButton';
import Footers from './Footers';
function SPATREATMENTS() {
    const buttons = [
        { text: 'BOOK NOW', path: '/Booknow' },
    ];
    return (
        <div>
            <HeroSection
        title="XDD"
        subtitle="A RAT SPA"
        mainText="SPA TREATMENTS & SERVICES " 
        description="Our spa is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best. Our spa is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best."
      />
       <RightPicWithButton
            
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            description2="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  "
            imgSrc="/image/spa22.jpg"
            buttons={buttons}
        />
         <TREATMENTSMENU
         menuTitle="TREATMENTS MENU"
         subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.         
         " />
         <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
         <FeaturedTreatment
        featuredTitle="FEATURED TREATMENT"
        sessionTitle="GROUNDING EARTH SESSION"
        duration="60 MINUTES"
        price="$145"
        highlights="guided breathwork • face & scalp massage • foot massage"
        description="Reconnect with your inner self and find solace amidst the hustle and bustle of modern life with our Grounding Earth Session. This grounding ritual begins with a guided breathwork journey that encourages you to slow down and reconnect with your breath. Once settled on the massage table, a pressure point face and scalp massage gently eases away stress, allowing you to fully embrace the present moment. A soothing reflex point foot massage completes this ritual, leaving you feeling centered and grounded in both body and mind. This treatment is ideal for individuals seeking to slow down and is particularly beneficial for those experiencing menopause and perimenopause, as it facilitates a deeper connection with the body during this transformative phase of life."
      />
      <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto', position: 'relative', }}>
            <div style={{ width: '50%', height: '50%', display: 'flex',flexDirection:'column' }}>
            <p style={{textAlign:'left', margin:'20px'}}>MASSAGE</p>
            <FeaturedTreatment
            descriptionWidth='80%'
        
        sessionTitle="XDD SIGNATURE MASSAGE"
        duration="90 MINUTES"
        price="$200"
        highlights="intention setting • hot towels • warm salt stones • massage"
        description="Our signature massage is a unique blend of techniques that will leave you feeling rejuvenated and refreshed. This treatment is designed to help you relax and unwind, while also addressing any areas of tension or discomfort. We use a combination of Swedish, deep tissue, and myofascial release techniques to help you achieve a state of deep relaxation and release. Our therapists will work with you to create a customized treatment plan that meets your individual needs and preferences. Whether you are looking for a relaxing experience or a therapeutic treatment, our signature massage is the perfect choice.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4ecdc4', color: 'white',  }}>
            <FeaturedTreatment
            descriptionWidth='80%'
       
        sessionTitle="NEOLIFTING© FACIAL MASSAGE"
        duration="90 MINUTES"
        price=" $235"
        highlights="intention setting • hot towels • warm salt stones • massage"
        description="We believe in embracing the privilege of aging and are excited to help you celebrate your beauty with this natural treatment. Through sculpting massage and buccal techniques, we work to bring the muscles in your face back to their healthy tone. After just one session, you’ll experience glowing skin, reduced facial tension, less wrinkles, a more defined jaw line, and a significant confidence boost! These benefits continue to grow with regular sessions. While this treatment has gained popularity worldwide, we are thrilled to introduce it to Maine as the first and only LMTs certified in NeoLifting© facial massage techniques.   
Please note, we are Licensed Massage Therapists, not Estheticians. We will not be cleansing or treating your skin – we focus on optimizing your facial muscles, enhancing lymph drainage, and promoting natural improvement of your skin from within. You can come make-up free or wash your face with our VOYA products before your treatment begins.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a535c', color: 'white',  }}>
            <FeaturedTreatment
            descriptionWidth='80%'
       
        sessionTitle="HERBAL COMPRESS MASSAGE"
        duration="90 MINUTES"
        price="$200"
        highlights="herbal compress • full body massage"
        description="This treatment serves as a potent remedy for tired muscles and a nurturing massage during sensitive times such as PMS, or whenever you need a little extra TLC. Throughout the session, herbal compresses infused with orange, clove, ginger, and Fucus Serratus seaweed are gently steamed and massaged into your body, releasing precious gel from the seaweed. This gel contains properties that promote tissue renewal and reduce inflammation, while also serving as an emollient, softening the skin. The warm gel forms a protective layer on your skin, minimizing moisture loss through evaporation and keeping you deeply hydrated. The rhythmic massage of this treatment is both invigorating and soothing, leaving you feeling relaxed, aligned, and nourished from within.   "
      />
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe66d', color: 'white',  }}>
            <FeaturedTreatment
            descriptionWidth='80%'
        
        sessionTitle="MINDFUL DREAMS"
        duration="60/90 MINUTES"
        price="$145/185$"
        highlights="meditation stones • rhythmic full body massage"
        description="Prepare yourself for a restorative night’s sleep with our Mindful Dreams treatment. This sleep-inducing experience begins with an invitation to practice mindful breathing accompanied by rose quartz meditation stones. You’ll enjoy a rhythmic Hawaiian and Balinese-inspired body massage and a blissful face and scalp massage to encourage a deep state of calm.
"
      />
            </div>
        </div>
        <div style={{ borderBottom: '1px solid #999',margin: '10px 0',width:'80%',justifySelf:'center'}}></div>
        <FeaturedTreatment
        featuredTitle="MAMA-TO-BE TREATMENTS"
        sessionTitle="PRENATAL MASSAGE"
        duration="60 MINUTES"
        price="$145"
        highlights="customized massage"
        description="A therapeutic massage designed specifically for the Mama-to-be to help ease the discomforts of growing a human. With a pregnancy pillow in place, you’ll be able to lie face down, safely and comfortably and enjoy this profoundly nurturing experience. Prenatal massages can easily be tailored to address your individual needs and can provide additional focus for your comfort and well-being.    "
      />
      <LeftPicNoButton
            title="SPA DETAILS:"
            title2="WHAT’S INCLUDED"
            description="Our spa is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best. Our spa is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best."
            imgSrc="/image/spa21.jpg"
        />
        <Footers />
        </div>
    );
}

export default SPATREATMENTS;
