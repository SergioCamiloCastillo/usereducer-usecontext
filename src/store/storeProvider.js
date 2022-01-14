import { useContext, useReducer } from "react";
import { createContext } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
const useStore = () => {
  return useContext(StoreContext)[0];
};
const useDispatch = () => {
    return useContext(StoreContext)[1];
  };

export { StoreContext, useStore, useDispatch };
export default StoreProvider;
