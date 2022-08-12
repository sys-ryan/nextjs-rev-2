export async function getServerSideProps(context) {
  const { req, res, params } = context;

  console.log("server side code");
  return {
    props: {
      username: "Ryan",
    },
  };
}

const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;
