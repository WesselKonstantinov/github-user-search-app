function UserStats({ following, followers, publicRepos }) {
  const userStats = [
    { label: "repos", number: publicRepos },
    { label: "followers", number: followers },
    { label: "following", number: following },
  ];

  return (
    <ul
      role="list"
      className="py-4.5 md:py-4 px-3.5 md:px-8 flex col-span-2 bg-ghost-white dark:bg-hei-se-black rounded-lg"
    >
      {userStats.map((stat) => (
        <li
          key={stat.label}
          role="listitem"
          className="flex flex-col-reverse flex-1 gap-2 md:gap-0 text-center md:text-left"
        >
          <span className="text-base md:text-1.5xl text-anchors-aweigh dark:text-white font-bold">
            {stat.number}
          </span>
          <span className="text-3xs md:text-2xs capitalize font-normal">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UserStats;
