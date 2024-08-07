"use client";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {FaFacebookF} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`bg-brown-heavy bg-cover bg-no-repeat text-white md:p-8 xl:p-0`} id="contact">
      <div className={`container mx-auto flex justify-between flex-wrap pt-10 gap-8`}>
        <div className="w-80">
          <h2 className="pb-5">Contact Us</h2>
          <div className={`contact-us flex flex-col gap-6`}>
            <div className="flex gap-3">
              <FaMapMarkerAlt size={22} />
              <span className="text-white">52 Willoughby Rd Crows Nest, NSW, Australia 2065</span>
            </div>
            <div className="flex gap-3">
              <FaPhoneAlt size={22} />
              <span className="text-white">(02) 9460 8937</span>
            </div>
            <div className="flex gap-3">
              <IoMail size={22} />
              <a href="mailto:info@sunrisesips.com.au" className="text-white">
                info@chillrestaurant.com.au
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Facebook">
                <FaFacebookF size={32} className="text-blue-facebook"/>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Instagram">
                <div className="outer">
                  <div className="inner">
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-80">
          <h2 className="pb-5">Opening Hours</h2>
          <div className="divide-y flex flex-col gap-4">
            <div className={`opening-hours flex flex-col gap-3`}>
              <span className="text-white">Open time : 11:00am - 9:30pm</span>
              <span className="text-white">Every day in week</span>
            </div>
            <div className={`flex flex-col gap-3 pt-4`}></div>
          </div>
        </div>
        <div className="w-80">
          <h2 className="pb-5">Location</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14414.329107815951!2d151.2027168405928!3d-33.82639824624899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aee8267f65ab%3A0xe63a0d691a1fa9c4!2s52%20Willoughby%20Rd%2C%20Crows%20Nest%20NSW%202065%2C%20Australia!5e0!3m2!1sen!2s!4v1722497111601!5m2!1sen!2s"
              width="326"
              height="216"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title={"map"}
            ></iframe>
          </div>
        </div>
        <div className="w-full">
          <p className="text-white text-center pt-12 pb-12">© 2024 Sunrise Sips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
