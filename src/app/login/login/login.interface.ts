export interface LoginResponse {
  code: string;
  status: string;
  data: LoginData;
}

export interface LoginData {
  jwt: string;
  refresh_jwt: string;
}
