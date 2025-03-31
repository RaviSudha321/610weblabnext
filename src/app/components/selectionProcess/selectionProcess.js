import './selectionProcess.css'


function SelectionProcess(){

    const steps = [
        { step: "1", title: "Submit Your Application", description: "Fill out the form and upload your resume to get started." },
        { step: "2", title: "Connect with Our Recruiter", description: "We’ll discuss your skills, experience, and expectations for your next career move." },
        { step: "3", title: "Meet Your Future Team", description: "If there's a match, we’ll invite you for a meeting with your potential team lead." },
        { step: "4", title: "Receive Feedback & Offer", description: "Expect feedback within a few business days. If successful, you’ll get a job offer!" }
    ];

    return(
        <section className='selection_process_sec'>
            <div className='container'>
                <h2 className='sec_title'>Our Selection Process at 610 WebLab</h2>
                <div className='selection_process_outer'>
                    <div className='selection_process'>
                        {steps.map((item, index) => {
                            return(
                                <div key={index} className='process_item'>
                                    <span className='process_step'>{item.step}</span>
                                    <h3 className='process_title'>{item.title}</h3>
                                    <div className='process_description'>{item.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectionProcess;