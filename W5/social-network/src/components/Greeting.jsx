/* eslint-disable react/prop-types */
//import stuff

//define a functional component
const Greeting = (props) => {
  const { user } = props;
  return <h2>Greetings,{user}</h2>;
};

//export the thing
export default Greeting;
