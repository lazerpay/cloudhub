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