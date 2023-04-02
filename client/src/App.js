import {useEffect} from "react";
import api from "./api"
import {Provider as ReduxProvider} from "react-redux";
import store from "./config/store";
import router from "./config/router";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  console.log(router)
  // useEffect(() => {
  //   api.getHouses().then((value) => {
  //     console.log(value)
  //   })
  //   api.createHouse({name: 'dyadya'}).then((value) => {
  //     console.log(value)
  //   })
  // })
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router}/>
    </ReduxProvider>

  );
}

export default App;
