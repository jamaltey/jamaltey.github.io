import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="min-h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
