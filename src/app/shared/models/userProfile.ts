export interface UserProfile {
    name: string;
    userName: string;
    userEmail: string;
    password: string;

    userRole: string;
    age: number;
    gender: string;
    phone: number;
    token: string;
  };



export interface UpdateUser {
  name: string;
  userName: string;
  userEmail: string;
  password: string;
  age: number;
  gender: string;
  phone: number;
}  