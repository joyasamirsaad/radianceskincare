"use client";
import Link from 'next/link';
import Image from 'next/image';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import React from 'react';

export default function Homepage() {

      const [isSubmitDisabled2, setisSubmitDisabled2] = useState(true);
        // Form state
        const [location, setLocation] = useState("");
        const [phone, setPhone] = useState("");
      
        const [quantity, setQuantity] = useState("");
        const [quantityError, setQuantityError] = useState("");
        // For credit card inputs
        const [cardNumber, setCardNumber] = useState("");
        const [cardNumberError, setCardNumberError] = useState("");
        const [expiryDate, setExpiryDate] = useState("");
        const [expiryDateError, setExpiryDateError] = useState("");
        const [cvv, setCvv] = useState("");
        const [cvvError, setCvvError] = useState("");
      
        // Error state
        const [locationError, setLocationError] = useState("");
        const [phoneError, setPhoneError] = useState("");
      
        // Success message visibility
        const [showDeliverySuccess, setShowDeliverySuccess] = useState(false);
        const [showValidationWarning, setShowValidationWarning] = useState(false);
      
        // Validation regexes
        const locationRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]+$/;
      
        // Validation functions
        const validateLocation = (value: string) => {
          if (!value) return "Location is required";
          if (value.length < 2)
          return "Location should be at least 2 characters long";
          if (!locationRegex.test(value)) return "Location can only contain letters and spaces";
          return "";
        };
      
        const validatePhone = (value: string) => {
          if (!value) return "Phone number is required";
          if (!phoneRegex.test(value)) return "Phone number can only contain digits";
          return "";
        };
      
        const validateQuantity = (value: string) => {
          if (!value) return "Quantity is required";
          const num = Number(value);
          if (isNaN(num) || num < 1 || num > 120) return "Quantity must be between 1 and 120";
          return "";
        };
      
        const validateCardNumber = (value: string) => {
          if (!value) return "Card number is required";
          if (!/^\d{13,19}$/.test(value.replace(/\s+/g, ""))) return "Card number must be 13 to 19 digits";
          return "";
        };
      
        const validateExpiryDate = (value: string) => {
          if (!value) return "Expiry date is required";
          if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return "Expiry date must be MM/YY format";
          return "";
        };
      
        const validateCvv = (value: string) => {
          if (!value) return "CVV is required";
          if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 or 4 digits";
          return "";
        };
      
        
      
        useEffect(() => {
          // Get all payment radio buttons as HTMLInputElements
          const paymentRadios = document.querySelectorAll<HTMLInputElement>('input[name="payment"]');
          const creditInputs = document.querySelectorAll<HTMLInputElement>('.inputform.credit');
      
          function toggleCreditCardInputs() {
            // Cast to HTMLInputElement to access .checked safely
            const creditCardInput = document.querySelector('input[name="payment"][value="creditcard"]') as HTMLInputElement | null;
            const creditCardSelected = creditCardInput?.checked;
      
            creditInputs.forEach((input) => {
              if (creditCardSelected) {
                input.disabled = false;
                input.required = true;
              } else {
                input.disabled = true;
                input.required = false;
                input.value = ''; // Clear value when disabled
              }
      
              // Also clear React state & error messages when deselecting credit card
              if (!creditCardSelected) {
                setCardNumber("");
                setExpiryDate("");
                setCvv("");
                setCardNumberError("");
                setExpiryDateError("");
                setCvvError("");
              }
            });
          }
      
          paymentRadios.forEach((radio) =>
            radio.addEventListener('change', toggleCreditCardInputs)
          );
      
          // Initialize on mount
          toggleCreditCardInputs();
      
          // Cleanup event listeners on unmount
          return () => {
            paymentRadios.forEach((radio) =>
              radio.removeEventListener('change', toggleCreditCardInputs)
            );
          };
        }, []);
      
        useEffect(() => {
          const formValid =
            !validateLocation(location) &&
            !validatePhone(phone) &&
            !validateQuantity(quantity);
        
          setisSubmitDisabled2(!formValid);
        }, [location, phone, quantity]);
      
      
      
        // Handlers for blur events (to show errors)
        const handleLocationBlur = () => setLocationError(validateLocation(location));
        const handlePhoneBlur = () => setPhoneError(validatePhone(phone));
        const handleQuantityBlur = () => setQuantityError(validateQuantity(quantity));
        const handleCardNumberBlur = () => setCardNumberError(validateCardNumber(cardNumber));
        const handleExpiryDateBlur = () => setExpiryDateError(validateExpiryDate(expiryDate));
        const handleCvvBlur = () => setCvvError(validateCvv(cvv));
      
        
        const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        
            const quantityErr = validateQuantity(quantity);
            const locationErr = validateLocation(location);
            const phoneErr = validatePhone(phone);
        
            setQuantityError(quantityErr);
            setLocationError(locationErr);
            setPhoneError(phoneErr);
        
            const cardNumberErr = validateCardNumber(cardNumber);
            const expiryDateErr = validateExpiryDate(expiryDate);
            const cvvErr = validateCvv(cvv);
        
            setCardNumberError(cardNumberErr);
            setExpiryDateError(expiryDateErr);
            setCvvError(cvvErr);
        
            if (isSubmitDisabled2) {
            setShowValidationWarning(true);
            return;
          }
      
          setShowValidationWarning(false);
          setShowDeliverySuccess(true);
          const form = e.target as HTMLFormElement;
          form.reset();
      
          setQuantity("");
          setLocation("");
          setPhone("");
          setCardNumber("");
          setExpiryDate("");
          setCvv("");
          setCardNumberError("");
          setExpiryDateError("");
          setCvvError("");
      
          setTimeout(() => {
            setShowDeliverySuccess(false);
          }, 1500);
        };


         // Form state
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");
  
      // Error state
      const [nameError, setNameError] = useState("");
      const [emailError, setEmailError] = useState("");
      const [subjectError, setSubjectError] = useState("");
      const [messageError, setMessageError] = useState("");
  
      // Submit button enabled
      const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  
      // Success message visibility
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
      // Validation regexes
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Validation functions
      const validateName = (value:string) => {
          if (!value) return "Full name is required"; //check if empty
          if (value.length < 2)
          return "Name should be at least 2 characters long"; //check length
          if (!nameRegex.test(value))
          return "Name can only contain letters and spaces"; //check alphabet
          return "";
      };
  
      const validateEmail = (value:string) => {
          if (!value) return "Email is required"; //check if empty
          if (!emailRegex.test(value)) return "Please enter a valid email address"; //check format
          return "";
      };
  
      const validateSubject = (value:string) => {
          if (!value.trim()) return "Subject is required"; //check if empty
          return "";
      };
  
      const validateMessage = (value:string) => { 
          if (!value.trim()) return "Message is required"; //check if empty
          if (value.trim().length < 10)
          return "Message must be at least 10 characters long"; //check length
          return "";
      };
  
      // Check overall form validity, every time there is a change in [name, email, subject, message]
      useEffect(() => {
          const isValid =
          !validateName(name) &&
          !validateEmail(email) &&
          !validateSubject(subject) &&
          !validateMessage(message);
          setIsSubmitDisabled(!isValid);
      }, [name, email, subject, message, validateName, validateEmail, validateSubject, validateMessage]);
  
      // Handlers for blur events (to show errors)
      const handleNameBlur = () => setNameError(validateName(name));
      const handleEmailBlur = () => setEmailError(validateEmail(email));
      const handleSubjectBlur = () => setSubjectError(validateSubject(subject));
      const handleMessageBlur = () => setMessageError(validateMessage(message));
  
      // On form submit
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
  
          // Final validation before submit
          const nError = validateName(name);
          const eError = validateEmail(email);
          const sError = validateSubject(subject);
          const mError = validateMessage(message);
  
          setNameError(nError);
          setEmailError(eError);
          setSubjectError(sError);
          setMessageError(mError);
  
          if (nError || eError || sError || mError) {
          return; // don't submit if invalid
          }
  
          // Show success message
          setShowSuccessMessage(true);
  
          // Reset form fields
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
  
          setTimeout(() => setShowSuccessMessage(false), 1000);
      };

  return (
    <div>
      <section className="hero"></section>

      <section className="banner">
          <p className="container mx-auto px-4">Because when your skin feels good, you feel unstoppable.</p>
      </section>

      <section className="desc">
          <h1 className="text-center container mx-auto px-4">Your Success Stories Inspire Us</h1>
          <div className="reviews container mx-auto px-4">
            <div className="reviews-div gap-2">
              <h2>Proof That Great Skin is Possible</h2>
              <p className="italic">&quot;I struggled with cystic acne for years and tried everything. Within 6 weeks of using this routine, my skin completely transformed. The breakouts stopped, my scars faded, and now I wake up confident every single day. This isn&apos;t just skincare - it&apos;s life-changing.&quot; — Sarah M., verified customer</p>
            </div>
            <div className="reviews-images">
              <div className="reviews-div">
                <img src="acnebefore.jpg" alt="Acne Before" className="w-[100em] h-auto p-4 mb-0 rounded-lg origin-center transition-transform duration-300 ease-in-out object-cover;"></img>
                <h2>Before</h2>
              </div>
              <div className="reviews-div">
                <img src="acneafter.jpg" alt="Acne After" className="w-[100em] h-auto p-4 mb-0 rounded-lg origin-center transition-transform duration-300 ease-in-out object-cover;"></img>
                <h2>After</h2>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="reviews container mx-auto px-4">
            <div className="reviews-images">
              <div className="reviews-div">
              <img src="lipsbefore.jpg" alt="Lips Before" className="w-[100em] h-auto p-4 mb-0 rounded-lg origin-center transition-transform duration-300 ease-in-out object-cover;"></img>
              <h2>Before</h2>
              </div>
              <div className="reviews-div">
                <img src="lipsafter.jpg" alt="Lips After" className="w-[100em] h-auto p-4 mb-0 rounded-lg origin-center transition-transform duration-300 ease-in-out object-cover;"></img>
                <h2>After</h2>
              </div>
            </div>
            
            <div className="reviews-div gap-2 container mx-auto px-4">
              <h2>Results speak louder than promises</h2>
              <p className="italic">&quot;My lips were constantly cracked and peeling no matter what I used. This lip balm doesn&apos;t just moisturize - it actually heals. After just three days, my lips felt soft and looked healthy again. I&apos;ve been using it for months and will never switch to anything else.&quot; — Jessica L., verified customer</p>
            </div>
          </div>
        
      </section>

      <section id="about" className="grid-container container mx-auto px-4">
          <div className="aboutus descwhite">
              <h1>About Us</h1>
              <p>We believe everyone deserves to feel confident in their own skin. Founded with a passion for clean beauty and effective skincare, we carefully formulate each product using clinically-proven ingredients that deliver visible results without compromise. Our mission is simple: to create skincare solutions that work for real people with real skin concerns. From our sustainable packaging to our transparent ingredient lists, we&apos;re committed to honesty, quality, and helping you achieve the healthy, glowing skin you deserve.</p>
              <p>Reveal your skin&apos;s natural radiance with science-backed skincare that works!</p>
              <p>Pure ingredients, proven results, beautiful skin...</p>
              <Link href='#products'><button className="btn centerbtn self-center">Find Your Perfect Match</button></Link>
          </div>
          <div className="aboutusimage">
              <Image src="/aboutus.jpg" alt="Girl Skincare Image" className="about-image" width={300} height={400}></Image>
          </div>
      </section>

      <section id="products" className="desc">
          <h1 className="text-center  container mx-auto px-4">What Everyone&apos;s Raving About</h1>
          <div className="product  container mx-auto px-4">
              <div className="cards">
                  <div className="product-images"><img src="faceoil.jpg" alt="Face Oil"></img></div>
                  <div className="product-desc">
                      <div>
                          <p>Face oil</p>
                      </div>
                      <div>
                          <p>Nourishing botanical blend that deeply hydrates and restores your skin&apos;s natural radiance</p>
                          <p>$24.99</p>
                          <button className="btn">Discover</button> 
                      </div>
                  </div>
              </div>
              
              <div className="cards">
                  <div className="product-images"><img src="bodycream.jpg" alt="Body Cream"></img></div>
                  <div className="product-desc">
                      <div>
                          <p>Body Cream</p>
                      </div>
                      <div>
                          <p>Rich moisturizing formula that softens and smooths skin for all-day comfort and protection</p>
                          <p>$18.99</p>
                          <button className="btn">Discover</button>
                      </div>
                  </div>
              </div>
              
              <div className="cards">
                  <div className="product-images"><img src="lipbalm.jpg" alt="Lip Balm"></img></div>
                  <div className="product-desc">
                      <div>
                          <p>Lip Balm</p>
                      </div>
                      <div>
                          <p>Hydrating lip treatment with natural oils that heals, protects, and adds subtle shine</p>
                          <p>$8.99</p>
                          <button className="btn">Discover</button>
                      </div>
                  </div>
              </div>
              <div className="cards">
                  <div className="product-images"><img src="eyemask.jpg" alt="Eye Mask"></img></div>
                  <div className="product-desc">
                      <div>
                          <p>Eye Mask</p>
                      </div>
                      <div>
                          <p>Revitalizing under-eye patches that reduce puffiness, dark circles, and fine lines instantly</p>
                          <p>$12.99</p>
                          <button className="btn">Discover</button>
                      </div>
                  </div>
              </div>
          </div>
          <Link href="#products"><button className="btn centerbtn">View More</button></Link>
      </section>

      <section id="delivery" className="descwhite  container mx-auto px-4">
            <h1 className="text-center">Order Details</h1>
            <div className="delivery container 2xl:container">
                <form id="deliveryForm" className="w-full" method="POST" data-netlify="true" onSubmit={handleSubmit2} noValidate>
                    <input type="hidden" name="form-name" value="delivery" />
                    <input className={`inputform ${quantityError ? "input-error" : ""}`} type="number" name="quantity" placeholder="Quantity" min="1" max="120" value={quantity} onChange={(e) => setQuantity(e.target.value)} onBlur={handleQuantityBlur} />
                    {quantityError && <span className="error-message">{quantityError}</span>}
                    <input className={`inputform ${locationError ? "input-error" : ""}`} type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} onBlur={handleLocationBlur} required />
                    {locationError && <span className="error-message">{locationError}</span>}
                    <input className={`inputform ${phoneError ? "input-error" : ""}`} type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handlePhoneBlur} inputMode="numeric" required /> 
                    {phoneError && <span className="error-message">{phoneError}</span>}
                    <fieldset className="deliverysections">
                        <legend>Select the delivery speed</legend>
                        <div>
                            <label className="radio-label">
                                <input type="radio" name="speed" value="standard" required></input>
                                Standard (3-5 days) - Free over $50
                            </label>
                            
                            <label className="radio-label">
                                <input type="radio" name="speed" value="express" required></input>
                                Express (1-2 days) - $8.99
                            </label>
                            
                            <label className="radio-label">
                                <input type="radio" name="speed" value="sameday" required></input>
                                Same Day - $15.99
                            </label>
                        </div>
                    </fieldset>
                    
                    <fieldset className="deliverysections">
                        <legend>Select the payment method</legend>
                        <div>
                            <label className="radio-label">
                                <input type="radio" name="payment" value="cash" required></input>
                                Cash On Delivery
                            </label>
                            
                            <label className="radio-label mb-[0.2em]">
                                <input type="radio" name="payment" value="creditcard" required></input>
                                Credit Card
                                
                            </label>
                            <div className="deliverynested">
                              <input className={`inputform credit ${cardNumberError ? "input-error" : ""}`} type="text" name="cardNumber" placeholder="Card Number" maxLength={19} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} onBlur={handleCardNumberBlur}/>
                              {cardNumberError && <span className="error-message">{cardNumberError}</span>}

                              <input className={`inputform credit ${expiryDateError ? "input-error" : ""}`} type="text" name="expiryDate" placeholder="MM/YY" maxLength={5} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} onBlur={handleExpiryDateBlur}/>
                              {expiryDateError && <span className="error-message">{expiryDateError}</span>}

                              <input className={`inputform credit ${cvvError ? "input-error" : ""}`} type="text" name="cvv" placeholder="CVV" maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} onBlur={handleCvvBlur}/>
                              {cvvError && <span className="error-message">{cvvError}</span>}
                            </div> 

                            <label className="radio-label mb-[0.2em]">
                                <input type="radio" name="payment" value="paypal" required></input>
                                PayPal
                            </label>
                        </div>
                    </fieldset>
                    <button className="btn send" type="submit" disabled={isSubmitDisabled2}>Complete Order</button>
                    {showValidationWarning && (<div className="text-center mt-4 text-red-600 font-semibold">Please fill all the required fields before submitting.</div>)}
                    {showDeliverySuccess && ( <div id="deliverysuccessMessage" className="text-center mt-4 text-green-600 font-semibold">Order Completed successfully!</div>)}
                </form>
            </div> 
        </section>

      <section id="contact" className="desc">
        <h1 className="text-center container mx-auto px-4">Send us a message</h1>
        <div className="contactus container mx-auto px-4">
            <form method="POST" data-netlify="true" id="contactForm" onSubmit={handleSubmit} noValidate>
            <input className={`inputform ${nameError ? "input-error" : ""}`} type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleNameBlur} pattern="[A-Za-z\s]+" minLength={2} required />
            {nameError && <span className="error-message">{nameError}</span>}
            {/*inputform is always applied. input-error is added only if nameError is truthy*/}

            <input className={`inputform ${emailError ? "input-error" : ""}`} type="email" id="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur} required />
            {emailError && <span className="error-message">{emailError}</span>}

            <input type="text" placeholder="Subject" className={`inputform ${subjectError ? "input-error" : ""}`} value={subject} onChange={(e) => setSubject(e.target.value)} onBlur={handleSubjectBlur} required />
            {subjectError && <span className="error-message">{subjectError}</span>}

            <textarea className={`inputform formtextarea ${ messageError ? "input-error" : ""}`} id="message" placeholder="Tell us what you're looking for..." value={message} onChange={(e) => setMessage(e.target.value)} onBlur={handleMessageBlur} minLength={10} required />
            {messageError && <span className="error-message">{messageError}</span>}

            <button className="btn send" type="submit" disabled={isSubmitDisabled}><i className="fa-regular fa-paper-plane text-[#fff8f0]"></i> Send</button>
            {/*the button will be disabled if isSubmitDisabled = true*/}
            {showSuccessMessage && ( <div id="contactsuccessMessage" className="text-center mt-4 text-green-600 font-semibold">Message sent successfully!</div>)}
            {/*when showSuccessMessage true, set message to message sent successfully and display*/}
            </form>
        </div> 
      </section>
    </div>
    

  );
}
