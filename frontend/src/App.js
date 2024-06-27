import React from "react";
import Routess from "./Routess";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
function App() {
  return (
   <>
   <Provider store={store}>
    <Routess/>
    </Provider>
   </>
  );
}

export default App;
