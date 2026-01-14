export interface JobApplication {
  id: number;
  userId: number;
  company: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  email: string;
}
