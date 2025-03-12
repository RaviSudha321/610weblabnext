import { useState } from "react";
import { useForm } from "react-hook-form";
import './blogCommentForm.css';
import { toast } from "react-toastify";

function BlogCommentForm({postId}){

    const [isLoading, setIsLoading] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const {handleSubmit, reset, register, formState: { errors }} = useForm();

    const onSubmit = async (data) => {

        if (!agreed) {
            toast.error('You must agree to the terms & conditions.', { theme: 'colored' });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_WP_REST_API_URL}/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  post: postId, 
                  author_name: data.author_name,
                  author_email: data.author_email,
                  content: data.content,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit comment");
            }
        
            toast.success("Comment submitted! It will appear after moderation.",{
                theme: "colored",
            })

        } catch (error) {
            toast.error(error.message,{theme: "colored",})
        } finally {
            setIsLoading(false);
            reset();
            setAgreed(false);
        }
    }

    return(
        <div className='blog_comments_sec'>
            <h2 className='comment_area_title'>Leave a Message</h2>
            <p className='comment_area_desc'>Have any question? Ready to talk to us!</p>
            <div className='comment_form_outer'>
                <form id="comment_form" className='comment_form' onSubmit={handleSubmit(onSubmit)}>
                    <p className='field_group name_field'>
                        <input type='text' id="author_name" placeholder='Full Name' className={errors.author_name ? 'has_error' : null} {...register("author_name", { required: "Name is required" })} />
                        {errors.author_name && <span className="field_error">{errors.author_name.message}</span>}
                    </p>
                    <p className='field_group email_field'>
                        <input type="email" id="author_email" placeholder='Email Address' className={errors.author_email ? 'has_error' : null} {...register("author_email", { required: "Email is required" })} />
                        {errors.author_email && <span className="field_error">{errors.author_email.message}</span>}
                    </p>
                    <p className='field_group comment_field'>
                        <textarea id="content" placeholder='Write Message' rows="4" className={errors.content ? 'has_error' : null} {...register("content", { required: "Comment content is required" })}></textarea>
                        {errors.content && <span className="field_error">{errors.content.message}</span>}
                    </p>
                    <p className='field_group terms_field'>
                        <input type="checkbox" name="terms_conditions" id="terms_conditions" checked={agreed} onChange={() => setAgreed(!agreed)} />
                        <label htmlFor="terms_conditions">I Agree with the trams & conditions</label>
                    </p>
                    <p className='field_group submit_btn'>
                        <input type="submit" name="submit_comment" id="submit_comment" value="Send Comment" />
                        {isLoading && <div className="loading"><div className="lds-dual-ring"></div></div>}
                    </p>
                </form>
            </div>
        </div>
    )
}
export default BlogCommentForm;