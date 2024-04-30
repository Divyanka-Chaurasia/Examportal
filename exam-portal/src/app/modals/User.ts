import { UserRole } from "./UserRole";

export class User {
  userId: number=0;
  userName: string='';
  userEmail: string='';
  userPassword: string='';
  userFirstName: string='';
  userLastName: string='';
  userMobile: string='';
  enabled: boolean = true;
  profileIMG: string = "default.png";
  userRoles: UserRole[]=[]
}