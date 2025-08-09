export interface AuthResponse {
  data: AuthData;
  success: boolean;
}

export interface AuthData {
  access_token: string;
  id: string;
  role: string;
}
