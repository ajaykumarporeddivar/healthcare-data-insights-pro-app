'use client';

import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        <div className="flex justify-between mb-4">
          <button
            className={cn(
              'py-2 px-4 rounded-md',
              activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600',
              'hover:bg-zinc-700 hover:text-white'
            )}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={cn(
              'py-2 px-4 rounded-md',
              activeTab === 'notifications' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600',
              'hover:bg-zinc-700 hover:text-white'
            )}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
          <button
            className={cn(
              'py-2 px-4 rounded-md',
              activeTab === 'appearance' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600',
              'hover:bg-zinc-700 hover:text-white'
            )}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
        </div>
        {activeTab === 'profile' && (
          <Card className="p-4">
            <h2 className="text-lg font-bold mb-2">Profile Information</h2>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Email</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Role</label>
              <Input value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <Button onClick={handleSave}>Save</Button>
            {saved && <Badge className="ml-2">Saved!</Badge>}
          </Card>
        )}
        {activeTab === 'notifications' && (
          <Card className="p-4">
            <h2 className="text-lg font-bold mb-2">Notification Preferences</h2>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Email notifications</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Receive email notifications</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Push notifications</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Receive push notifications</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Weekly digest</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Receive weekly digest</span>
              </div>
            </div>
          </Card>
        )}
        {activeTab === 'appearance' && (
          <Card className="p-4">
            <h2 className="text-lg font-bold mb-2">Appearance Settings</h2>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Theme</label>
              <div className="flex flex-wrap">
                <button
                  className={cn(
                    'py-2 px-4 rounded-md',
                    'bg-zinc-200 text-zinc-600',
                    'hover:bg-zinc-700 hover:text-white'
                  )}
                >
                  Light
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-md',
                    'bg-zinc-200 text-zinc-600',
                    'hover:bg-zinc-700 hover:text-white'
                  )}
                >
                  Dark
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-md',
                    'bg-zinc-200 text-zinc-600',
                    'hover:bg-zinc-700 hover:text-white'
                  )}
                >
                  System
                </button>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-zinc-600 mb-2">Language</label>
              <div className="flex flex-wrap">
                <button
                  className={cn(
                    'py-2 px-4 rounded-md',
                    'bg-zinc-200 text-zinc-600',
                    'hover:bg-zinc-700 hover:text-white'
                  )}
                >
                  English
                </button>
                <button
                  className={cn(
                    'py-2 px-4 rounded-md',
                    'bg-zinc-200 text-zinc-600',
                    'hover:bg-zinc-700 hover:text-white'
                  )}
                >
                  Spanish
                </button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}