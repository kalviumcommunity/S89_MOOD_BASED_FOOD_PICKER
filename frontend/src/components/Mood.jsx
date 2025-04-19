import React from "react";
import "./Mood.css"; 
const Mood = () => {
  const moodFoodEntries = [
    {
      mood: "Happy",
      food: "Ice Cream Sundae",
      description: "Celebrate your joy with a colorful, delicious sundae!",
      image: "https://i.pinimg.com/736x/9d/2b/48/9d2b48735c955efac5abfbb5959f7de1.jpg",
      votes: 42,
      comments: [
        { username: "SweetTooth", text: "Sundaes always boost my mood!" },
        { username: "HappyEater", text: "Perfect choice for happy days!" }
      ],
      sharedOn: ["Facebook", "Instagram"]
    },
    {
      mood: "Stressed",
      food: "Dark Chocolate",
      description: "Calm your nerves with antioxidant-rich dark chocolate.",
      image: "https://i.pinimg.com/736x/0c/17/64/0c1764fb9fd4b98dc34194976231392c.jpg",
      votes: 30,
      comments: [
        { username: "ZenMode", text: "This always helps me unwind." },
        { username: "StressEater", text: "Chocolate is my therapy!" }
      ],
      sharedOn: ["Twitter"]
    },
    {
      mood: "Lazy",
      food: "Instant Ramen",
      description: "Quick and tasty for when you don't want to move much.",
      image: "https://i.pinimg.com/474x/e2/42/a4/e242a43c6bac9c9d240234fab6c58fe2.jpg",
      votes: 18,
      comments: [
        { username: "QuickBites", text: "Ramen is my lazy-day go-to." },
        { username: "NoEffortChef", text: "Relatable and delicious!" }
      ],
      sharedOn: ["Facebook"]
    },
    {
      mood: "Romantic",
      food: "Strawberries & Chocolate",
      description: "A sweet, sensual classic for a loving vibe.",
      image: "https://i.pinimg.com/736x/ed/34/fe/ed34fe2d675940572cfe2e827a3d18ed.jpg",
      votes: 35,
      comments: [
        { username: "LoveBites", text: "So romantic and sweet!" },
        { username: "HeartEyes", text: "Great for date nights!" }
      ],
      sharedOn: ["Instagram"]
    }
  ];

  return (
    <div>
      {moodFoodEntries.map((entry, index) => (
        <div key={index} className="moodcard">
          <img src={entry.image} alt={`${entry.food} for ${entry.mood} mood`} />
          <h2>Mood: {entry.mood}</h2>
          <h3>Suggested Food: {entry.food}</h3>
          <p>{entry.description}</p>
          <p>Votes: {entry.votes}</p>
          <div>
            <h4>Comments:</h4>
            {entry.comments.map((comment, commentIndex) => (
              <p key={commentIndex}>
                <strong>{comment.username}:</strong> {comment.text}
              </p>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Mood;
