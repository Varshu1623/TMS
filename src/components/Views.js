import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  Filter, 
  MoreHorizontal, 
  MessageSquare, 
  Clock, 
  Paperclip,
  Bell,
  Search,
  User
} from 'lucide-react';

const Views = () => {
  const [isDetailView, setIsDetailView] = useState(false);
  const [activeTab, setActiveTab] = useState('CONVERSATION');

  const ticket = {
    id: '100',
    subject: "Here's your first ticket",
    assignee: 'Suresh',
    platform: 'Wsc',
    date: '02 Dec 12:22 PM',
    daysAgo: '6 days ago',
    status: 'Open',
    email: 'suresh.i@westayclose.in',
    phone: '1 888 900 9646',
    website: 'https://westayclose.in/',
    owner: 'Kowsik k',
    message: `Hello\n\nWelcome to Wsc Desks new Unified Ticket Screen. Here, you have complete context of the ticket. Now that you had received your first ticket, did you notice that it has been assigned to you? To respond to this ticket smartly, check out the Auto-Suggested Solutions in the pane to your left.\n\nWhen you're done composing your response, you may send it and close the ticket.\n\nWhatever action you perform, be rest assured that you can always track them under the ticket's history. With that, you're one step closer to delivering top-notch customer service!\n\nCheers,\nTeam  Desk\n1 888 900 9646`
  };

  const Header = () => (
    <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/api/placeholder/32/32" alt="Logo" className="h-8 w-8 rounded" />
          <span className="font-semibold text-lg">Help Desk</span>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search tickets..." 
            className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600" />
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );

  const MainView = () => (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-6xl mx-auto py-6">
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-medium text-gray-800">All Tickets (01)</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-blue-600 font-medium">Total Count</span>
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-md">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2">
                <span>Classic View</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          
          <div 
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b transition duration-150"
            onClick={() => setIsDetailView(true)}
          >
            <input type="checkbox" className="mr-4 h-4 w-4 rounded border-gray-300" />
            <div className="flex-1">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">#{ticket.id}</span>
                <span className="font-medium">{ticket.assignee}</span>
                <span className="text-gray-500">{ticket.platform}</span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{ticket.daysAgo}</span>
                </div>
                <span className="text-gray-500">{ticket.date}</span>
              </div>
              <div className="mt-1 font-medium text-gray-900">{ticket.subject}</div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 text-red-600 bg-red-50 rounded-full text-sm font-medium">
                {ticket.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DetailView = () => (
    <div className="flex flex-1 bg-gray-50">
      <div className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <button 
            onClick={() => setIsDetailView(false)}
            className="text-sm text-blue-600 mb-4 flex items-center space-x-1"
          >
            ← Back to list
          </button>
          <div className="font-medium text-gray-900">{ticket.subject}</div>
          <div className="text-sm text-gray-500 mt-1">
            #{ticket.id} · {ticket.assignee} · {ticket.platform}
          </div>
          <div className="text-sm text-gray-500 mt-1">{ticket.date}</div>
        </div>
        
        <div className="p-4 border-b">
          <h3 className="font-medium text-gray-900 mb-4">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <div className="font-medium">{ticket.assignee}</div>
            <div className="text-gray-600">{ticket.email}</div>
            <div className="text-gray-600">{ticket.phone}</div>
            <div className="text-gray-600">{ticket.website}</div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Key Information</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Ticket Owner</div>
              <div className="text-sm font-medium mt-1">{ticket.owner}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Status</div>
              <div className="text-sm text-red-600 font-medium mt-1">{ticket.status}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Due Date</div>
              <div className="text-sm font-medium mt-1">{ticket.date}</div>
              <div className="text-sm text-red-600 mt-1">Late by 4 days 23 hours</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-900">{ticket.subject}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Reply All
              </button>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="border-b bg-white">
          <div className="flex space-x-8 px-6">
            {['CONVERSATION', 'RESOLUTION', 'TIME ENTRY', 'ATTACHMENT', 'ACTIVITY', 'APPROVAL', 'HISTORY'].map(tab => (
              <button
                key={tab}
                className={`py-4 px-2 border-b-2 transition ${
                  activeTab === tab 
                    ? 'border-blue-600 text-blue-600 font-medium' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {ticket.assignee[0]}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{ticket.assignee}</div>
                  <div className="text-sm text-gray-500">
                    {ticket.date} ({ticket.daysAgo})
                  </div>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-gray-700">
                {ticket.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      {isDetailView ? <DetailView /> : <MainView />}
    </div>
  );
};

export default Views;