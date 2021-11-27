import React, { useState } from "react";
import FormControl from "../../Styled_components/FormControl";
import Button from "../../Styled_components/Button";

const CourseInput = ({ onAddGoal }) => {
  const [valid, setValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
    console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl valid={valid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
