/* eslint-disable react/prop-types */
const AddNumber = ({ num1, num2 }) => {
  const result = Number(num1) + Number(num2);

  return (
    <div>
      {num1} + {num2} = {result}
    </div>
  );
};

export default AddNumber;
