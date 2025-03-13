'use client';

import './discussSec.css';
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import SuccessCounter from "../successCounter/successCounter";

function DiscussSec(){

    const {register, handleSubmit, reset, formState: { errors },} = useForm();
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);

        const pageUrl = window.location.href;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_FORM_URL}submit-form`, {
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
    )
}

export default DiscussSec;