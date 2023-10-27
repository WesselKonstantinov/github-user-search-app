import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function AppHeader() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}

export default AppHeader;
