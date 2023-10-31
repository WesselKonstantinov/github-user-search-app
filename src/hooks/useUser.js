import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useUser(username) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export default useUser;
