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
  X,
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
      <aside
        className={cn(
          "w-64 bg-gradient-to-b from-upkraft-purple via-purple-700 to-purple-800 text-white flex flex-col transition-all duration-300 ease-in-out z-50 shadow-2xl",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "fixed lg:relative h-full",
        )}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg"></div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent relative z-10">
            UPKRAFT
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 group relative overflow-hidden",
                    item.active
                      ? "bg-white/20 text-white shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white hover:shadow-md",
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity",
                    !item.active && "group-hover:opacity-100"
                  )}></div>
                  <item.icon className={cn(
                    "w-5 h-5 relative z-10 transition-transform",
                    item.active ? "text-white" : "group-hover:scale-110"
                  )} />
                  <span className="text-sm font-medium relative z-10">{item.label}</span>
                  {item.active && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
                  )}
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
        <header className="bg-white border-b border-gray-100 px-4 lg:px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Mobile menu button and Search */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>

              <div className="relative hidden sm:block">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-upkraft-purple/20 focus:border-upkraft-purple transition-all w-64 lg:w-80 bg-gray-50 hover:bg-white"
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
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  Sherry Wolf
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-6 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
