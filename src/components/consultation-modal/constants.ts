export const MODAL_STEPS = {
  FORM: 'form',
  VERIFICATION: 'verification',
  SCHEDULE: 'schedule',
  SUCCESS: 'success',
} as const;

export type ModalStep = (typeof MODAL_STEPS)[keyof typeof MODAL_STEPS];

export const TIME_SLOTS = [
  { id: 'morning', label: 'Morning 9 AM - 12 PM' },
  { id: 'early-afternoon', label: 'Early Afternoon 12 PM - 3 PM' },
  { id: 'late-afternoon', label: 'Late Afternoon 3 PM - 6 PM' },
  { id: 'evening', label: 'Evening 6 PM - 9 PM' },
] as const;

const STEP_NUMBERS = {
  [MODAL_STEPS.FORM]: 1,
  [MODAL_STEPS.VERIFICATION]: 2,
  [MODAL_STEPS.SCHEDULE]: 3,
  [MODAL_STEPS.SUCCESS]: 4,
} as const;

export const getStepNumber = (step: ModalStep): number => {
  return STEP_NUMBERS[step] ?? 1;
};
export const MODAL_TEXTS = {
  START: {
    title: 'Any questions left?',
    description: 'Leave a request for a consultation and a specialist will contact you.',
    button: 'Request expert advise',
  },
  FORM: {
    title: 'Request expert advice',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    phone: 'Phone number',
    agreement: 'By clicking continue, I agree to the Privacy Policy and User Agreement',
    button: 'Continue',
  },
  VERIFICATION: {
    title: 'Request expert advice',
    description: "We've sent a verification code to your phone number. Please enter it below.",
    label: 'Enter code',
    button: 'Verify Code',
    backButton: 'Back',
    resendLink: "Didn't receive an SMS? Resend SMS Code",
  },
  SCHEDULE: {
    title: 'Request expert advice',
    description: 'Please select your preferred time for a call with our financial advisor.',
    dateLabel: 'Preferred Day for Call',
    timeLabel: 'Preferred Time for Call',
    button: 'Schedule Call',
    backButton: 'Back',
  },
  SUCCESS: {
    title: 'Request expert advice',
    description:
      'Thank You! Our financial advisor will contact you during your preferred time to discuss your personalized trust strategy.',
    expectationsTitle: 'What to expect:',
    expectations: [
      'Detailed discussion',
      'Personalized recommendations',
      'Clear explanation',
      'Opportunity to ask questions',
    ],
    button: 'Return to the site',
  },
} as const;
