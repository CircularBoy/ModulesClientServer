import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './config/router';
import store from './config/store';

function App() {
  return (
    <ReduxProvider store={store}>
      {/*<HousesPage />*/}
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
