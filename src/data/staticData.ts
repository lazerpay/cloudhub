// Static data and mock data for the application

// Mock data for login form
export const mockLoginProps = {
  onSubmit: (email: string, password: string) => console.log('Login:', email, password),
  onForgotPassword: () => console.log('Forgot password clicked'),
  onSignUp: () => console.log('Sign up clicked'),
  onSocialLogin: (provider: string) => console.log('Social login:', provider),
  loading: false,
  error: null
};

// Mock authentication hooks
export const useAuthMock = () => {
  const login = async (email: string, password: string, rememberMe: boolean) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock validation
    if (email === 'user@example.com' && password === 'password123') {
      console.log('Login successful:', { email, rememberMe });
      return { success: true, user: { email, name: 'John Doe' } };
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const socialLogin = async (provider: 'google' | 'github') => {
    // Simulate social login delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`${provider} login successful`);
    return { success: true, user: { email: `user@${provider}.com`, name: 'Social User' } };
  };

  const forgotPassword = async (email: string) => {
    // Simulate forgot password delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Password reset email sent to:', email);
    return { success: true, message: 'Password reset email sent' };
  };

  return {
    login,
    socialLogin,
    forgotPassword,
    loading: false,
    error: null
  };
};

// Navigation menu items
export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Footer links
export const footerLinks = {
  product: [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Integrations', path: '/integrations' },
    { label: 'API', path: '/api' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press', path: '/press' },
  ],
  support: [
    { label: 'Help Center', path: '/help' },
    { label: 'Contact', path: '/contact' },
    { label: 'Status', path: '/status' },
    { label: 'Community', path: '/community' },
  ],
  legal: [
    { label: 'Privacy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
    { label: 'Security', path: '/security' },
    { label: 'Cookies', path: '/cookies' },
  ],
};

// Social media links
export const socialLinks = [
  { platform: 'Twitter', url: 'https://twitter.com/company', icon: 'twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/company', icon: 'linkedin' },
  { platform: 'GitHub', url: 'https://github.com/company', icon: 'github' },
  { platform: 'Discord', url: 'https://discord.gg/company', icon: 'discord' },
];

// Feature highlights for marketing pages
export const featureHighlights = [
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real-time.',
    icon: 'collaboration',
  },
  {
    title: 'Smart Notifications',
    description: 'Get notified about what matters most to you.',
    icon: 'notifications',
  },
  {
    title: 'Advanced Analytics',
    description: 'Track your progress with detailed insights and reports.',
    icon: 'analytics',
  },
  {
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security.',
    icon: 'security',
  },
];

// Common button text and labels
export const commonLabels = {
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    tryForFree: 'Try for Free',
    contactSales: 'Contact Sales',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    logout: 'Logout',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    submit: 'Submit',
    loading: 'Loading...',
  },
  forms: {
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    company: 'Company',
    phone: 'Phone Number',
    message: 'Message',
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    passwordMismatch: 'Passwords do not match',
  },
  status: {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    loading: 'Loading',
    completed: 'Completed',
    pending: 'Pending',
    failed: 'Failed',
  },
};