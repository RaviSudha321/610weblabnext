'use client';

import { useState } from 'react';
import './newsletter.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';


function Newsletter(){

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, reset, formState: { errors },} = useForm();
    
    const onSubmit = async (data) => {
        setIsLoading(true);

        const pageUrl = typeof window !== "undefined" ? window.location.href : "";

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_WP_REST_API_FORM_URL+'submit-newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({...data, page_url: pageUrl}),
            });
      
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
    }

    return(
        <div className='newsletter_sec'>
            <div className='container'>
                <div className='newsletter_inner'>
                    <div className='newsletter_content'>
                        <h2 className='title'>Newsletter Signup</h2>
                        <p className='description'>To get more every updates</p>
                    </div>
                    <div className='newsletter_form'>
                        <form id="newsletter_form" onSubmit={handleSubmit(onSubmit)}>
                            <p className='email_field'>
                                <input type='email' id="email" placeholder='Enter Email Address' className={errors.email ? 'has_error' : null} {...register("email", { required: "Email address is required" })} />
                            </p>
                            <p className='submit_field'>
                                <button type="submit" name="newsletter-submit" id="newsletter-submit">
                                    {isLoading 
                                    ? <div className="loading"><div className="lds-dual-ring"></div></div>
                                    : <img src="/images/paper-plane.svg" alt="Submit Icon" />
                                    }
                                </button>
                            </p>
                            {errors.email && <span className="field_error">{errors.email.message}</span>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;