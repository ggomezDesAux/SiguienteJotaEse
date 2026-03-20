import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex p-4 h-screen flex-col md:flex-row md:overflow-hidden">
            <SideNav />
            {children}
        </div>
    );
}