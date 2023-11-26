function UserIntro({ name, login, bio, avatar, joined }) {
  const getFormattedDate = (date) =>
    new Intl.DateTimeFormat("en-UK", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));

  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 md:gap-x-10 gap-y-8.5 md:gap-y-6 col-span-2">
      <div className="grid gap-1.5">
        <hgroup className="break-all">
          <h2 className="text-anchors-aweigh dark:text-white text-base font-bold md:text-2.5xl">
            {name || login}
          </h2>
          <p className="text-blue md:text-base">@{login}</p>
        </hgroup>
        <p className="text-searching-blue dark:text-white">
          Joined <time dateTime={joined}>{getFormattedDate(joined)}</time>
        </p>
      </div>
      <img
        src={avatar}
        alt={`Avatar of ${name || login}`}
        className="w-[4.375rem] h-[4.375rem] md:w-[7.3125rem] md:h-[7.3125rem] rounded-full col-start-1 col-end-2 row-start-1"
      />
      <p
        className={`${
          bio ? "" : "opacity-75"
        } col-span-2 font-normal leading-loose`}
      >
        {bio || "This profile has no bio"}
      </p>
    </div>
  );
}

export default UserIntro;
