import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function useUser(username) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher,
    {
      errorRetryCount: 0,
      keepPreviousData: true,
    }
  );

  return {
    user: data,
    isLoading,
    error,
  };
}

export default useUser;
