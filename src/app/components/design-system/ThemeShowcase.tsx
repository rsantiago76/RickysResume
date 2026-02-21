import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { StatusBadge } from './StatusBadge';
import { TagPill } from './TagPill';

export function ThemeShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Light Mode Preview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sun className="w-5 h-5 text-yellow-500" />
          <h4 className="text-lg font-semibold">Light Mode</h4>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Simulated Light Mode */}
          <div style={{ backgroundColor: '#F9FAFB' }} className="p-6 space-y-4">
            {/* Navbar */}
            <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }} className="px-4 py-3 flex items-center justify-between rounded-lg">
              <span style={{ color: '#111827' }} className="font-bold">Portfolio</span>
              <div className="flex items-center gap-3">
                <span style={{ color: '#6B7280' }} className="text-sm">Projects</span>
                <Button size="sm" className="h-8 text-xs">Contact</Button>
              </div>
            </div>

            {/* Card */}
            <div style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h3 style={{ color: '#111827' }} className="text-lg font-semibold">Project Title</h3>
                <StatusBadge status="live" size="sm" />
              </div>
              <p style={{ color: '#4B5563' }} className="text-sm">
                Production-ready application with advanced features and scalable architecture
              </p>
              <div className="flex gap-2">
                <span style={{ backgroundColor: '#F3F4F6', color: '#111827', borderColor: '#E5E7EB' }} className="px-2 py-1 text-xs rounded border">
                  React
                </span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#111827', borderColor: '#E5E7EB' }} className="px-2 py-1 text-xs rounded border">
                  Node.js
                </span>
              </div>
            </div>

            {/* Button Row */}
            <div className="flex gap-2">
              <button style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }} className="px-3 py-1.5 text-sm rounded-md font-medium">
                Primary
              </button>
              <button style={{ backgroundColor: 'transparent', color: '#111827', borderColor: '#E5E7EB' }} className="px-3 py-1.5 text-sm rounded-md font-medium border">
                Outline
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Moon className="w-5 h-5 text-blue-400" />
          <h4 className="text-lg font-semibold">Dark Mode</h4>
        </div>
        
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          {/* Simulated Dark Mode */}
          <div style={{ backgroundColor: '#0F172A' }} className="p-6 space-y-4">
            {/* Navbar */}
            <div style={{ backgroundColor: '#1E293B', borderBottom: '1px solid #334155' }} className="px-4 py-3 flex items-center justify-between rounded-lg shadow-lg shadow-black/20">
              <span style={{ color: '#F8FAFC' }} className="font-bold">Portfolio</span>
              <div className="flex items-center gap-3">
                <span style={{ color: '#94A3B8' }} className="text-sm">Projects</span>
                <button style={{ backgroundColor: '#3B82F6', color: '#F8FAFC' }} className="px-3 py-1.5 text-xs rounded-md font-medium">
                  Contact
                </button>
              </div>
            </div>

            {/* Card */}
            <div style={{ backgroundColor: '#1E293B', borderColor: '#334155' }} className="border rounded-lg p-4 space-y-3 shadow-lg shadow-black/20">
              <div className="flex items-start justify-between">
                <h3 style={{ color: '#F8FAFC' }} className="text-lg font-semibold">Project Title</h3>
                <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.2)' }} className="px-2.5 py-1 text-xs rounded-full border inline-flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  Live
                </span>
              </div>
              <p style={{ color: '#CBD5E1' }} className="text-sm">
                Production-ready application with advanced features and scalable architecture
              </p>
              <div className="flex gap-2">
                <span style={{ backgroundColor: '#334155', color: '#F8FAFC', borderColor: '#334155' }} className="px-2 py-1 text-xs rounded border">
                  React
                </span>
                <span style={{ backgroundColor: '#334155', color: '#F8FAFC', borderColor: '#334155' }} className="px-2 py-1 text-xs rounded border">
                  Node.js
                </span>
              </div>
            </div>

            {/* Button Row */}
            <div className="flex gap-2">
              <button style={{ backgroundColor: '#3B82F6', color: '#F8FAFC' }} className="px-3 py-1.5 text-sm rounded-md font-medium shadow-sm">
                Primary
              </button>
              <button style={{ backgroundColor: 'transparent', color: '#F8FAFC', borderColor: '#334155' }} className="px-3 py-1.5 text-sm rounded-md font-medium border">
                Outline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
