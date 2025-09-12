export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  gateways: null | unknown;
  aws_credentials: null | unknown;
};

export type GetUserProfileResponse = {
  success: boolean;
  data: User;
};
