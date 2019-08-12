import { IFaculty } from './IFaculty';
import { EntityType } from './entityType';

export interface IStudent {
	birthday: number;
	course: number;
	courseworkTeacher: any; // this type must be replaced
	entityType: EntityType;
	faculty: IFaculty;
	fullName: string;
	gender: Gender;
	group: any; // this type must be replaced
	hasPrivileges: boolean;
	id: string;
	lastSessionGPA: number;
	location: string;
	scholarship: number;
	specialty: string;
	status: StudentStatus;
	studyForm: StudyForm;
	title: string;
	urlToAvatar: string;
}

export enum Gender {
	MALE = 'male',
	FEMALE = 'female',
}

export enum StudentStatus {
	STUDY = 'study',
	ACADEMIC_VACATION = 'academic vacation',
	DEBT = 'debt',
}

export enum StudentStatusClasses {
	STUDY = 'ic-checkmark good',
	ACADEMIC_VACATION = 'ic-pause normal',
	DEBT = 'ic-notification bad',
}

export enum StudyForm {
	PAID = 'paid',
	FREE = 'free',
}
