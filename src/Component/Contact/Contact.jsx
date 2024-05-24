import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2995e12a-862b-4e00-88aa-bb27e9ddc4b2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult(" Email send Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }

    }




    return (
        <div className="contact">
            <div className="contact-col">
              <h3>Send a Message <img src={msg_icon} alt="" /></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa vitae quasi labore ullam! Esse rem consequuntur, quae dolore sequi distinctio perspiciatis quidem tempora inventore.</p>
              <ul>
                <li><img src={mail_icon} alt="" />Contact@naveenrasanaveen.gmail </li>
                <li> <img src={phone_icon}alt="" />+1 123-456-7890</li>
                <li> <img src={location_icon} alt="" />77 Ramaya colony <br /> Tiruppur <br /> Tamilnadu</li>
              </ul>
            </div>
            <div className="contact-col">
             <form onSubmit={onSubmit} >
                <label htmlFor="">Your Name</label>
                <input type="text"  name='name' placeholder='Enter your Name ' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your number' required />
                <label htmlFor=""> Write Your Message</label>
                <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit now <img src={arrow}alt="" /></button>
             </form>
             <span>
                {result}
             </span>
            </div>

        </div>
    )
}

export default Contact