'use client';

import { useEffect, useState } from 'react';
import './team.css';


function Team(){

    const [team, setTeam] = useState([]);
    const [teamCat, setTeamCat] = useState('ceo');

    const getTeam = async() => {
        try {
            const response = await fetch('https://610weblab.in/610weblab/wp-json/wp/v2/weblab-team?_embed&order=asc');
            if(!response.ok){
                console.log('team data not fetched');
                return;
            }
            const data = await response.json();
            setTeam(data);
        }
        catch (error) {
            console.log('Team Component:', error)
        }
    }

    useEffect(()=>{
        getTeam();
    },[]);

    const handleCatClick = (cat) => {
        if (teamCat !== cat) {
            setTeamCat(cat);
        }
    }

    return(
        <section className='team_sec'>
            <div className='container'>
                <h2 className='sec_title'>Some of our tech experts</h2>
                <p className='description'>Talent wins games, but teamwork and intelligence win championships.</p>
                <div className='team_content'>
                    <ul className='team_filters'>
                       <li data-title="ceo" onClick={()=>{handleCatClick('ceo')}} className={teamCat === 'ceo' ? 'active' : ''}>CEO</li> 
                       <li data-title="team" onClick={()=>{handleCatClick('team')}} className={teamCat === 'team' ? 'active' : ''}>Team</li>
                    </ul>
                    {
                        team.length > 0 &&
                        <div className='team_members'>
                            {
                                team.map((member, index)=>{
                                    return(
                                        <div className={`member_box ${teamCat === member._embedded['wp:term']['0']['0'].slug ? 'active' : 'hidden'}`} data-cat={member._embedded['wp:term']['0']['0'].slug} key={index}>
                                            <div className='member_img'>
                                                <img src={member._embedded['wp:featuredmedia']['0'].source_url} alt={member.title.rendered} />
                                            </div>
                                            <h3 className='member_name'>{member.title.rendered}</h3>
                                            {member.acf.designation && <div className='member_designation'>{member.acf.designation}</div>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;