import React from "react";
import { useDispatch, useStore } from "../store/storeProvider";

import { types } from "../store/storeReducer";

const MyComponent = () => {
  //const [store, dispatch] = useContext(StoreContext);
  const store = useStore();
  const dispatch = useDispatch();

  const { user, products } = store;
  return (
    <div>
      <h1>My component</h1>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: types.authLogout })}>
        Logout
      </button>
      <button
        onClick={() =>
          dispatch({
            type: types.authLogin,
            payload: { id: 1, name: "sergio" },
          })
        }
      >
        Login
      </button>
      <h2>Products</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: types.productDeleteAll })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: types.productChange })}>
        Change
      </button>
    </div>
  );
};

export default MyComponent;
