import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes';
import '@shared/styles/global.css';
import { Loader } from '@shared/ui/Loader';

const App: FC = () => {
  return <RouterProvider router={Router} fallbackElement={<Loader />} />;
};

export default App;
