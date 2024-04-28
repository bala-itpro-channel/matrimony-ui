export interface ProfileType {
    name: string,
    code: string,
}

export interface Profile {
    profileId: number,
	onBehalfOf: string,
	name: string,
	education: string,
	age: number,
    dob: string,
    
    marritalStatus: string,
    height: string,
    dosham: string,

	fatherName: string,
	motherName: string,
	job: string,
	income: number,

	houseName: string,
	branch: string,
	temple: string,
	femaleGod: string,
	star: string,
	zodiac: string,
	nativePlace: string,
	currentPlace: string,
	mobile: string,
	email: string,
	details: string,
}