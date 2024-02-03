"use strict";
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let car = {
    manufacturer: "manufacturer",
    model: 'model',
};
const car1 = {
    manufacturer: "manufacturer",
    model: 'model',
};
const car2 = {
    manufacturer: "manufacturer",
    model: 'model',
};
const arrayCars = [{
        cars: [car1, car2]
    }];
const students = [
    {
        id: 1,
        name: "Дима",
        group: 6,
        marks: [
            { subject: "Программирование сетевых приложений", mark: 5, done: true },
            { subject: "Математическое программирование", mark: 3, done: false },
            { subject: "ООП", mark: 8, done: true },
        ],
    },
    {
        id: 2,
        name: "Саша",
        group: 3,
        marks: [
            { subject: "Базы данных", mark: 9, done: true },
            { subject: "Технология разработки пользовательтских интерфейсо", mark: 6, done: true },
            { subject: "Математическое программирование", mark: 4, done: false },
        ],
    },
    {
        id: 3,
        name: "Аедрей",
        group: 6,
        marks: [
            { subject: "ООП", mark: 10, done: true },
            { subject: "Программирование сетевых приложений", mark: 9, done: true },
            { subject: "Технология программирования в интерне", mark: 7, done: true },
        ],
    },
];
const group = {
    students: students,
    studentsFilter: function (group) {
        return this.students.filter((student) => student.group === group);
    },
    marksFilter: function (mark) {
        return this.students.filter((student) => {
            return student.marks.every((markObj) => markObj.mark >= mark);
        });
    },
    deleteStudent: function (id) {
        const index = this.students.findIndex((student) => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    },
    mark: 7,
    group: 5,
};
let StudInfo = "";
let filterSt = group.studentsFilter(3);
for (let st of filterSt) {
    StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
    for (let mark of st.marks) {
        StudInfo += mark.mark + ", ";
    }
    console.log(StudInfo);
    StudInfo = "";
}
console.log("");
filterSt = group.marksFilter(6);
for (let st of filterSt) {
    StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
    for (let mark of st.marks) {
        StudInfo += mark.mark + ", ";
    }
    console.log(StudInfo);
    StudInfo = "";
}
console.log("");
group.deleteStudent(3);
filterSt = group.students;
for (let st of filterSt) {
    StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
    for (let mark of st.marks) {
        StudInfo += mark.mark + ", ";
    }
    console.log(StudInfo);
    StudInfo = "";
}
