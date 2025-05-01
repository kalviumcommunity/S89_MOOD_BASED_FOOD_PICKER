import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const fetchEntities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/mood/foods");
      console.log(response.data);
      setEntities(response.data.mood);
    } catch (error) {
      console.error("Error fetching entities:", error);
    }
  };

  const deleteEntity = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/mood/foods/${id}`);
      setEntities(entities.filter((entity) => entity._id !== id));
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <div>
      {entities.map((entry) => (
        <div className="moodcard" key={entry._id}>
          <h2>Mood: {entry.mood}</h2>
          <h4>Suggested Food: {entry.foods}</h4>
          <p>Votes: {entry.votes}</p>
          <div>
            <h4>Comments:{entry.comments}</h4>
            
            {/* Add comment display if needed */}
          </div>
          <button onClick={() => deleteEntity(entry._id)}>Delete</button>
          <button onClick={() => handleUpdate(entry._id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default EntityList;
