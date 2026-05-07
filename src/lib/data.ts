import { 
  DemoUser, 
  HealthcareProfessional, 
  Patient, 
  MedicalRecord, 
  Hospital, 
  BillingRecord, 
  ApiResponse, 
  SortDir 
} from './types';

export const STATS = {
  totalRevenue: '$284,520',
  revenueGrowth: '+18.4%',
  activeUsers: 1847,
  userGrowth: '+12.1%',
  totalPatients: 10000,
  patientGrowth: '+15.6%',
};

export const DEMO_USER: DemoUser = {
  id: '1',
  name: 'Sarah Chen',
  email: 'sarah.chen@example.com',
  role: 'admin',
  plan: 'pro',
  avatar: 'SC',
  joinedAt: '2022-01-01T00:00:00.000Z',
};

export const HEALTHCARE_PROFESSIONALS: HealthcareProfessional[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'doctor',
    hospital: 'Hospital A',
    specialty: 'Cardiology',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'nurse',
    hospital: 'Hospital B',
    specialty: 'Pediatrics',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
];

export const PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Patient A',
    email: 'patient.a@example.com',
    medicalHistory: 'History of hypertension',
    currentMedications: 'Lisinopril, Aspirin',
    allergies: 'Penicillin',
    status: 'active',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: 'Patient B',
    email: 'patient.b@example.com',
    medicalHistory: 'History of diabetes',
    currentMedications: 'Metformin, Insulin',
    allergies: 'Sulfa',
    status: 'active',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
];

export const MEDICAL_RECORDS: MedicalRecord[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    diagnosis: 'Hypertension',
    treatmentPlan: 'Lisinopril, diet, and exercise',
    status: 'active',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '2',
    diagnosis: 'Diabetes',
    treatmentPlan: 'Metformin, Insulin, diet, and exercise',
    status: 'active',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
];