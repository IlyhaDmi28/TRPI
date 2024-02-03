type ArrayCarsType = {
  cars: Array<CarsType>
}

type CarsType = {
  manufacturer: string
  model: string
}

type ArrayType = Array<{
  id: number
  name: string
  group: number
}>

const array: ArrayType = [
  {id: 1, name: 'Vasya', group: 10}, 
  {id: 2, name: 'Ivan', group: 11},
  {id: 3, name: 'Masha', group: 12},
  {id: 4, name: 'Petya', group: 10},
  {id: 5, name: 'Kira', group: 11},
]

let car: CarsType = { //объект создан!
    manufacturer: "manufacturer",
    model: 'model',
}

const car1: CarsType = { //объект создан!
    manufacturer: "manufacturer",
    model: 'model',
}

const car2: CarsType = { //объект создан!
    manufacturer: "manufacturer",
    model: 'model',
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];


///////////////////////////////////////////////////////////////////////////////////////////////////////////

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = boolean;

type MarkType = {
  subject: string;
  mark: MarkFilterType;
  done: DoneType;
};

type StudentType = {
  id: number;
  name: string;
  group: GroupFilterType;
  marks: Array<MarkType>;
};

type GroupType = {
  students: Array<StudentType>;
  studentsFilter: (group: GroupFilterType) => Array<StudentType>;
  marksFilter: (mark: MarkFilterType) => Array<StudentType>;
  deleteStudent: (id: number) => void;
  mark: MarkFilterType;
  group: GroupFilterType;
};

const students: Array<StudentType> = [
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

const group: GroupType = {
  students: students,
  studentsFilter: function (group: GroupFilterType) {
    return this.students.filter((student) => student.group === group);
  },
  marksFilter: function (mark: MarkFilterType) {
    return this.students.filter((student) => {
      return student.marks.every((markObj) => markObj.mark >= mark);
    });
  },
  deleteStudent: function (id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  },
  mark: 7,
  group: 5,
};

let StudInfo: string = "";
let filterSt: Array<StudentType> = group.studentsFilter(3);
for(let st of filterSt) {
  StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
  for(let mark of st.marks) {
    StudInfo += mark.mark + ", ";
  }
  console.log(StudInfo);
  StudInfo = "";
}

console.log("");

filterSt = group.marksFilter(6);
for(let st of filterSt) {
  StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
  for(let mark of st.marks) {
    StudInfo += mark.mark + ", ";
  }
  console.log(StudInfo);
  StudInfo = "";
}

console.log("");

group.deleteStudent(3);
filterSt = group.students
for(let st of filterSt) {
  StudInfo = "Имя: " + st.name + ", Группа: " + st.group + ", ID: " + st.id + ", Оценки: ";
  for(let mark of st.marks) {
    StudInfo += mark.mark + ", ";
  }
  console.log(StudInfo);
  StudInfo = "";
}