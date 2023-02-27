import React, { useState } from "react";
import styled from "styled-components";

const CheckboxLabel = styled.label`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  /* identical to box height */
  letter-spacing: 0.03em;
  color: #000000;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <CheckboxLabel>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <svg
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "green" : "none"} // only show the checkmark when `isCheck` is `true`
        />
      </svg>
      {props.text}
    </CheckboxLabel>
  );
}

export default Checkbox;
