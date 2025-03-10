import SuccessCounterItem from '../successCounterItem/successCounterItem';
import './successCounter.css';


function SuccessCounter(){

    const counters = [
        { number: 300, title: "Successful Projects" },
        { number: 97, title: "Success Rate" },
        { number: 1500, title: "Happy Clients" }
    ];

    return(
        <div className='success_counter'>
            {counters.map((counter, index) => {
                return <SuccessCounterItem key={index} number={counter.number} title={counter.title} />
            })}
        </div>
    )
}

export default SuccessCounter;