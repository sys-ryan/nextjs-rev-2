import { useRouter } from "next/router";
const portfolioProjectPage = () => {
  const router = useRouter();

  const path = router.pathname;
  const query = router.query;

  console.log(path, query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
};

export default portfolioProjectPage;
