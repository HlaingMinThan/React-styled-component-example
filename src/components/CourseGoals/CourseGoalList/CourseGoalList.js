import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = ({ courseGoals, onDeleteItem }) => {
  if (courseGoals.length) {
    return (
      <ul className="goal-list">
        {courseGoals.map((goal) => (
          <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    );
  } else {
    return (
      <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
    );
  }
};

export default CourseGoalList;
