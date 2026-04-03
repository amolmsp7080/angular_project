export class Employee {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  sal!: number;

  constructor(data: any) {
    Object.assign(this, data);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAnnualSal() {
    return this.sal * 12;
  }
}
