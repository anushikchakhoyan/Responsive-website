import React from "react";

import TwoColumnLayout from "../../components/TwoColumnLayout";
import ContactUsForm from "../../components/ContactUs/Form";
import ContactUsImage from "../../assets/contact-us.png";

const ContactUs = () => (
    <TwoColumnLayout attachment={ContactUsImage} title="Contact us">
        <ContactUsForm />
    </TwoColumnLayout>
)

export default ContactUs;
