import { MutationCache, QueryCache, QueryClient } from "react-query";

export const errorHandler = async (error) => {
  console.log(error);
  return;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: errorHandler,
  }),
  mutationCache: new MutationCache({
    onError: errorHandler,
  }),
});
