function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    return this.marks ? this.marks.reduce((sum, mark) => sum + mark / this.marks.length, 0) : 0;
}

Student.prototype.exclude = function (reason) {
if (this.marks.length === 0){
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
}
new Student("Василиса", "женский", 19);
new Student("Алексей", "мужской", 21);