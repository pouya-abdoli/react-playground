import AppDataProvider from "./Components/newContext";
import Todo from "./Components/Todo";

function App() {
  return (
    <AppDataProvider>
      <Todo />
    </AppDataProvider>
  );
}

export default App;
