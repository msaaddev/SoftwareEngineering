/**
 *
 *
 *  @author Muhammad Saad <https://github.com/msaaddev>
 *	Registration No: 2018-CS-7
 *
 * Do npm install to download node packages
 * Run the program with node index.js
 */

'use-strict';

const io = require('console-read-write');
const cliTable = require('cli-table');
const colors = require('colors');
const chalk = require('chalk');
const clearConsole = require('clear-any-console');

class CourseResult {
    constructor() {
        this.courseNameSpace = {
            courseID: ``,
            courseTitle: ``,
            creditHrs: 0,
            marks: 0,
            semester: 0,
        };
    }

    /**
     *
     *	checks the course id format
     *  @param {string} - course id
     *  @returns {bool}
     */
    validateCourseID(id) {
        if (id.length < 2 || id.length > 8) {
            return false;
        }

        for (let i = 0; i < 2; i++) {
            if (
                id[i] === '0' ||
                id[i] === '1' ||
                id[i] === '2' ||
                id[i] === '3' ||
                id[i] === '4' ||
                id[i] === '5' ||
                id[i] === '6' ||
                id[i] === '7' ||
                id[i] === '8' ||
                id[i] === '9'
            ) {
                return false;
            }
        }

        for (let i = 3; i < 5; i++) {
            if (
                id[i] !== '0' &&
                id[i] !== '1' &&
                id[i] !== '2' &&
                id[i] !== '3' &&
                id[i] !== '4' &&
                id[i] !== '5' &&
                id[i] !== '6' &&
                id[i] !== '7' &&
                id[i] !== '8' &&
                id[i] !== '9'
            ) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     *	checks the course title
     *  @param {string} - course title
     *  @returns {bool}
     */
    validateCourseTitle(title) {
        if (title.length < 10 || title.length > 35) {
            return false;
        }

        for (let i = 0; i < title.length; i++) {
            if (
                title[i] === '0' ||
                title[i] === '1' ||
                title[i] === '2' ||
                title[i] === '3' ||
                title[i] === '4' ||
                title[i] === '5' ||
                title[i] === '6' ||
                title[i] === '7' ||
                title[i] === '8' ||
                title[i] === '9' ||
                title[i] === '!' ||
                title[i] === '@' ||
                title[i] === '#' ||
                title[i] === '$' ||
                title[i] === '%' ||
                title[i] === '^' ||
                title[i] === '&' ||
                title[i] === '*'
            ) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     *	checks the credit hours
     *  @param {int} - course credit hours
     *  @returns {bool}
     */
    validateCreditHrs(hrs) {
        if (hrs < 1 || hrs > 3) {
            return false;
        }
        return true;
    }

    /**
     *
     *	checks the credit marks
     *  @param {int} - course marks
     *  @returns {bool}
     */
    validateMarks(marks) {
        if (marks < 0 || marks > 100) {
            return false;
        }
        return true;
    }

    /**
     *
     *	checks the semester
     *  @param {int} - course semester
     *  @returns {bool}
     */
    validateSem(sem) {
        if (sem < 1 || sem > 8) {
            return false;
        }
        return true;
    }

    /**
     *
     *	takes course id from the user
     */
    async setCourseID() {
        console.log(`ENTER YOUR COURSE ID: `);
        this.courseNameSpace.courseID = await io.read();

        while (!this.validateCourseID(this.courseNameSpace.courseID)) {
            console.log(`INVALID ID: PLEASE ENTER COURSE ID AGAIN: `);
            this.courseNameSpace.courseID = await io.read();
        }
    }

    /**
     *
     * takes course title from the user
     */
    async setCourseTitle() {
        console.log(`ENTER YOUR COURSE TITLE: `);
        this.courseNameSpace.courseTitle = await io.read();

        while (!this.validateCourseTitle(this.courseNameSpace.courseTitle)) {
            console.log(`INVALID TITLE: PLEASE ENTER COURSE TITLE AGAIN: `);
            this.courseNameSpace.courseTitle = await io.read();
        }
    }

    /**
     *
     *	takes course credit hrs from the user
     */
    async setCreditHrs() {
        console.log(`ENTER YOUR COURSE CREDIT HRS: `);
        this.courseNameSpace.creditHrs = await io.read();

        while (!this.validateCreditHrs(this.courseNameSpace.creditHrs)) {
            console.log(`INVALID CREDIT HRS: PLEASE ENTER COURSE CREDIT HRS AGAIN: `);
            this.courseNameSpace.creditHrs = await io.read();
        }
    }

    /**
     *
     *	takes the course marks from the user
     */
    async setMarks() {
        console.log(`ENTER YOUR COURSE MARKS: `);
        this.courseNameSpace.marks = await io.read();

        while (!this.validateMarks(this.courseNameSpace.marks)) {
            console.log(`INVALID MARKS: PLEASE ENTER COURSE MARKS AGAIN: `);
            this.courseNameSpace.marks = await io.read();
        }
    }

    /**
     *
     *	takes the course semester from the user
     */
    async setSemester() {
        console.log(`ENTER THE COURSE SEMESTER: `);
        this.courseNameSpace.semester = await io.read();

        while (!this.validateSem(this.courseNameSpace.semester)) {
            console.log(`INVALID SEMESTER: PLEASE ENTER THE COURSE SEMESTER AGAIN: `);
            this.courseNameSpace.semester = await io.read();
        }
    }

    /**
     *
     *	takes all the required input
     */
    async getInput() {
        await this.setCourseID();
        await this.setCourseTitle();
        await this.setCreditHrs();
        await this.setMarks();
        await this.setSemester();
    }

    /**
     *
     *  @returns {int} - course ID of the course
     */
    getCourseID() {
        return this.courseNameSpace.courseID;
    }

    /**
     *
     * @returns {string} - course title of the course
     */
    getCourseTitle() {
        return this.courseNameSpace.courseTitle;
    }

    /**
     *
     *  @returns {int} - credit hours of the course
     */
    getCreditHrs() {
        return this.courseNameSpace.creditHrs;
    }

    /**
     *
     *  @returns {int} - course marks
     */
    getMarks() {
        return this.courseNameSpace.marks;
    }

    /**
     *
     *  @returns {int} - semester of course
     */
    getSemester() {
        return this.courseNameSpace.semester;
    }

    /**
     *
     *	analyzes the student grade in a subject according to marks
     *	@returns {string} - Grade in subject
     */
    getGrade() {
        const { marks } = this.courseNameSpace;

        if (marks < 40) {
            return `F`;
        }
        if (marks >= 40 && marks < 50) {
            return `D`;
        }
        if (marks >= 50 && marks < 55) {
            return `C`;
        }
        if (marks >= 55 && marks < 60) {
            return `C+`;
        }
        if (marks >= 60 && marks < 65) {
            return `B-`;
        }
        if (marks >= 65 && marks < 70) {
            return `B+`;
        }
        if (marks >= 70 && marks < 80) {
            return `A-`;
        }
        if (marks >= 80) {
            return `A`;
        }
    }

    /**
     *
     *	analyzes the student grade points in a subject according to marks
     *	@return {int} - GPA in Subject
     */
    getGradePoints() {
        const { marks } = this.courseNameSpace;

        if (marks < 40) {
            return 0;
        }
        if (marks >= 40 && marks < 50) {
            return 1.0;
        }
        if (marks >= 50 && marks < 55) {
            return 2.3;
        }
        if (marks >= 55 && marks < 60) {
            return 2.7;
        }
        if (marks >= 60 && marks < 65) {
            return 3.0;
        }
        if (marks >= 65 && marks < 70) {
            return 3.3;
        }
        if (marks >= 70 && marks < 80) {
            return 3.7;
        }
        if (marks >= 80) {
            return 4.0;
        }
    }
}

class Student {
    constructor() {
        this.studentNameSpace = {
            name: ``,
            regNum: ``,
            degree: ``,
            courses: [],
        };
        console.log(`\n************************** CONSTRUCTOR CALLED **************************`);
    }

    /**
     *
     *	checks that student name is only comprised of alphabet
     *  @param {string} - student name
     *  @returns {bool}
     */
    validateName(name) {
        for (let i = 0; i < name.length; i++) {
            if (
                name[i] === '0' ||
                name[i] === '1' ||
                name[i] === '2' ||
                name[i] === '3' ||
                name[i] === '4' ||
                name[i] === '5' ||
                name[i] === '6' ||
                name[i] === '7' ||
                name[i] === '8' ||
                name[i] === '9' ||
                name[i] === '!' ||
                name[i] === '@' ||
                name[i] === '#' ||
                name[i] === '$' ||
                name[i] === '%' ||
                name[i] === '^' ||
                name[i] === '&' ||
                name[i] === '*'
            ) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     *	checks that student registration format
     *  @param {string} - student registration no#
     *  @returns {bool}
     */
    validateRegNum(regNum) {
        for (let i = 0; i < 4; i++) {
            if (
                regNum[i] !== '0' &&
                regNum[i] !== '1' &&
                regNum[i] !== '2' &&
                regNum[i] !== '3' &&
                regNum[i] !== '4' &&
                regNum[i] !== '5' &&
                regNum[i] !== '6' &&
                regNum[i] !== '7' &&
                regNum[i] !== '8' &&
                regNum[i] !== '9'
            ) {
                return false;
            }
        }

        if (regNum[4] !== '-') {
            return false;
        }

        for (let i = 5; i < 7; i++) {
            if (
                regNum[i] === '0' ||
                regNum[i] === '1' ||
                regNum[i] === '2' ||
                regNum[i] === '3' ||
                regNum[i] === '4' ||
                regNum[i] === '5' ||
                regNum[i] === '6' ||
                regNum[i] === '7' ||
                regNum[i] === '8' ||
                regNum[i] === '9' ||
                regNum[i] === '!' ||
                regNum[i] === '@' ||
                regNum[i] === '#' ||
                regNum[i] === '$' ||
                regNum[i] === '%' ||
                regNum[i] === '^' ||
                regNum[i] === '&' ||
                regNum[i] === '*'
            ) {
                return false;
            }
        }

        if (regNum[7] !== '-') {
            return false;
        }

        for (let i = 8; i < regNum.length; i++) {
            if (
                regNum[i] !== '0' &&
                regNum[i] !== '1' &&
                regNum[i] !== '2' &&
                regNum[i] !== '3' &&
                regNum[i] !== '4' &&
                regNum[i] !== '5' &&
                regNum[i] !== '6' &&
                regNum[i] !== '7' &&
                regNum[i] !== '8' &&
                regNum[i] !== '9'
            ) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     *	checks that degree is either MS, BS, BE
     *  @param {string} - degree
     *  @returns {bool}
     */
    validateDegree(degree) {
        if (degree !== 'MS' && degree !== 'BS' && degree !== 'BE') {
            return false;
        }
        return true;
    }

    /**
     *
     *	takes student name from the student
     */
    async setName() {
        console.log(`\nENTER STUDENT NAME: `);
        this.studentNameSpace.name = await io.read();

        while (!this.validateName(this.studentNameSpace.name)) {
            console.log(`INVALID NAME: PLEASE ENTER STUDENT NAME AGAIN: `);
            this.studentNameSpace.name = await io.read();
        }
    }

    /**
     *
     *	takes student registration number from the student
     */
    async setRegNum() {
        console.log(`ENTER STUDENT REG NO#: `);
        this.studentNameSpace.regNum = await io.read();

        while (!this.validateRegNum(this.studentNameSpace.regNum)) {
            console.log(`INVALID REG NO#: PLEASE ENTER STUDENT REG NO# AGAIN: `);
            this.studentNameSpace.regNum = await io.read();
        }
    }

    /**
     *
     *	takes student degree from the student
     */
    async setDegree() {
        console.log(`ENTER STUDENT DEGREE: `);
        this.studentNameSpace.degree = await io.read();

        while (!this.validateDegree(this.studentNameSpace.degree)) {
            console.log(`INVALID DEGREE: PLEASE ENTER STUDENT DEGREE AGAIN: `);
            this.studentNameSpace.degree = await io.read();
        }
    }

    /**
     *
     *	create a new course for student
     */
    async setCourse() {
        const temp = new CourseResult();
        await temp.getInput();
        this.studentNameSpace.courses.push(temp);
    }

    /**
     *
     *	takes all the required input
     */
    async getInput() {
        await this.setName();
        await this.setRegNum();
        await this.setDegree();
        await this.setCourse();
    }

    /**
     *
     *	@returns {string} - student name
     */
    getName() {
        return this.studentNameSpace.name;
    }

    /**
     *
     *	@returns {string} - student reg no#
     */
    getRegNum() {
        return this.studentNameSpace.regNum;
    }

    /**
     *
     *	@returns {string} - student degree
     */
    getDegree() {
        return this.studentNameSpace.degree;
    }

    /**
     *
     *	calculates all the semesters from the courses
     *  @returns {sem} - array of semesters
     */
    uniqueSem() {
        const { courses } = this.studentNameSpace;
        const sem = [];
        courses.forEach(course => {
            const courseSem = course.getSemester();
            if (sem.indexOf(courseSem) < 0) {
                sem.push(courseSem);
            }
        });
        return sem;
    }

    /**
     *
     *  calculates the total number of semester student has studied
     *  @returns {int} - total semesters
     */
    getSemesters() {
        const sem = this.uniqueSem();
        return sem.length;
    }

    /**
     *
     *	calculates courses of a particular semester
     *  @returns {coursesOfSem} - array of courses
     */
    coursesOfSem(sem) {
        const { courses } = this.studentNameSpace;
        const coursesOfSem = [];

        courses.forEach(course => {
            if (course.getSemester() === sem) {
                coursesOfSem.push(course);
            }
        });

        return coursesOfSem;
    }

    /**
     *
     * calculate student semester GPA
     * @param {int} - semester which the user wants to calculate GPA of
     * @param {double} - GPA of semester
     */
    getSemesterGPA(sem) {
        const semCourses = this.coursesOfSem(sem);
        const creditHrsOfCourse = [];
        const gpaOfCourse = [];
        let sumOfGPAAndCreditHrs = 0;
        let totalCreditHrs = 0;
        let GPA = 0;

        semCourses.forEach(course => {
            creditHrsOfCourse.push(parseInt(course.getCreditHrs()));
            gpaOfCourse.push(course.getGradePoints());
        });

        for (let i = 0; i < semCourses.length; i++) {
            const product = creditHrsOfCourse[i] * gpaOfCourse[i];
            totalCreditHrs += creditHrsOfCourse[i];
            sumOfGPAAndCreditHrs += product;
        }

        GPA = sumOfGPAAndCreditHrs / totalCreditHrs;

        return GPA;
    }

    /**
     *
     * @return {double} - CGPA of student
     */
    getCGPA() {
        let sumOfGPA = 0;
        let CGPA = 0;
        const sem = this.uniqueSem();

        for (let i = 0; i < sem.length; i++) {
            const gpaOfSemester = this.getSemesterGPA(sem[i]);
            sumOfGPA += gpaOfSemester;
        }

        CGPA = sumOfGPA / sem.length;
        return CGPA;
    }

    /**
     *
     *  calculate total credit hours of all courses
     *  @returns {int} - total credit hours
     */
    getTotalCreditHours() {
        const { courses } = this.studentNameSpace;
        let totalCreditHrs = 0;

        courses.forEach(course => {
            totalCreditHrs += course.getCreditHrs();
        });

        return totalCreditHrs;
    }

    /**
     *
     * calculate the total credits hours of a semester
     * @param {int} - semester
     * @return {int} - semester credit hours
     */
    getSemesterCreditHours(sem) {
        const semCourses = this.coursesOfSem(sem);
        let totalCreditHrs = 0;

        semCourses.forEach(course => (totalCreditHrs += course.getCreditHrs()));

        return totalCreditHrs;
    }

    /**
     *
     * extract session from the registration number
     * @returns {string} - student session
     */
    getSession() {
        let session = '';

        for (let i = 0; i < 4; i++) {
            session += this.studentNameSpace.regNum[i];
        }

        return session;
    }

    /**
     *
     * extract discipline from the registration number
     * @returns {string} - student discipline
     */
    getDiscipline() {
        let discipline = this.studentNameSpace.regNum[5] + this.studentNameSpace.regNum[6];
        return discipline;
    }

    /**
     *
     * logs everything on the screen
     */
    toString() {
        const sem = this.uniqueSem();
        sem.sort();
        const studentInfo = new cliTable({
            chars: {
                top: '',
                'top-mid': '',
                'top-left': '',
                'top-right': '',
                bottom: '',
                'bottom-mid': '',
                'bottom-left': '',
                'bottom-right': '',
                left: '',
                'left-mid': '',
                mid: '',
                'mid-mid': '',
                right: '',
                'right-mid': '',
                middle: ' ',
            },
            style: { 'padding-left': 0, 'padding-right': 0 },
        });

        studentInfo.push([
            `${chalk.green.bold.inverse(` Name: `)} ${this.studentNameSpace.name}`,
            `${chalk.green.bold.inverse(` Degree `)} ${this.getDegree()} ${this.getDiscipline()}`,
        ]);
        studentInfo.push(['']);
        studentInfo.push([
            `${chalk.green.bold.inverse(` Reg No#: `)} ${this.studentNameSpace.regNum}`,
        ]);
        studentInfo.push(['']);
        studentInfo.push([`${chalk.green.bold.inverse(` Session: `)} ${this.getSession()}`]);

        console.log('\n');
        console.log(studentInfo.toString());

        for (let i = 0; i < sem.length; i++) {
            const semCourses = this.coursesOfSem(sem[i]);

            const table = new cliTable({
                head: [
                    'CourseID'.yellow,
                    'Name                                 '.yellow,
                    'CH'.yellow,
                    'Marks'.yellow,
                    'Grade'.yellow,
                ],
            });
            console.log('\n');
            console.log(chalk.keyword('orange').bold.inverse(` Semester: `), sem[i]);
            for (let j = 0; j < semCourses.length; j++) {
                table.push([
                    semCourses[j].getCourseID(),
                    semCourses[j].getCourseTitle(),
                    semCourses[j].getCreditHrs(),
                    semCourses[j].getMarks(),
                    semCourses[j].getGrade(),
                ]);
            }
            console.log(table.toString());
            console.log(
                `                                                     SGPA: ${this.getSemesterGPA(
                    sem[i]
                )}`
            );
        }
        console.log(`                                                     CGPA: ${this.getCGPA()}`);
    }
}

class Section {
    constructor() {
        this.sectionNameSpace = {
            studentList: [],
            section: [],
        };
    }

    /**
     *
     *  create student
     */
    setStudent() {
        const temp = new Student();
        temp.getInput();
        this.sectionNameSpace.studentList.push(temp);
    }

    /**
     *
     *  add student to the student list
     */
    addStudent(student) {
        this.sectionNameSpace.studentList.push(student);
    }

    /**
     *
     *  @returns {array} - list of suspended students
     */
    listOfSuspendedStudent() {
        const { studentList } = this.sectionNameSpace.studentList;
        const suspendedStudents = [];

        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].getCGPA() < 2.0) {
                suspendedStudents.push(studentList[i]);
            }
        }

        return suspendedStudents;
    }
}

// Used IIFE to avoid polluting global namespace of Node.js
(async () => {
    const obj = new Student();
    await obj.setName();
    await obj.setRegNum();
    await obj.setDegree();

    for (let i = 0; i < 5; i++) {
        console.log('\n');
        await obj.setCourse();
    }

    clearConsole();
    obj.toString();
})();
