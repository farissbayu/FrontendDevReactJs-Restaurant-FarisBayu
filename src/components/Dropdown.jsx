/* eslint-disable react/prop-types */
export default function Dropdown({ label, options, value, handleChange }) {
  return (
    <div className="flex justify-start border-b py-1">
      <select
        className="text-xs text-left w-32"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
