//function to calculate grade.

function calculateGrade() {
    let marks = ("marks(0-100")
    //condition to evaluate grade.

    if (isNaN(marks)) {
        return "invalid input";
    }
    else {
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        } return grade
    }
}
// callfunction to display grade.
console.log(calculateGrade())