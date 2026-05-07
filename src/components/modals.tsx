'use client';

import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';

export interface EntityDetailModalProps {
  item: Record<string, unknown> | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function EntityDetailModal({ item, open, onClose, title }: EntityDetailModalProps) {
  if (!item) return null;

  const handleApprove = () => {
    console.log('Approved');
    onClose();
  };

  const handleArchive = () => {
    console.log('Archived');
    onClose();
  };

  const handleDelete = () => {
    console.log('Deleted');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-zinc-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-zinc-900 font-bold mb-4">{title}</h2>
        <div className="flex justify-between mb-4">
          <Badge variant="info">{item.status}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="mb-4">
              <label className="block text-zinc-600 text-sm mb-2">{key}</label>
              <div className="text-zinc-600">{value}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="primary" onClick={handleApprove}>Approve</Button>
          <Button type="button" variant="zinc" onClick={handleArchive}>Archive</Button>
          <Button type="button" variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </Modal>
  );
}

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

export function ConfirmModal({ open, onClose, title, message, onConfirm, confirmLabel = 'Confirm', variant = 'info' }: ConfirmModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-zinc-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-zinc-900 font-bold mb-4">{title}</h2>
        <p className="text-zinc-600 mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="zinc" onClick={onClose}>Cancel</Button>
          <Button type="button" variant={variant} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </Modal>
  );
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string; icon?: React.ReactNode; description?: string }>;
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-zinc-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-zinc-900 font-bold mb-4">Command Palette</h2>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Search</label>
          <Input type="text" value={search} onChange={handleSearchChange} />
        </div>
        <ul>
          {filteredItems.map(item => (
            <li key={item.label} className="py-2">
              <a href={item.href} className="text-zinc-600 hover:text-zinc-900">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
                {item.description && <span className="text-zinc-400 text-sm ml-2">{item.description}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}