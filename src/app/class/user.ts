export class User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  role: string;

  /**
   *
   */
  constructor(data: any = {}) {
    this.userId = data.userId;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.address = data.address;
    this.role = data.role;
  }
}
