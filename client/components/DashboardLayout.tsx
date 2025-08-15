import { ReactNode, useState } from "react";
import {
  Home,
  Users,
  BarChart3,
  Calendar,
  ClipboardList,
  Music,
  Play,
  CreditCard,
  UserPlus,
  Settings,
  LogOut,
  Search,
  Bell,
  HelpCircle,
  User,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Students" },
  { icon: BarChart3, label: "Statistics" },
  { icon: Calendar, label: "Calendar" },
  { icon: ClipboardList, label: "Assignment" },
  { icon: Music, label: "Music Library" },
  { icon: Play, label: "Practice Studio" },
  { icon: CreditCard, label: "Payments Summary" },
  { icon: UserPlus, label: "Refer & Earn" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-64 bg-upkraft-purple text-white flex flex-col transition-transform duration-300 ease-in-out z-50",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "fixed lg:relative h-full"
      )}>
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">UPKRAFT</h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 text-left rounded-lg transition-colors",
                    item.active 
                      ? "bg-white/20 text-white" 
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Logout */}
        <div className="p-3">
          <button className="w-full flex items-center gap-3 px-3 py-3 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button and Search */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>

              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-upkraft-purple focus:border-transparent w-64 lg:w-80"
                />
              </div>
            </div>
            
            {/* Right side icons */}
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-upkraft-purple rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 ml-2 lg:ml-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">Sherry Wolf</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
