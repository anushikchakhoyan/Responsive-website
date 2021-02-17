import React from "react";

import TwoColumnLayout from "../../components/TwoColumnLayout";
import ContactUsForm from "../../components/ContactUs/Form";
import ContactUsImage from "../../assets/contact-us.png";

const ContactUs = () => (
    <TwoColumnLayout attachment={ContactUsImage}>
        <h2 className="two-column-layout-content-title">Contact us</h2>
        <ContactUsForm />
    </TwoColumnLayout>
)

export default ContactUs;
