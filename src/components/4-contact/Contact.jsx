import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json";
import contactUsAnimation from "../../../src/animation/contactus.json";;
import './contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeoqwwyv");

  return (
    <section className='contact'>
      <div className='content flex'>
        <MdEmail className="massage" />
        <h3 className="title">Contact Us</h3>
      </div>
      <p>Contact us for more information and get notified when I publish something new.</p>
      <div style={{justifyContent:'space-between'}} className='flex'>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor='name'>Your Name :</label>
            <input autoComplete="off" required type='text' name="name" id='name' />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: '24px' }}>
            <label htmlFor='email'>Email Address:</label>
            <input autoComplete="off" required type='email' name="email" id='email' />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: '24px' }}>
            <label htmlFor='message'>Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            {state.succeeded && (
              <div className="success-message" style={{ marginTop: "24px"}}>
                <p className="flex" style={{ fontSize: "16px", marginTop: "1.7rem" }}>
                  <Lottie loop={false} style={{ height: 33 }} animationData={doneAnimation} />
                  Your message has been sent successfully!
                </p>
              </div>
            )}
          </div>

          <button type="submit" disabled={state.submitting}>Submit</button>
        </form>

        {/* نقل الرسالة إلى أسفل النموذج */}
      
        
        <div className="border animation">
        
        <Lottie style={{ height:350 }} className="contactUsAnimation" animationData={contactUsAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;