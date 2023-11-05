import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@pages/ErrorPage';
import { HomePage } from '@pages/HomePage';
import { Loader } from '@shared/ui/Loader';
import { ItemCardDetails } from '@entities/ItemCardDetails';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'card/:malId',
        element: <ItemCardDetails />,
        loader: () => <Loader />,
      },
    ],
  },
]);
