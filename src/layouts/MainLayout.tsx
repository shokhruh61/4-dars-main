import { ReactNode } from 'react';
import Header from '../assets/components/Header';

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
