import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { Outlet } from 'react-router-dom';
import LogoSection from './components/LogoSection.tsx';

const Layout = () => {
    return (
        <div>
            <LogoSection />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;