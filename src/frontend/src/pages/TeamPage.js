import {React, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import { PieChart } from 'react-minimal-pie-chart';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import './TeamPage.scss'
import { NavBar } from '../components/NavBar';

export const TeamPage = () => {

  const {teamName} = useParams();

  const [team, setTeam] = useState({
    matches: [{}]
  });
 
  useEffect(
    ()=>{
      const fetchMatches = async () =>{
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`)
        const data =await response.json();
        console.log(data)
        setTeam(data)
      }
      fetchMatches();
    }, [teamName]
  );
  
  if(!team || !team.teamName){
    return <h2>Team Not Found</h2>
  }
  return (
    <div>
    <div className="header-section">
        <NavBar/>
        {/* <h1 className="app-name">IPL Dashboard</h1> */}
      </div>
    <div className="TeamPage">
      
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5d' },
            { title: 'Wins', value: team.totalWins, color: '#4da375' },
            {title: 'Ties', value: team.totalTies, color: 	'#D3D3D3'}
          
          ]}
          
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard  teamName = {team.teamName} match={team.matches[0]}></MatchDetailCard>
      </div>
      {team.matches.slice(1).map(match => <MatchSmallCard key = {match.id} teamName = {team.teamName} match={match}/>)}
      <div className='more-link'>
        <Link to = {`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
      </div>
    
    </div>
    </div>
  );
}

