export default function Select({ error, value, onChange, name, children }) {
  return (
    <>
      <select
        className={`bg-white w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
        }`}
        value={value}
        onChange={onChange}
        name={name}
      >
        {children}
      </select>
      {error ? <small className="text-red-500 text-left">{error}</small> : null}
    </>
  );
}
