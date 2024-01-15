const Options = ({ cities }) => {
  return (
    <select>
      {cities.map((city, index) => (
        <option key={index}>{city}</option>
      ))}
    </select>
  );
};
export default Options;
