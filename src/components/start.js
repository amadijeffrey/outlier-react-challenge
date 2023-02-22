import React from "react"
import {useNavigate} from "react-router-dom"

export default function Start() {
  const navigate = useNavigate()
  
    return (
      <div className="background">
             <div className='welcome'>
                <h1>Welcome to this quiz</h1>
                <h3>You have 20 questions to answer in 7 minutes. Good luck!</h3>
                <button className="startButton" type="button" onClick={() => navigate('/start')}>
                  Take quiz
                </button>
            </div>
      </div>
    );
  }