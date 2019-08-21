let femaleStudents =['yesha','kate','alisha','rimpi','yana'];
let maleStudents =['fred','ted','yen','param','rod'];

let students=maleStudents.concat(femaleStudents);

console.log(femaleStudents[2],femaleStudents[3],femaleStudents[1]);

let i=0
while (i<=4) {
    console.log(maleStudents[i]);
    i = i+1;
}
for (i=0;i<=6;i++) {
    console.log(students[i]);
}