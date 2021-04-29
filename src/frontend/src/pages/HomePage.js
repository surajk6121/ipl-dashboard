import {React, useEffect, useState} from 'react'
import { NavBar } from '../components/NavBar';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss'

export const HomePage = () => {

  
  const [teams,setTeams] =useState([]);
  useEffect(
    ()=>{
      const fetchTeams = async () =>{
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`)
        const data = await response.json()
        console.log(data)
        setTeams(data)
      }
      fetchTeams();
    },[]
  );

  
  return (
    <div className="HomePage">
      
      <div className="header-section">
        <NavBar/>
        {/* <h1 className="app-name">IPL Dashboard</h1> */}
      </div>
        <div className= "team-grid">
          {teams.map(team => <TeamTile key={team.id} teamName = {team.teamName}></TeamTile>)}
        </div>
      
      
    
    </div>
  );
    
}

