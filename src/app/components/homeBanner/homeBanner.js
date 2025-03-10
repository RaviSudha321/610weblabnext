'use client';

import { useState } from 'react';
import './homeBanner.css';
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import Button from '../button/button';

function HomeBanner(){

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, reset, formState: { errors },} = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);

        const pageUrl = typeof window !== "undefined" ? window.location.href : "";

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

    return(
        <div className='home_banner_sec'>
            <div className='container'>
                <div className='home_banner_content'>
                    <div className='banner_left_col'>
                        <h1 className='home_banner_title'>Experience Innovation And <span>Expertise In Technology</span> With Our <span>Creative Experts.</span></h1>
                        <div className='home_banner_desc'>610 Web Lab is committed to providing web design & development solutions and delivering results within the demanding time as per the client’s requirements. We believe that our teamwork and relationship with our customers are the backbone of our work.</div>
                        <div className='home_banner_buttons'>
                            <Button 
                            title="Request A Quote"
                            link="/contact-us"
                            icon={<img src="/images/request-a-quote.svg" alt="Request a Quote" style={{width:"21px"}} />}
                            />

                            <Button 
                            title="Chat With Us"
                            link="https://wa.me/+918427814610"
                            target="_blank"
                            icon={<FaWhatsapp />}
                            buttonClass="whatsapp"
                            />
                        </div>
                    </div>
                    <div className='banner_right_col'>
                        <div className='banner_form'>
                            <h2 className='form_title'>Free Website Audit</h2>
                            <p className='form_desc'>Please provide the following information about you and get connected with us.</p>
                            <form id="website_audit_form" className='website_audit_form' onSubmit={handleSubmit(onSubmit)}>
                                <p className='form_field name_field'>
                                    <label htmlFor='name'>Full Name</label>
                                    <input type="text" id="name" placeholder='Enter Your Name' className={errors.name ? 'has_error' : null}  {...register("name", { required: "Name is required" })} />
                                    {errors.name && <span className="field_error">{errors.name.message}</span>}
                                </p>
                                <p className='form_field email_field'>
                                    <label htmlFor='email'>Email Address</label>
                                    <input type="email" id="email" placeholder='Enter Your Email' className={errors.email ? 'has_error' : null} {...register("email", { required: "Email address is required" })} />
                                    {errors.email && <span className="field_error">{errors.email.message}</span>}
                                </p>
                                <p className='form_field phone_field'>
                                    <label htmlFor='phone'>Phone Number</label>
                                    <input type="tel" id="phone" placeholder='Enter Your Phone Number' className={errors.phone ? 'has_error' : null} {...register("phone", { required: "Phone number is required" })} />
                                    {errors.phone && <span className="field_error">{errors.phone.message}</span>}
                                </p>
                                <p className='form_field select_field'>
                                    <label htmlFor='service'>Services are you looking for</label>
                                    <select id="service" className={errors.service ? 'has_error' : null} {...register("service", { required: "Service is required" })}>
                                        <option value="">Select Service</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="Web Development">Web Development</option>
                                    </select>
                                    {errors.service && <span className="field_error">{errors.service.message}</span>}
                                </p>
                                <p className='form_field comment_field'>
                                    <label htmlFor='comment'>Comment</label>
                                    <textarea id="comment" placeholder='Hi there, I would like to ....' rows="4" className={errors.comment ? 'has_error' : null} {...register("comment", { required: "Phone Comment is required" })}></textarea>
                                    {errors.comment && <span className="field_error">{errors.comment.message}</span>}
                                </p>
                                <div className='form_field submit_btn'>
                                    <input type="submit" name="website_audit_submit" id="website_audit_submit" />
                                    {isLoading && <div className="loading"><div className="lds-dual-ring"></div></div>}
                                </div>
                                <p className='form_field rating_img'>
                                    <img src="/images/rating.webp" alt="image" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;