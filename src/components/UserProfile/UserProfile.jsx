import useSWR from "swr";
import UserDetails from "../UserDetails/UserDetails";
import UserStats from "../UserStats/UserStats";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserProfile() {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR("https://api.github.com/users/octocat", fetcher);

  return (
    <>
      {error && <p>Failed to load.</p>}
      {isLoading && <p>Loading...</p>}
      {user && (
        <div className="pt-8 px-6 pb-12 mt-4 bg-white dark:bg-fainting-light rounded-2xl shadow-[0_1rem_1.875rem_-0.625rem_rgba(70,96,187,0.2)] dark:shadow-none">
          <header className="flex flex-row-reverse justify-end items-center gap-5">
            <div className="grid gap-1.5">
              <hgroup>
                <h2 className="text-anchors-aweigh dark:text-white text-base font-bold">
                  {user.name || user.login}
                </h2>
                <p className="text-blue">@{user.login}</p>
              </hgroup>
              <p className="text-searching-blue dark:text-white">
                Joined 25 Jan 2011
              </p>
            </div>
            <img
              src={user.avatar_url}
              alt={`Avatar of ${user.name || user.login}`}
              className="w-[4.375rem] h-[4.375rem] rounded-full"
            />
          </header>
          <p className="mt-8.5 font-normal leading-loose">
            Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donec odio.
            Quisque volutpat mattis eros.
          </p>
          <UserStats
            followers={user.followers}
            following={user.following}
            publicRepos={user.public_repos}
          />
          <UserDetails
            blog={user.blog}
            company={user.company}
            location={user.location}
            twitterUsername={user.twitter_username}
          />
        </div>
      )}
    </>
  );
}

export default UserProfile;
