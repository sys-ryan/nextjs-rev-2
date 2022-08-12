import { Router, useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  };

  return (
    <div>
      <h1>The Proejcts of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
