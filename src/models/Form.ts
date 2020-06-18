export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  day: string;
  month: string;
  year: string;
  gender: string | number;
  birthDate?: string;
}

export interface dirtySignupForm {
  firstName: Boolean;
  lastName: Boolean;
  email: Boolean;
  password: Boolean;
  confirmPassword: Boolean;
  day: Boolean;
  month: Boolean;
  year: Boolean;
  gender: Boolean;
}
export interface dirtyLoginForm {
  email: Boolean;
  password: Boolean;
}