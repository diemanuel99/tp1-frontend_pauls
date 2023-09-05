export class Category {
	id: number;
	description: string;

	constructor(id: number, description: string) {
		this.id = id;
		this.description = description;
	}
}

export class Person {
	id: number;
	name: string;
	lastName: string;
	phone: string;
	email: string;
	cedula: string;
	flag_is_doctor: boolean;

	constructor(id: number, name: string,
		lastName: string, phone: string, email: string, cedula: string, flag_is_doctor: boolean) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.cedula = cedula;
		this.flag_is_doctor = flag_is_doctor;
	}
}