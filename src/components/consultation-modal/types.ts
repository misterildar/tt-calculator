import { ReactNode } from 'react';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
}

export interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface StepProps {
  onNext: () => void;
  onBack?: () => void;
}

export interface FormStepProps extends StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export interface VerificationStepProps extends StepProps {
  code: string;
  setCode: (code: string) => void;
}

export interface ScheduleStepProps extends StepProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

export interface SuccessStepProps {
  onClose: () => void;
}

export interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface ConsultationModalProviderProps {
  children: ReactNode;
}
