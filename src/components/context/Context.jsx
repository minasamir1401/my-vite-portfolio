import React from "react";
import "./Context.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mina15g4y@gmail.com",
    link: "mailto:mina15g4y@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "RedaTech",
    link: "https://m.me/houdareda.99",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01279301263",
    link: "https://api.whatsapp.com/send?phone=201279301263",
  },
];

export default function Context() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_05pweqy",      
      "template_gem774c",    
      e.target,
      "7f7e9D_arxsTXJajP"     
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    });

  }

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">Send Message</a>
            </article>
          ))}
        </div>

        <form onSubmit={sendEmail} id="contact-form">
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Your Phone" name="phone" />
          <textarea name="message" rows={10} placeholder="Enter Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  );
}