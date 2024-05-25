import React from 'react'
import "./Help.css"

const Help = () => {
  return (
    <div class='Help'>
    <div class = "faq-h"> 
      <div class = "t-h">
      <div class = "title-h">Frequently Asked Questions (FAQ) </div>
        <ul>
          <li>How do I create an account? <br/><a>To create an account, click on the "Sign Up" button at the top right corner of the homepage. Fill in your details and click "Submit."</a></li>
          <li>How do I place an order? <br/> <a>Browse through our products, select the items you wish to purchase, and click "Add to Cart." Once you're ready to checkout, click on the cart icon and follow the checkout instructions.</a></li>
          <li>What payment methods do you accept? <br/> <a>We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.</a></li>
          <li> How can I track my order? <br/> <a>After placing an order, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website under the "Track Order" section.</a></li>
          <li> What is your return policy? <br/> <a>We offer a 30-day return policy for unused and unopened items. Please visit our Return Policy page for more details and instructions on how to process a return.</a></li>
          <li> How do I contact customer service? <br/> <a>You can reach our customer service team via email at mailto:support@onlinestore.com or call us at 1-800-123-4567. Our support hours are Monday to Friday, 9 AM to 5 PM EST.</a></li>
        </ul>
      </div>
    </div>

    <div class = "p&c-h">
      <div class = "t-h">
      <div class = "title-h">Privacy & Security </div>
        <ul>
          <li>Privacy Policy:<br/><a>We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</a></li>
          <li>Secure Shopping:<br/> <a>Our website uses SSL encryption to ensure that your personal and payment information is secure.</a></li>
        </ul>
      </div>
    </div>

    <div class = "cu-h">  
      <div class = "t-h">
      <div class = "title-h">Contact Us</div>
        <ul>
          <li>Customer Service:<br/><a>Email: mailto:support@onlinestore.com <br/>Phone: 1-800-123-4567<br/>Support Hours: Monday to Friday, 9 AM to 5 PM EST</a></li>
          <li>Mailing Address:<br/> <a>Online Store, Inc.<br/>1234 Shopping Lane<br/>E-commerce City, EC 56789</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Help
