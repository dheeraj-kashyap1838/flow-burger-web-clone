import React from 'react'
import footer_img_1 from '../assets/footer-img-1.jpg'
import footer_img_2 from '../assets/footer-img-2.jpg'
import footer_img_3 from '../assets/footer-img-3.jpg'
import footer_img_4 from '../assets/footer-img-4.jpg'
import footer_img_5 from '../assets/footer-img-5.jpg'
import footer_img_6 from '../assets/footer-img-6.jpg'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
        <footer className="footer__section bg-black text-white md:text-left text-center ">
          <div className="container mx-auto max-w-[1440px] px-4">
            <div className="flex flex-wrap py-10">
              {/* Logo and Description */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <img src={logo} alt="Logo" className="mb-4 mx-auto md:mx-0" />
                <p className="text-sm md:w-[80%] w-full">
                  I use Lorem ipsum text all day long and spend hours formatting it, so I set this site up to make my day a little easier.
                </p>
              </div>
    
              {/* Quick Links */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <h5 className="text-lg font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  <li > Home
                  </li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Gallery</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
    
              {/* Contact Us */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <h5 className="text-lg font-bold mb-4">Contact Us</h5>
                <div className="mb-4">
                  <div className="font-bold">Location:</div>
                  <p className="text-sm">A20 Green Hill Road, Fayetteville, California</p>
                </div>
                <div className="mb-4">
                  <div className="font-bold">Phone:</div>
                  <a className="text-white text-sm block" href="tel:+12092232635">+1 209-223-2635</a>
                </div>
                <div>
                  <div className="font-bold">Email:</div>
                  <a className="text-white text-sm block" href="mailto:info@radiancejewellery.com">info@radiancejewellery.com</a>
                </div>
              </div>
    
              {/* Gallery */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <h5 className="text-lg font-bold mb-4">Gallery</h5>
                <div className="flex flex-wrap gap-2">
                  {[footer_img_1,footer_img_2,footer_img_3, footer_img_4, footer_img_5, footer_img_6].map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Footer Gallery ${index + 1}`}
                      className="rounded w-[30%]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>

  )
}

export default Footer