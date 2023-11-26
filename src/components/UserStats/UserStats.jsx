function UserStats({ following, followers, publicRepos }) {
  const userStats = [
    { label: "repos", number: publicRepos },
    { label: "followers", number: followers },
    { label: "following", number: following },
  ];

  return (
    <ul
      role="list"
      className="py-4.5 px-3.5 flex col-span-2 bg-ghost-white dark:bg-hei-se-black rounded-lg"
    >
      {userStats.map((stat) => (
        <li
          key={stat.label}
          role="listitem"
          className="flex flex-col-reverse flex-1 gap-2"
        >
          <span className="text-base text-anchors-aweigh dark:text-white text-center font-bold">
            {stat.number}
          </span>
          <span className="text-3xs text-center capitalize font-normal">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UserStats;
