import DashBoardNav from "@/components/dashboard/ui/DashBoardHeader";
import MobileNav from "@/components/dashboard/ui/MobileNav";
import SideBar from "@/components/dashboard/ui/SideBar";
import { FunctionComponent } from "react";

interface DashProps {
    children: React.ReactNode;
}
 
const DashboardLayout: FunctionComponent<DashProps> = ({ children }) => {
    return ( 
        <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z[80] bg-gray-900">
           <SideBar />
        </div>
        <main className="md:pl-72">
            <MobileNav />
            <DashBoardNav />
            {children}
        </main>
    </div>
     );
}
 
export default DashboardLayout;