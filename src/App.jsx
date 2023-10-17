import AppLabel from "./components/AppLabel/AppLabel";
import VisuallyHidden from "./components/VisuallyHidden/VisuallyHidden";

function App() {
  return (
    <main>
      {/* devfinder Light Dark Search GitHub username... Search Joined Repos
      Followers Following */}
      <AppLabel>
        devfinder <VisuallyHidden>(search for users on GitHub)</VisuallyHidden>
      </AppLabel>
    </main>
  );
}

export default App;
