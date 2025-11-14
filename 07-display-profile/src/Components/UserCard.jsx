export const UserCard = ({ data }) => {
  return (
    <>
      <h2>name:{data.name}</h2>
      <h2>age : {data.age}</h2>
      <h2>Location : {data.location}</h2>
    </>
  );
};
