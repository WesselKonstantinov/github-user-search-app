import AppHeader from "./components/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import Center from "./components/Center/Center";
import Cover from "./components/Cover/Cover";

function App() {
  return (
    <Cover>
      <Center>
        <AppHeader />
        <AppMain title="GitHub user search app" />
      </Center>
    </Cover>
  );
}

export default App;
