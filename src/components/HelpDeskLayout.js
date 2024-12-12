import React, { useState } from 'react';
import {
  Star,
  ChevronDown,
  Plus,
  Search,
  MessageSquare,
  Clock,
  Filter,
  MoreHorizontal,
  BookOpen,
  Activity,
  Globe,
  BarChart2,
  Users,
  Menu,
  PanelRightOpen,
  Headphones,
  Tag,
  Settings,
  Bell,
  Moon
} from 'lucide-react';

const NavMenuItem = ({ text, active }) => (
  <button className={`px-4 py-2 text-sm ${active ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
    {text}
  </button>
);

const SidebarItem = ({ icon: Icon, text, count, active }) => (
  <div className={`flex items-center px-3 py-1.5 rounded-md cursor-pointer text-sm
    ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
    <Icon className="h-4 w-4 mr-3" />
    <span className="flex-1">{text}</span>
    {count && (
      <span className={`px-2 py-0.5 rounded-full text-xs
        ${active ? 'bg-blue-100' : 'bg-gray-100'}`}>
        {count}
      </span>
    )}
  </div>
);

const SidebarSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
    <div className="space-y-1">{children}</div>
  </div>
);

const HelpDeskLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed w-full h-14 bg-[#282C3F] z-50 px-4">
        <div className="h-full flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 hover:bg-gray-700 rounded-lg"
              >
                <Menu className="h-5 w-5 text-gray-300" />
              </button>
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Headphones className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex items-center">
              <NavMenuItem text="Tickets" active />
              <NavMenuItem text="Knowledge Base" />
              <NavMenuItem text="Community" />
              <NavMenuItem text="Customers" />
              <NavMenuItem text="Analytics" />
              <NavMenuItem text="Activities" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-300 text-sm">westayclose.in</span>
            <button className="p-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg">
              <Plus className="h-4 w-4 text-white" />
            </button>
            <button className="p-1.5 text-gray-300 hover:bg-gray-700 rounded-lg">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-1.5 text-gray-300 hover:bg-gray-700 rounded-lg">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-1.5 text-gray-300 hover:bg-gray-700 rounded-lg">
              <Settings className="h-5 w-5" />
            </button>
            <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white w-60 border-r border-gray-200 
        transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-60'}`}>
        <div className="h-full flex flex-col">
          <div className="p-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2">
            <SidebarSection title="STARRED VIEWS">
              <SidebarItem icon={Star} text="All Tickets" count="01" active />
            </SidebarSection>

            <SidebarSection title="ALL VIEWS">
              <SidebarItem icon={MessageSquare} text="Agent Queue" count="14" />
              <SidebarItem icon={Users} text="Team Queue" count="28" />
              <SidebarItem icon={Tag} text="Tags" />
            </SidebarSection>

            <div className="border-t my-4"></div>

            <SidebarSection title="HEADQUARTERS">
              <SidebarItem icon={Globe} text="Company Profile" />
              <SidebarItem icon={Users} text="Team Members" />
              <SidebarItem icon={BookOpen} text="Knowledge Base" />
              <SidebarItem icon={BarChart2} text="Reports" />
              <SidebarItem icon={Activity} text="Activities" />
            </SidebarSection>
          </div>

          {/* Bottom section */}
          <div className="p-3 border-t bg-gray-50">
            <div className="flex items-center justify-between text-gray-500">
              <div className="flex items-center space-x-2">
                <button className="p-1.5 hover:bg-gray-200 rounded-lg">
                  <PanelRightOpen className="h-4 w-4" />
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded-lg">
                  <Moon className="h-4 w-4" />
                </button>
              </div>
              <button className="text-xs text-blue-600 hover:text-blue-700">
                Chat 'n Chill
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-14 ${sidebarOpen ? 'ml-60' : 'ml-0'} transition-margin duration-200`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Star className="h-5 w-5 text-yellow-400" />
              <h1 className="text-lg font-medium">All Tickets (01)</h1>
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-sm">Total Count</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Classic View</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Ticket Example */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-full">
                  <MessageSquare className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Here's your first ticket.</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>#100</span>
                    <span>•</span>
                    <span>Suresh</span>
                    <span>•</span>
                    <span>Wsc</span>
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    <span>4 days ago</span>
                    <span>•</span>
                    <span>02 Dec 12:22 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-sm text-red-500 bg-red-50 rounded-md">
                  Open
                </span>
                <img src="/api/placeholder/32/32" alt="Avatar" className="w-8 h-8 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpDeskLayout;