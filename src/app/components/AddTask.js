import React from "react";
import PropTypes from "prop-types";

const AddTask = props => {
  const { handleSubmit, handleChange, value } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          id="name"
          name="name"
          value={value}
          className="wrapper"
          placeholder="what need to be accomplished?"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

AddTask.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value:PropTypes.any,
};

export default AddTask;
