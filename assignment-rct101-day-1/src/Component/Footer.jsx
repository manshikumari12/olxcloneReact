import React from 'react'
import "../Css/footer.css"
const Footer = () => {
  return (
    <div className='footerparent'>
    <div className='childfooter'>

<ul id='unique'>
    <li>Kolkata</li>
    <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
</ul>


<ul>
<p className='heading'>ABOUT US</p>
<li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
</ul>

<ul>
<p className='heading'>OLX</p>

<li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
</ul>
    </div>
    <p className="body" fontWeight="bold" color="text.secondary" align="center" >
                {' '}
                {new Date().getFullYear()}
                {/* {'.'} */}
                {' © '}
                Developed By Manshi Kumari
            </p>
  </div>
  )
}

export default Footer
