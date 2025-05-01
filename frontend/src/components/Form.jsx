import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mood: "",
    foods: "",
    votes: "",
    comments: "",
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/mood/foods", formData);
      alert("Data submitted successfully!");
      navigate("/food"); 
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Food</h2>
      <form onSubmit={handleSubmit}>
        <label>Foods:</label>
        <input type="text" name="foods" onChange={handleChange} required />

        <label>Mood:</label>
        <input type="text" name="mood" onChange={handleChange} required />

        <label>Votes:</label>
        <input type="text" name="votes" onChange={handleChange} required />

        <label>Comments:</label>
        <input type="text" name="comments" onChange={handleChange} required />

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;

