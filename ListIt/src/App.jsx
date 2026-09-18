import AppDataProvider from "./Components/AppDataProvider";
import Todo from "./Components/Todo";

function App() {
  return (
    <AppDataProvider>
      <Todo />
    </AppDataProvider>
  );
}

export default App;
