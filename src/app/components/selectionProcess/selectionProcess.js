import './selectionProcess.css'


function SelectionProcess(){

    const steps = [
        { step: "1", title: "Send your CV", description: "Fill out the form and attach your resume or CV" },
        { step: "2", title: "Communicate with a recruiter", description: "You will discuss your level of knowledge and expectations from a new job" },
        { step: "3", title: "Meet with a head", description: "If we match, we invite you to a meeting with your future head" },
        { step: "4", title: "Get feedback and a job offer", description: "We give you feedback within a few business days. If successful, you get a job offer!" }
    ];

    return(
        <section className='selection_process_sec'>
            <div className='container'>
                <h2 className='sec_title'>What is the selection process at Innowise?</h2>
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