import { useState } from "react";

/* eslint-disable react/prop-types */
// const Profile=(props)=>{
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }

const Profile = ({ name, motto, age, pic }) => {
  const [height, setHeight] = useState(100);

  const _zoonIn = () => {
    setHeight(height + 10);
  };

  const _zoonOut = () => {
    setHeight(height - 10);
  };

  const _reset = () => {
    setHeight(100);
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{motto}</h3>
      <h3>{age}</h3>

      <div>
        <button onClick={_zoonIn}>+</button>
        <button onClick={_zoonOut}>-</button>
        <button onClick={_reset}>Rest</button>
      </div>

      <p>
        <img src={pic} alt={name} height={height} />
      </p>
    </div>
  );
};

export default Profile;
