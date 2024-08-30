/* eslint-disable react/prop-types */

export default function Radio({ isChecked, onCheckedChange, label }) {
  return (
    <div className="flex justify-center space-x-2 border-b py-1">
      <input
        type="radio"
        id="openNow"
        name="open-now-filter"
        checked={isChecked}
        onClick={() => onCheckedChange(!isChecked)}
        className="form-radio"
        readOnly
      />
      <label htmlFor="openNow" className="text-xs">
        {label}
      </label>
    </div>
  );
}
