export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-regal shadow-sm focus:ring-regal"
            onChange={(e) => handleChange(e)}
        />
    );
}
