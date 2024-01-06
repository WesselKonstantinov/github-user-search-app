import useUser from "../../hooks/useUser";
import UserDetails from "../UserDetails/UserDetails";
import UserIntro from "../UserIntro/UserIntro";
import UserStats from "../UserStats/UserStats";

function UserProfile({ username }) {
  const { user, error, isLoading } = useUser(username);
  const rateLimitExceeded = error?.status === 403 || error?.status === 429;
  const isServerError = error?.status >= 500;

  return (
    <>
      {isLoading && <p className="mt-4">Loading...</p>}
      {rateLimitExceeded && (
        <p className="mt-4">
          You have exceeded the number of allowed requests. Please try again
          later.
        </p>
      )}
      {isServerError && <p className="mt-4">Failed to load.</p>}
      {user && (
        <div className="pt-8 px-6 pb-12 md:p-10 lg:p-12 mt-4 md:mt-6 grid grid-cols-2 lg:grid-cols-[7.3125rem_1fr] gap-6 md:gap-8 lg:gap-x-9 bg-white dark:bg-fainting-light rounded-2xl shadow-[0_1rem_1.875rem_-0.625rem_rgba(70,96,187,0.2)] dark:shadow-none">
          <UserIntro
            name={user.name}
            login={user.login}
            bio={user.bio}
            avatar={user.avatar_url}
            joined={user.created_at}
          />
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
