console.log("Hello World");
var totalMark = 550;
var obtaindMarks = 370;
//percentage
var percentage = (obtaindMarks / totalMark * 100);
//Grade
if (percentage >= 90) {
    console.log("A+");
}
else if (percentage >= 80 && percentage < 90) {
    console.log("A");
}
else if (percentage >= 70 && percentage < 80) {
    console.log("B");
}
else if (percentage >= 60 && percentage < 70)
    console.log("C");
{
    console.log("Fail");
}
