import React from 'react'
import Main from '../../components/main/Main'
import { ServicesDiv, ServicesForm } from './Services.style'

const Services = () => {
  return (
    <div>
      <Main />
      <ServicesDiv>
        <div>
          <h3>Services</h3>
          <nav>
            <h3>Websit Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit vero sed accusamus?
            </p>
            <p>Pricing: $1,00 - $3,00</p>
          </nav>
          <nav>
            <h3>Website Main tenance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit vero sed accusamus?
            </p>
            <p>Pricing: $250 per mount</p>
          </nav>
          <nav>
            <h3>Website Hosting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit vero sed accusamus?
            </p>
            <p>Pricing: $25 per mount</p>
          </nav>
        </div>
        <div>
          <ServicesForm>
            <h3>Get A Quote</h3>
                <label for="name">Name</label>
                <input type="text" placeholder="Name"/>
                <label for="name">Email</label>
                <input type="text" placeholder="Email Adress"/>
                <label for="name">Message</label>
                <textarea name="" id="" cols="10" rows="2"></textarea>
                <button>Send</button>

          </ServicesForm>
        </div>
      </ServicesDiv>
    </div>
  );
}

export default Services