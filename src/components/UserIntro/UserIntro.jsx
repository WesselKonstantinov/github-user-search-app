function UserIntro({ name, login, avatar }) {
  return (
    <header className="flex flex-row-reverse justify-end items-center gap-5">
      <div className="grid gap-1.5">
        <hgroup>
          <h2 className="text-anchors-aweigh dark:text-white text-base font-bold">
            {name || login}
          </h2>
          <p className="text-blue">@{login}</p>
        </hgroup>
        <p className="text-searching-blue dark:text-white">
          Joined 25 Jan 2011
        </p>
      </div>
      <img
        src={avatar}
        alt={`Avatar of ${name || login}`}
        className="w-[4.375rem] h-[4.375rem] rounded-full"
      />
    </header>
  );
}

export default UserIntro;
