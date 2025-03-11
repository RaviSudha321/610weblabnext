'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { useForm } from 'react-hook-form';

import CallToAction from "../components/callToAction/callToAction";
import PageBanner from "../components/pageBanner/pageBanner";
import Testimonials from "../components/testimonials/testimonials";
import ContactBox from "../components/contactBox/contactBox";
import SuccessCounter from "../components/successCounter/successCounter";
import OfficeLocation from "../components/officeLocation/officeLocation";


function Contact(){

    const {register, handleSubmit, reset, formState: { errors },} = useForm();
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);

        const pageUrl = window.location.href;

        try {
            const response = await fetch("https://610weblab.in/610weblab/wp-json/custom-forms/v1/submit-form", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({...data, page_url: pageUrl}),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }
      
            const result = await response.json();
            toast.success(result,{
                theme: "colored",
            })

        } catch (error) {
            toast.error(error.message,{theme: "colored",})
        } finally {
            setIsLoading(false);
            reset();
        }
    };

    const socialMedia = [
        {icon:<FaFacebookF />, link:'https://www.facebook.com/610weblab/'},
        {icon:<FaXTwitter />,link:'https://twitter.com/610Weblab/'},
        {icon:<FaInstagram />,link:'https://www.instagram.com/610weblab/'},
        {icon:<FaLinkedinIn />,link:'https://www.linkedin.com/company/610-web-lab'},
        {icon:<FaBehance />,link:'https://www.behance.net/6Xweblab'},
    ];

    return(
        <div className="career_page">
            <PageBanner 
            title="Get in Touch"
            description='We help every type of Business to Grow the Audience "Online" with Organic and Paid methods.'
            />
            <section className="lets_talk_sec">
                <div className="container">
                    <h2 className="sec_title">
                        Let's 
                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4996 29H8.99961C10.4992 23.5001 9.99961 22.5 4.49961 18C-1.00039 13.5 0.999609 2.50004 10.4996 1.50004C19.9996 0.500043 20.4996 5.50004 21.4996 8.00004C22.4996 10.5 25.9996 11 25.9996 11.5C25.9996 11.9 24.6663 12.6667 23.9996 13C24.8329 13.5 26.1996 14.6 24.9996 15C23.4996 15.5 22.9996 17 22.4996 17.5C22.0996 17.9 24.3329 18.3334 25.4996 18.5C25.3329 18.6667 24.9996 19.1 24.9996 19.5C24.9996 20 26.4996 21.5 22.4996 22.5C19.2996 23.3 18.4996 27.1667 18.4996 29Z" fill="#30A9E0" stroke="#30A9E0"/>
                        </svg>
                        talk!
                    </h2>
                    <div className="description">Let's get Connected Today with our Team:</div>
                    <div className="contact_boxes">
                        <ContactBox
                        title="Phone Number"
                        link="tel:918427814610"
                        linkText="91 8427-8146-10"
                        description="Give us a call direclty, our Sales team will catch you and will get back to you."
                        />
                        <ContactBox
                        title="Email Address"
                        link="mailto:support@610weblab.com"
                        linkText="support@610weblab.com"
                        description="Send us a detailed message. Our Team will get back to you with the Details."
                        />
                        <ContactBox
                        title="Social Media"
                        description="Want to connect on Social Media! We're already here."
                        socialMedia={socialMedia}
                        />
                    </div>
                </div>
            </section>

            <OfficeLocation />

            <section className="lets_discuss_sec">
                <div className="container">
                    <div className="lets_discuss_content">
                        <div className="discuss_form">
                            <form id="discuss_form" onSubmit={handleSubmit(onSubmit)}>
                                <p className="form_field">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="Full Name" className={errors.name ? 'has_error' : null} {...register("name", { required: "Name is required" })} />
                                    {errors.name && <span className="field_error">{errors.name.message}</span>}
                                </p>
                                <p className="form_field">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="support@gmail.com" className={errors.email ? 'has_error' : null} {...register("email", { required: "Email address is required" })} />
                                    {errors.email && <span className="field_error">{errors.email.message}</span>}
                                </p>
                                <p className="form_field">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" placeholder="+000 (123) 456 88" className={errors.phone ? 'has_error' : null} {...register("phone", { required: "Phone number is required" })} />
                                    {errors.phone && <span className="field_error">{errors.phone.message}</span>}
                                </p>
                                <p className="form_field select_field">
                                    <label htmlFor="service">Select Requirments</label>
                                    <select name="service" id="service" className={errors.service ? 'has_error' : null} {...register("service", { required: "Service is required" })}>
                                        <option value="">Website customize</option>
                                        <option value="website-design">Website Design</option>
                                        <option value="website-development">Website Development</option>
                                    </select>
                                    {errors.service && <span className="field_error">{errors.service.message}</span>}
                                </p>
                                <p className="form_field fullwidth">
                                    <label htmlFor="comment">Write Message</label>
                                    <textarea name="comment" id="comment" placeholder="Write Message" rows="4" className={errors.comment ? 'has_error' : null} {...register("comment", { required: "Comment is required" })}></textarea>
                                    {errors.comment && <span className="field_error">{errors.comment.message}</span>}
                                </p>
                                <div className="form_field fullwidth">
                                    <input type="submit" name="discuss_submit" id="discuss_submit" value="Send Message" />
                                    {isLoading && <div className="loading"><div className="lds-dual-ring"></div></div>}
                                </div>
                            </form>
                        </div>
                        <div className="discuss_content">
                            <h2 className="sec_title">Let's discuss your next creative project.</h2>
                            <div className="description">
                                <svg width="55" height="60" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 19.4999L57.5 50.9999" stroke="#30A9E0" strokeWidth="5" strokeLinecap="round"/>
                                    <path d="M4 50.1984L58.5298 18.75" stroke="#30A9E0" strokeWidth="5" strokeLinecap="round"/>
                                    <path d="M30.25 65.9484L30.2798 2.99998" stroke="#30A9E0" strokeWidth="5" strokeLinecap="round"/>
                                </svg>
                                <span>Have a question or want to learn more about our services? We'd love to hear from you! Reach out to us using the contact information below, or fill out the form to send us a message directly.</span>
                            </div>
                            <SuccessCounter />
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
            <Testimonials />
        </div>
    )
}

export default Contact;