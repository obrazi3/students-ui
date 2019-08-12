import { IStudent, Gender, StudentStatus, StudyForm, EntityType } from '../../dto';

export const MOCK_STUDENTS: IStudent[] = [
	{
		id: '1',
		birthday: 926370000000,
		course: 3,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Isaac Newton' },
		entityType: EntityType.STUDENTS,
		fullName: 'Albert Einstein',
		gender: Gender.MALE,
		group: { name: '1+5 AI' },
		hasPrivileges: false,
		lastSessionGPA: 8.5,
		location: 'Kurchatova 8, 143B',
		scholarship: 120,
		specialty: 'Applied Informatics',
		status: StudentStatus.STUDY,
		studyForm: StudyForm.FREE,
		title: 'Albert Einstein',
		urlToAvatar:
			'https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTU2OTAxOTAz/albert-einstein-9285408-1-402.jpg',
	},
	{
		id: '2',
		birthday: 826370000000,
		course: 4,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Michael Faraday' },
		entityType: EntityType.STUDENTS,
		fullName: 'William Gilbert',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: true,
		lastSessionGPA: 6.4,
		location: 'No information',
		scholarship: 100,
		specialty: 'Computer Security',
		status: StudentStatus.ACADEMIC_VACATION,
		studyForm: StudyForm.PAID,
		title: 'William Gilbert',
		urlToAvatar:
			'https://static1.squarespace.com/static/5793e055e6f2e155ae8d79d9/t/58c6013d1e5b6c36786b0bb9/1489371458218/',
	},
	{
		id: '3',
		birthday: 626370000000,
		course: 2,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Heinrich Hertz',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: true,
		lastSessionGPA: 5.1,
		location: 'Kurchatova 6, 516A',
		scholarship: 0,
		specialty: 'Computer Security',
		status: StudentStatus.DEBT,
		studyForm: StudyForm.PAID,
		title: 'Heinrich Hertz',
		urlToAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/30/HEINRICH_HERTZ.JPG',
	},
	{
		id: '4',
		birthday: 726370000000,
		course: 3,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Emmy Noether',
		gender: Gender.FEMALE,
		group: { name: '5+7 CS' },
		hasPrivileges: true,
		lastSessionGPA: 9.5,
		location: 'No information',
		scholarship: 120,
		specialty: 'Computer Security',
		status: StudentStatus.STUDY,
		studyForm: StudyForm.FREE,
		title: 'Emmy Noether',
		urlToAvatar:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/' +
			'Noether_retusche_nachcoloriert.jpg/220px-Noether_retusche_nachcoloriert.jpg',
	},
	{
		id: '5',
		birthday: 726370000000,
		course: 3,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Nikola Tesla',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: false,
		lastSessionGPA: 9.2,
		location: 'No information',
		scholarship: 120,
		specialty: 'Computer Security',
		status: StudentStatus.STUDY,
		studyForm: StudyForm.FREE,
		title: 'Nikola Tesla',
		urlToAvatar: 'https://www.biographyonline.net/wp-content/uploads/2014/05/tesla2.jpg',
	},
	{
		id: '6',
		birthday: 756370000000,
		course: 4,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Galileo Galilei',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: false,
		lastSessionGPA: 8.0,
		location: 'No information',
		scholarship: 0,
		specialty: 'Computer Security',
		status: StudentStatus.STUDY,
		studyForm: StudyForm.PAID,
		title: 'Galileo Galilei',
		urlToAvatar: 'https://www.historyonthenet.com/wp-content/uploads/2014/07/galileogalilei.jpg',
	},
	{
		id: '7',
		birthday: 756570000000,
		course: 1,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Carl Friedrich Gauss',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: true,
		lastSessionGPA: 9.8,
		location: 'No information',
		scholarship: 120,
		specialty: 'Computer Security',
		status: StudentStatus.ACADEMIC_VACATION,
		studyForm: StudyForm.FREE,
		title: 'Carl Friedrich Gauss',
		urlToAvatar: 'https://cdn.britannica.com/s:300x300/27/190027-004-11966B78.jpg',
	},
	{
		id: '8',
		birthday: 746570000000,
		course: 4,
		faculty: {
			name: 'Radiophysics and Computer Technologies',
			displayName: 'RFaCT',
		},
		courseworkTeacher: { name: 'Max Planck' },
		entityType: EntityType.STUDENTS,
		fullName: 'Isaac Newton',
		gender: Gender.MALE,
		group: { name: '5+7 CS' },
		hasPrivileges: true,
		lastSessionGPA: 9.3,
		location: 'No information',
		scholarship: 120,
		specialty: 'Computer Security',
		status: StudentStatus.STUDY,
		studyForm: StudyForm.FREE,
		title: 'Isaac Newton',
		urlToAvatar:
			'https://upload.wikimedia.org/wikipedia/commons/' +
			'thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg',
	},
];