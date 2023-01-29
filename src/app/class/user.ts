export class User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    role: string;
    sectionId: string;
    section: Section;

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
        this.sectionId = data.sectionId;
        this.section = new Section(data.section)
    }
}

export class Section {
    id: number
    userId: number
    sectionName: number
    advisor: number
    noOfStudents: number

    /**
     *
     */
    constructor(data: any = {}) {
        this.id = data.id || 0;
        this.userId = data.userId || 0;
        this.sectionName = data.sectionName || '';
        this.advisor = data.advisor || '';
        this.noOfStudents = data.noOfStudents || 0;

    }
}
