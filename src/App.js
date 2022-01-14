import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/storeProvider";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <MyComponent />
      </StoreProvider>
    </div>
  );
}

export default App;
