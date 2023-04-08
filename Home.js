import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>There is an error...</h1>
  }

  return (
    <div>
      <h1>This is the home page</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </div>
  );
};
