import { useQuery } from "react-query";
import { getHello } from "../api";

export default function useHello() {
  const {data, isLoading} = useQuery('helloData', getHello,{
    onSuccess: data => {
      console.log(data.message);
    },
    onError: e=>{
      console.log(e.message);
    }
  });
  return {data,isLoading};
}