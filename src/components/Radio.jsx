/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Radio({ onCheckedChange, label }) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleRadio() {
    setIsChecked((prevValue) => {
      onCheckedChange(!prevValue);
      return !prevValue;
    });
  }

  return (
    <div className="flex justify-center space-x-2 border-b py-1">
      <input
        type="radio"
        id="openNow"
        name="open-now-filter"
        checked={isChecked}
        onClick={toggleRadio}
        className="form-radio"
        readOnly
      />
      <label htmlFor="openNow" className="text-xs">
        {label}
      </label>
    </div>
  );
}
