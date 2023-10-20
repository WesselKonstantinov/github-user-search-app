import AppLabel from "../AppLabel/AppLabel";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function AppBar() {
  return (
    <div className="flex justify-between items-center">
      <AppLabel>
        devfinder <span className="sr-only">(search for users on GitHub)</span>
      </AppLabel>
      <ThemeSwitcher />
    </div>
  );
}

export default AppBar;
