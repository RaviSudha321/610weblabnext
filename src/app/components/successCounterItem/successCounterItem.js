'use client';

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

function SuccessCounterItem({ number = 0, title }){

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    return(
        <div className='success_counter_item' ref={ref}>
            <div className='counter_icon'>
                <img src="/images/counter-icon.svg" alt={`counter icon ${title}`} />
            </div>
            <div className="success_content">
                {inView && (
                    <span className='counter_number'>
                        <CountUp end={number} />+
                    </span>
                )}
                <div className='counter_title'>{title}</div>
            </div>
        </div>
    )
}

export default SuccessCounterItem;