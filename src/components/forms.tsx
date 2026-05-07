'use client';

import { useState } from 'react';
import Button, Input, Badge } from '@/components/uiimport { 
  DemoUser, 
  HealthcareProfessional, 
  Patient, 
  MedicalRecord 
} from '@/lib/types';
import { cn } from '@/components/ui';

export function CreateEntityForm() {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [hospital, setHospital] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', role: '', hospital: '', specialty: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const newErrors = { name: '', email: '', role: '', hospital: '', specialty: '' };
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!role) newErrors.role = 'Role is required';
    if (!hospital) newErrors.hospital = 'Hospital is required';
    if (!specialty) newErrors.specialty = 'Specialty is required';

    if (Object.values(newErrors).every(error => error === '')) {
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setRole('');
    setHospital('');
    setSpecialty('');
    setErrors({ name: '', email: '', role: '', hospital: '', specialty: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-zinc-50 p-4 rounded-xl shadow-sm">
      <h2 className="text-zinc-900 font-bold mb-4">Create Healthcare Professional</h2>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Name</label>
          <Input type="text" value={name} onChange={e => setName(e.target.value)} />
          {errors.name && <div className="text-red-600 text-sm mt-2">{errors.name}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Email</label>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Role</label>
          <Input type="text" value={role} onChange={e => setRole(e.target.value)} />
          {errors.role && <div className="text-red-600 text-sm mt-2">{errors.role}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Hospital</label>
          <Input type="text" value={hospital} onChange={e => setHospital(e.target.value)} />
          {errors.hospital && <div className="text-red-600 text-sm mt-2">{errors.hospital}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-zinc-600 text-sm mb-2">Specialty</label>
          <Input type="text" value={specialty} onChange={e => setSpecialty(e.target.value)} />
          {errors.specialty && <div className="text-red-600 text-sm mt-2">{errors.specialty}</div>}
        </div>
        <Button type="submit" variant="primary">Create</Button>
        <Button type="button" variant="ghost" onClick={handleReset}>Reset</Button>
      </form>
      {submitted && <div className="bg-emerald-50 border-emerald-200 text-emerald-600 p-4 rounded-xl shadow-sm mt-4">✓ Healthcare Professional created successfully!</div>}
    </div>
  );
}

export interface FilterState {
  search: string;
  status: string;
  dateRange: string;
  sortBy: string;
  sortDir: 'asc' | 'desc';
}

export function SearchAndFilter({ onChange }: { onChange: (filters: FilterState) => void }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onChange({ search: e.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    onChange({ search, status: e.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
    onChange({ search, status, dateRange: e.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    onChange({ search, status, dateRange, sortBy: e.target.value, sortDir });
  };

  const handleSortDirChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDir(e.target.value as 'asc' | 'desc');
    onChange({ search, status, dateRange, sortBy, sortDir: e.target.value as 'asc' | 'desc' });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div className="bg-zinc-50 p-4 rounded-xl shadow-sm mb-4">
      <h2 className="text-zinc-900 font-bold mb-4">Search and Filter</h2>
      <div className="mb-4">
        <label className="block text-zinc-600 text-sm mb-2">Search</label>
        <Input type="text" value={search} onChange={handleSearchChange} placeholder="Search" />
      </div>
      <div className="mb-4">
        <label className="block text-zinc-600 text-sm mb-2">Status</label>
        <select value={status} onChange={handleStatusChange} className="block w-full p-2 pl-10 text-zinc-600 border border-zinc-200 rounded-lg">
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-600 text-sm mb-2">Date Range</label>
        <Input type="text" value={dateRange} onChange={handleDateRangeChange} placeholder="Date Range" />
      </div>
      <div className="mb-4">
        <label className="block text-zinc-600 text-sm mb-2">Sort By</label>
        <select value={sortBy} onChange={handleSortByChange} className="block w-full p-2 pl-10 text-zinc-600 border border-zinc-200 rounded-lg">
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-600 text-sm mb-2">Sort Direction</label>
        <select value={sortDir} onChange={handleSortDirChange} className="block w-full p-2 pl-10 text-zinc-600 border border-zinc-200 rounded-lg">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Button type="button" variant="primary" onClick={handleClearFilters}>Clear Filters</Button>
    </div>
  );
}

export function ExportButton({ data }: { data: any[] }) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.csv';
    a.click();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <div>
      <Button type="button" variant="primary" onClick={handleExport}>Export CSV</Button>
      {exported && <div className="bg-emerald-50 border-emerald-200 text-emerald-600 p-4 rounded-xl shadow-sm mt-4">✓ Exported!</div>}
    </div>
  );
}