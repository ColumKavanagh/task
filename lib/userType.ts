//Creating the 'User' type so that typescript can type-check as I am pulling in users from the API etc
export default interface User {
  id: number;
  avatar?: string; //This means avatar is an OPTIONAL attribute
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: { name: string; department: string };
  skills: string[];
}
