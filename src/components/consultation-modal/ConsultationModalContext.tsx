'use client';

import { createContext, useState, useContext } from 'react';
import { ConsultationModal } from './ConsultationModal';
import { ConsultationModalContextType, ConsultationModalProviderProps } from './types';

const ConsultationModalContext = createContext<ConsultationModalContextType | null>(null);

export const ConsultationModalProvider = ({ children }: ConsultationModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const value = {
    isOpen,
    openModal,
    closeModal,
  };
  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
      {isOpen && <ConsultationModal isOpen={isOpen} onClose={closeModal} />}
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within ConsultationModalProvider');
  }
  return context;
};
