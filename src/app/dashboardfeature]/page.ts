'use client';
import { useParams } 'next/navigation';
import { HEALTHCARE_PROFEALS, PATIENTS, MEDICAL_RECORDS from '@/lib/data';
import { cn } '@/components/ui';
import {, ArrowRight, User, Stethoscope, FileText } from 'lide-react';

const params = useParams();
const = (params.feature as string) ?? '';

const featureViews = {
  professionals: (
    <div className="bg-zinc-50">
      <PageHeader
        title="Healthcare Professionals"
        subtitle="Manage healthcare professionals"
        actionButtons={[
          <Button key="add" variant="primary">
            Add Professional
          </Button>,
        ]}
      />
      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-100 border-b border-zinc-200">
            <tr>
              <th className="px-4 py-2 font-bold text-zinc-900">Name</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Email</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Role</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Hospital</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {HEALTHCARE_PROFESSIONALS.map((professional) => (
              <tr key={professional.id} className="border-b border-zinc-200">
                <td className="px-4 py-2 text-zinc-600">{professional.name}</td>
                <td className="px-4 py-2 text-zinc-600">{professional.email}</td>
                <td className="px-4 py-2 text-zinc-600">{professional.role}</td>
                <td className="px-4 py-2 text-zinc-600">{professional.hospital}</td>
                <td className="px-4 py-2 text-zinc-600">
                  <Badge variant="success">Active</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  patients: (
    <div className="bg-zinc-50">
      <PageHeader
        title="Patients"
        subtitle="Manage patients"
        actionButtons={[
          <Button key="add" variant="primary">
            Add Patient
          </Button>,
        ]}
      />
      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-100 border-b border-zinc-200">
            <tr>
              <th className="px-4 py-2 font-bold text-zinc-900">Name</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Email</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Medical History</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Current Medications</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {PATIENTS.map((patient) => (
              <tr key={patient.id} className="border-b border-zinc-200">
                <td className="px-4 py-2 text-zinc-600">{patient.name}</td>
                <td className="px-4 py-2 text-zinc-600">{patient.email}</td>
                <td className="px-4 py-2 text-zinc-600">{patient.medicalHistory}</td>
                <td className="px-4 py-2 text-zinc-600">{patient.currentMedications}</td>
                <td className="px-4 py-2 text-zinc-600">
                  {patient.status === 'active' ? (
                    <Badge variant="success">Active</Badge>
                  ) : (
                    <Badge variant="danger">Inactive</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  medicalRecords: (
    <div className="bg-zinc-50">
      <PageHeader
        title="Medical Records"
        subtitle="Manage medical records"
        actionButtons={[
          <Button key="add" variant="primary">
            Add Record
          </Button>,
        ]}
      />
      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-100 border-b border-zinc-200">
            <tr>
              <th className="px-4 py-2 font-bold text-zinc-900">Patient Name</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Doctor Name</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Diagnosis</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Treatment Plan</th>
              <th className="px-4 py-2 font-bold text-zinc-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {MEDICAL_RECORDS.map((record) => (
              <tr key={record.id} className="border-b border-zinc-200">
                <td className="px-4 py-2 text-zinc-600">{record.patientName}</td>
                <td className="px-4 py-2 text-zinc-600">{record.doctorName}</td>
                <td className="px-4 py-2 text-zinc-600">{record.diagnosis}</td>
                <td className="px-4 py-2 text-zinc-600">{record.treatmentPlan}</td>
                <td className="px-4 py-2 text-zinc-600">
                  {record.status === 'active' ? (
                    <Badge variant="success">Active</Badge>
                  ) : (
                    <Badge variant="danger">Inactive</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};

const PageHeader = ({ title, subtitle, actionButtons }: any) => {
  return (
    <div className="bg-zinc-100 py-4 px-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
      <p className="text-zinc-600">{subtitle}</p>
      <div className="flex gap-2 mt-2">{actionButtons}</div>
    </div>
  );
};

const Button = ({ children, variant }: any) => {
  const className = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-700',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
  };

  return (
    <button className={cn('px-4 py-2 rounded-lg', className[variant])}>
      {children}
    </button>
  );
};

const Badge = ({ variant, children }: any) => {
  const className = {
    success: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    danger: 'bg-red-50 text-red-600 border-red-200',
  };

  return (
    <span className={cn('px-2 py-1 rounded-lg border', className[variant])}>
      {children}
    </span>
  );
};

if (slug === 'professionals') {
  return featureViews.professionals;
} else if (slug === 'patients') {
  return featureViews.patients;
} else if (slug === 'medicalRecords') {
  return featureViews.medicalRecords;
} else {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        icon={<User />}
        title="Healthcare Professionals"
        description="Manage healthcare professionals"
        href="/dashboard/professionals"
      />
      <Card
        icon={<Stethoscope />}
        title="Patients"
        description="Manage patients"
        href="/dashboard/patients"
      />
      <Card
        icon={<FileText />}
        title="Medical Records"
        description="Manage medical records"
        href="/dashboard/medicalRecords"
      />
    </div>
  );
}

function Card({ icon, title, description, href }: any) {
  return (
    <a
      href={href}
      className="bg-white border border-zinc-200 rounded-lg shadow-sm p-6 flex flex-col gap-2 hover:shadow-lg"
    >
      {icon}
      <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </a>
  );
}