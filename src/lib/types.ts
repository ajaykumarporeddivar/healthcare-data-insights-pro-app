export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface HealthcareProfessional {
  id: string;
  name: string;
  email: string;
  role: string;
  hospital: string;
  specialty: string;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  medicalHistory: string;
  currentMedications: string;
  allergies: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  diagnosis: string;
  treatmentPlan: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface BillingRecord {
  id: string;
  patientId: string;
  hospitalId: string;
  amount: number;
  paymentMethod: string;
  status: 'paid' | 'pending' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export type SortDir = 'asc' | 'desc';