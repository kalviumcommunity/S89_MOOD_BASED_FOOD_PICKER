import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateEntity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mood: "",
    foods: "",
    votes: "",
    comments: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/mood/foods/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Error fetching entity:", err);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/mood/foods/${id}`, formData);
      alert("Entity updated successfully!");
      navigate("/food");
    } catch (error) {
      console.error("Error updating entity:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Foods:</label>
        <input type="text" name="foods" value={formData.foods} onChange={handleChange} required />

        <label>Mood:</label>
        <input type="text" name="mood" value={formData.mood} onChange={handleChange} required />

        <label>Votes:</label>
        <input type="text" name="votes" value={formData.votes} onChange={handleChange} required />

        <label>Comments:</label>
        <input type="text" name="comments" value={formData.comments} onChange={handleChange} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEntity;
