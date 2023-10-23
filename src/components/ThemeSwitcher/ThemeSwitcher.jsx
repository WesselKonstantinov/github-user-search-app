function ThemeSwitcher() {
  return (
    <button className="inline-flex gap-x-4 text-san-marino dark:text-white font-bold tracking-[0.19em] uppercase">
      Dark
      <img
        src="/images/icon-moon.svg"
        alt=""
        width="20"
        height="20"
        className="w-5 h-5"
      />
    </button>
  );
}

export default ThemeSwitcher;
