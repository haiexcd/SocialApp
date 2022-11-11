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
    img: string;
  };


  export interface UserProfileId {
    name: string;
    userName: string;
    userEmail: string;
    password: string;

    userRole: string;
    age: number;
    gender: string;
    phone: number;
    token: string;
    _id: string;
    img: string;
  };



export interface UpdateUser {
  name: string;
  // userName: string;
  // userEmail: string;
  password: string;
  age: number;
  gender: string;
  phone: number;
  img: string;
}  