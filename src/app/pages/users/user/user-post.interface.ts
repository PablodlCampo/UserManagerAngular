export interface UserPost {
  email: string;
  passtoken: string;
  apps: App[];
}

export interface UserUpdate {
  email: string;
}

export interface App {
  id: number;
}
