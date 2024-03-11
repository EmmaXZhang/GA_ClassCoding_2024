/* eslint-disable react/prop-types */
// const Profile=(props)=>{
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }

const Profile = ({ name, motto, age, pic }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{motto}</h3>
      <h3>{age}</h3>
      <p>
        <img src={pic} alt="" />
      </p>
    </div>
  );
};

export default Profile;
