'use client';

import { useState } from 'react';
import './newsletter.css';
import { toast } from 'react-toastify';


function Newsletter(){

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://shopifyaid.com/wp-json/custom-forms/v1/submit-newsletter-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    "email": email,
                })
            });
      
            if (!response.ok) {
                const data = await response.json();
                toast.error(data.message,{
                    theme: "colored",
                })
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            toast.success(data.message,{
                theme: "colored",
            })
            setEmail('');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            
        } finally {
            setIsLoading(false);
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
                        <form id="newsletter_form" method='post' action="/" onSubmit={handleSubmit}>
                            <p className='email_field'>
                                <input type='email' name="email-address" id="email-address" placeholder='Enter Email Address' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </p>
                            <p className='submit_field'>
                                <button type="submit" name="newsletter-submit" id="newsletter-submit">
                                    {isLoading 
                                    ? <div className="loading"><div className="lds-dual-ring"></div></div>
                                    : <img src="/images/paper-plane.svg" alt="Submit Icon" />
                                    }
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;