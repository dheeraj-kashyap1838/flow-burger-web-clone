import React from 'react'

const Footer = () => {
  return (
        <footer className="footer__section bg-black text-white">
          <div className="container mx-auto max-w-[1440px] px-4">
            <div className="flex flex-wrap py-10">
              {/* Logo and Description */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <img src="logo.png" alt="Logo" className="mb-4" />
                <p className="text-sm w-[80%]">
                  I use Lorem ipsum text all day long and spend hours formatting it, so I set this site up to make my day a little easier.
                </p>
              </div>
    
              {/* Quick Links */}
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                <h5 className="text-lg font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <i className="fa-solid fa-house mr-2"></i> Home
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
                  {['footer-img-1.jpg', 'footer-img-2.jpg', 'footer-img-3.jpg', 'footer-img-4.jpg', 'footer-img-5.jpg', 'footer-img-6.jpg'].map((img, index) => (
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