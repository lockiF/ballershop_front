import React from 'react'
import { Link } from 'react-router-dom';
import './Help.css'
const WorkWithUs = () => {
  return (
    <div className='main'> 
        <img src = "/img/wwu.jpg" className='photo'/>
        <div className='text'>
        <h1 className = "title-h">Work With Us at Ballershop</h1>
        <p>Are you passionate about sports, fashion, and providing exceptional customer experiences? Join the Ballershop team and become part of a dynamic and exciting work environment! At Ballershop, we're always on the lookout for talented individuals who share our dedication to delivering top-notch products and service to our customers. Whether you're interested in retail, e-commerce, or behind-the-scenes operations, there may be a place for you on our team.</p>
        <h2 >Why Work With Us?</h2>
          <ul className="ul-h">
        <li className="li-h">Passionate Team: Join a team of like-minded individuals who are passionate about sports and fashion. At Ballershop, we foster a collaborative and supportive work environment where everyone's contribution is valued.</li>
        <li className="li-h">Opportunities for Growth: We believe in investing in our employees' development and growth. Whether you're starting your career or looking to advance, we offer opportunities for training and advancement within the company.</li>
        <li className="li-h">Exciting Work Environment: From keeping up with the latest trends in sports fashion to interacting with customers who share your enthusiasm, working at Ballershop is always exciting and dynamic.</li>
        <li className="li-h">Employee Discounts: Enjoy exclusive discounts on our products and perks as a member of the Ballershop team.</li>
         </ul>
         <ul className="ul-h">
        <h3 className = "title-h">Current Openings:</h3>
        <li className="li-h">Retail Sales Associate: Provide exceptional customer service, assist customers with product inquiries, and maintain the appearance of the store.</li>
        <li className="li-h">Marketing Specialist: Are you a creative thinker with a passion for marketing and sports? We're looking for a marketing specialist to help us tell our story and connect with athletes around the world.</li>
        <li className="li-h">Customer Service Representative: Do you have a knack for problem-solving and a passion for providing top-notch service? Join our team as a customer service representative and help us create positive experiences for our customers.</li>
        </ul>
        <h3 className = "title-h">How to Apply</h3>
        <p>If you're ready to join the BallerShop family and help us empower athletes everywhere, we want to hear from you! Please send your resume and a cover letter outlining why you'd be a great fit for the position to [email address]. Be sure to include the position you're applying for in the subject line.</p>
        <p>At BallerShop, we're more than just a store; we're a community of athletes dedicated to helping each other succeed. Come be a part of something special and make your mark on the world of sports with us. We can't wait to welcome you to the team!</p>
        </div>    
    </div>
  )
}

export default WorkWithUs;

