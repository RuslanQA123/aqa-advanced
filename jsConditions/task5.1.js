const averageGrade = 2;
let grade = ''

if (averageGrade < 60) {
    grade = "Незадовільно";
} else if (averageGrade <= 70) {
    grade = "Задовільно";
} else if (averageGrade <= 80) {
    grade = "Добре";
} else if (averageGrade <= 90) {
    grade = "Дуже добре";
} else if (averageGrade <= 100) {
    grade = "Відмінно";
}

console.log(grade)