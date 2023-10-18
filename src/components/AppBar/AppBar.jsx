import AppLabel from "../AppLabel/AppLabel";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function AppBar() {
  return (
    <div className="flex justify-between items-center">
      <AppLabel>
        devfinder <VisuallyHidden>(search for users on GitHub)</VisuallyHidden>
      </AppLabel>
      <ThemeSwitcher />
    </div>
  );
}

export default AppBar;
