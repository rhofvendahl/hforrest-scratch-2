import React from "react";
import PageHeader from './page-header';
import '../css/contact.css';


function Contact() {
  return (
    <>
      <PageHeader title={"Contact"} />
      <p className="contactInfo">Email: hardyizard@gmail.com</p>
      <p className="contactInfo">Phone: 970-210-1638</p>
    </>
  );
}

export default Contact;
