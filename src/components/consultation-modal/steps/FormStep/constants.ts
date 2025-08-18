export interface FormField {
  name: keyof Omit<FormData, 'agreeToTerms'>;
  type: string;
  label: string;
  placeholder: string;
  validation: object;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
}

export const FORM_TEXTS = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email address',
  phone: 'Phone number',
  agreement: 'By clicking continue, I agree to the Privacy Policy and User Agreement',
  button: 'Continue',
} as const;

export const FORM_FIELDS: FormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: FORM_TEXTS.firstName,
    placeholder: 'Liam',
    validation: {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'Minimum 2 characters',
      },
    },
  },
  {
    name: 'lastName',
    type: 'text',
    label: FORM_TEXTS.lastName,
    placeholder: 'Smith',
    validation: {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Minimum 2 characters',
      },
    },
  },
  {
    name: 'email',
    type: 'email',
    label: FORM_TEXTS.email,
    placeholder: 'smith@example.com',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    type: 'tel',
    label: FORM_TEXTS.phone,
    placeholder: '+1 (555) 123-4567',
    validation: {
      required: 'Phone number is required',
      minLength: {
        value: 10,
        message: 'Minimum 10 digits',
      },
    },
  },
];
