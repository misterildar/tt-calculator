'use client';

import { useState } from 'react';

import { Modal } from '@/ui';
import { ConsultationModalProps, FormData } from './types';
import { FormStep, VerificationStep, ScheduleStep, SuccessStep } from './steps';
import { MODAL_STEPS, getStepNumber, MODAL_TEXTS, ModalStep } from './constants';

import styles from './ConsultationModal.module.scss';

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [currentStep, setCurrentStep] = useState<ModalStep>(MODAL_STEPS.FORM);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreeToTerms: false,
  });

  const [verificationCode, setVerificationCode] = useState('');

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [selectedTime, setSelectedTime] = useState('');

  const handleClose = () => {
    setCurrentStep(MODAL_STEPS.FORM);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      agreeToTerms: false,
    });
    setVerificationCode('');
    setSelectedDate('');
    setSelectedTime('');
    onClose();
  };

  const handleNext = (nextStep: ModalStep) => {
    setCurrentStep(nextStep);
  };

  const handleBack = (prevStep: ModalStep) => {
    setCurrentStep(prevStep);
  };

  const renderStepIndicator = () => {
    const currentStepNumber = getStepNumber(currentStep);
    return (
      <div className={styles.stepContainer}>
        <h3 className={styles.stepTitle}>{MODAL_TEXTS.FORM.title}</h3>
        <div className={styles.stepIndicator}>
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`${styles.step} ${
                step <= currentStepNumber ? styles.active : ''
              } ${step === currentStepNumber ? styles.current : ''}`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const stepRenderers = {
    [MODAL_STEPS.FORM]: () => (
      <FormStep
        formData={formData}
        setFormData={setFormData}
        onNext={() => handleNext(MODAL_STEPS.VERIFICATION)}
      />
    ),
    [MODAL_STEPS.VERIFICATION]: () => (
      <VerificationStep
        code={verificationCode}
        setCode={setVerificationCode}
        onNext={() => handleNext(MODAL_STEPS.SCHEDULE)}
        onBack={() => handleBack(MODAL_STEPS.FORM)}
      />
    ),
    [MODAL_STEPS.SCHEDULE]: () => (
      <ScheduleStep
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        onNext={() => handleNext(MODAL_STEPS.SUCCESS)}
        onBack={() => handleBack(MODAL_STEPS.VERIFICATION)}
      />
    ),
    [MODAL_STEPS.SUCCESS]: () => <SuccessStep onClose={handleClose} />,
  };

  const renderCurrentStep = () => {
    const renderer = stepRenderers[currentStep];
    return renderer ? renderer() : null;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      className={styles.consultationModal}
      showCloseButton={true}
    >
      {renderStepIndicator()}
      {renderCurrentStep()}
    </Modal>
  );
};
