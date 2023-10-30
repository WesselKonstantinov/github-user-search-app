import useSWR from "swr";

function useUser(username) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export default useUser;
