import React, { useState, useEffect } from "react";
import axios from "axios";


const EntityList = () => {
  const [entities, setEntities] = useState([])

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/mood/foods");
       console.log(response.data)
      setEntities(response.data.mood);
    } catch (error) {
      console.error("Error fetching entities:", error);
    } 
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <div>
      {entities.map((entry) => (
        <div className="moodcard">
          <h2>Mood: {entry.mood}</h2>
          <h3>Suggested Food: {entry.foods}</h3>
          <p>Votes: {entry.votes}</p>
          <div>
            <h4>Comments:</h4>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntityList;