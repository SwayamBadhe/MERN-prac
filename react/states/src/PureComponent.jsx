const PureComponent = ({ salary, age }) => {
  console.log('Inside Pure Component');
  return (
    <div>
      <h2>Salary: {salary}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};
export default PureComponent;
