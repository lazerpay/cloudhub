export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

/**
 * Validates email format using regex
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates the entire login form and returns errors
 */
export const validateLoginForm = (formData: LoginFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

/**
 * Checks if the form is valid (no errors and required fields filled)
 */
export const isFormValid = (formData: LoginFormData, errors: FormErrors): boolean => {
  return formData.email && formData.password && Object.keys(errors).length === 0;
};

/**
 * Creates a handler for form input changes
 */
export const createInputChangeHandler = (
  setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>,
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) => {
  return (field: keyof LoginFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'rememberMe' ? event.target.checked : event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field error when user starts typing
    setFormErrors(prev => ({
      ...prev,
      [field]: undefined
    }));
  };
};

/**
 * Creates a submit handler for the login form
 */
export const createSubmitHandler = (
  formData: LoginFormData,
  onLogin?: (email: string, password: string, rememberMe: boolean) => Promise<void>,
  navigate?: (path: string) => void
) => {
  return async (event: React.FormEvent) => {
    event.preventDefault();
    
    const errors = validateLoginForm(formData);
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    try {
      if (onLogin) {
        await onLogin(formData.email, formData.password, formData.rememberMe);
      } else {
        // Mock login success
        console.log('Login successful:', formData);
        if (navigate) {
          navigate('/');
        }
      }
      return { success: true };
    } catch (err) {
      console.error('Login failed:', err);
      return { success: false, error: err };
    }
  };
};

/**
 * Creates a social login handler
 */
export const createSocialLoginHandler = (
  onSocialLogin?: (provider: 'google' | 'github') => Promise<void>,
  navigate?: (path: string) => void
) => {
  return async (provider: 'google' | 'github') => {
    try {
      if (onSocialLogin) {
        await onSocialLogin(provider);
      } else {
        // Mock social login
        console.log(`${provider} login successful`);
        if (navigate) {
          navigate('/');
        }
      }
    } catch (err) {
      console.error(`${provider} login failed:`, err);
    }
  };
};