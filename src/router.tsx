import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import Loading from './components/Loading';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} HydrateFallback={Loading} id="root">
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default router;
