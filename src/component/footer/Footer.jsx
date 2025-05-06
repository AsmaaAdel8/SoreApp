import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="bg-pink-800 w-full h-[50vh] grid grid-cols-4 gap-32 mt-10 ">
      <div>
        <h3>Customer Care</h3>
        <p>Help Center</p>
        <p>How to Buy</p>
        <p>Returns and Refunds </p>
        <p>Contact Us</p>
        <div>
          <h3>Earn with Daraz</h3>
          <p>Daraz University</p>
          <p>Sell on Daraz</p>
          <p>Code of Conducts</p>
        </div>
      </div>
      <div>
        <h3>Daraz</h3>
        <p>About Daraz</p>
        <p>Careers</p>
        <p>Daraz Blog</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Digetal Payment</p>
        <p>Daraz Customer Universty</p>
        <p>Daraz Afflate Program</p>
        <p>Review & Win</p>
        <p>Meet The Winner</p>
      </div>
      <div>
        <h3>Daraz International</h3>
        <p>
          <span>Pakistan</span>
          <span>Bangiladesh</span>
          <span>Srilanka</span>
        </p>
        <p>
          <span>Myarmar</span>
          <span>Nepal</span>
        </p>
        <div>
          <h3>Paymen Method</h3>
          <p>
            <span>CACH ON DELEVERY</span>
            <span>VISA</span>
          </p>
          <p>
            <span>MasterCard</span>
            <span>eSewa</span>
            <span>IME Pay</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="bg-amber-700 w-3xl rounded-lg font-medium text-amber-200">
          <SlSocialDropbox className="text-4xl text-white" /> DARAZ
        </h2>
        <p>Happy Shopping</p>
        <h3>Follow Us</h3>
        <p className="grid grid-cols-4 gap-4">
          <FaFacebook />
          <BsInstagram />
          <BsYoutube />
          <CgWebsite />
        </p>
      </div>
    </div>
  );
}
