
import React from 'react'

import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import "./otp.css"
import OtpInput from "otp-input-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Otp = () => {
  
    const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log(response);
            onSignup();
          },
          "expired-callback": () => {},
        },
        
      );window.recaptchaVerifier.render()
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  const navigate=useNavigate()
  const ToChatbot=()=>{
    navigate("/chat")
  }
  return (
    <section className='otp-cont' >
      <div className='otp-form'>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 >
          <button className='send-button'
              onClick={ToChatbot}>
              Start ChatBot
            </button>
          </h2>
        ) : (
          <div >
            <h1 >
              To use ChatBot <br /> verify
            </h1>
            {showOTP ? (
              <>
                <div>
                  <BsFillShieldLockFill size={40} color='white'/>
                </div>
                <label
                  htmlFor="otp" >
                  <span className='labeling'>Enter your OTP</span>
                </label>
                <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number"
                  disabled={false}
                  autoFocus
                  className="otp-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify} className='verify-otp'>
                  {loading && (
                    <CgSpinner size={20}  />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div>
                  <BsTelephoneFill size={40}  color='white'/>
                </div>
                <label
                  htmlFor="" >
                 <span className='labeling'>Enter your number</span>
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} className="otp-container" />
                <button
                  onClick={onSignup} className='send-button'>
                  {loading && (
                    <CgSpinner size={20}  />
                  )}
                  <span>Send OTP</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
  
}

export default Otp