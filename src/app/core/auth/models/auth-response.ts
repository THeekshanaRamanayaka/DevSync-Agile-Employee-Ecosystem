export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  department?: string;
}
