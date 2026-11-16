
// ============================================
// PROJECT: STUDENT MANAGEMENT SYSTEM
// ============================================

// 1. Initial student data
let students = [
    {
        id: 101,
        name: "John",
        age: 20,
        grade: 85
    },
    {
        id: 102,
        name: "David",
        age: 21,
        grade: 90
    },
    {
        id: 103,
        name: "Sarah",
        age: 19,
        grade: 78
    }
];

// ============================================
// 2. ADD STUDENT
// ============================================

function addStudent(id, name, age, grade) {
    try {
        // Check for duplicate ID
        let existingStudent = students.find(student => student.id === id);

        if (existingStudent) {
            throw new Error("Student ID already exists!");
        }

        // Validate student information
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("Invalid student ID!");
        }

        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Student name cannot be empty!");
        }

        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Invalid student age!");
        }

        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            throw new Error("Grade must be between 0 and 100!");
        }

        // Create new student
        let newStudent = {
            id: id,
            name: name,
            age: age,
            grade: grade
        };

        students.push(newStudent);

        console.log("Student added successfully!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 3. DISPLAY ALL STUDENTS
// ============================================

function displayStudents() {
    if (students.length === 0) {
        console.log("No students found!");
        return;
    }

    console.log("\n===== STUDENT LIST =====");

    for (let i = 0; i < students.length; i++) {
        console.log(`ID: ${students[i].id}`);
        console.log(`Name: ${students[i].name}`);
        console.log(`Age: ${students[i].age}`);
        console.log(`Grade: ${students[i].grade}`);
        console.log("------------------------");
    }
}

// ============================================
// 4. SEARCH STUDENT
// ============================================

function searchStudent(id) {
    try {
        let student = students.find(student => student.id === id);

        if (!student) {
            throw new Error("Student not found!");
        }

        console.log("\n===== STUDENT FOUND =====");
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 5. UPDATE STUDENT GRADE
// ============================================

function updateGrade(id, newGrade) {
    try {
        let student = students.find(student => student.id === id);

        if (!student) {
            throw new Error("Student not found!");
        }

        if (typeof newGrade !== "number" || newGrade < 0 || newGrade > 100) {
            throw new Error("Invalid grade! Enter a grade between 0 and 100.");
        }

        student.grade = newGrade;

        console.log("Student grade updated successfully!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 6. DELETE STUDENT
// ============================================

function deleteStudent(id) {
    try {
        let studentIndex = students.findIndex(student => student.id === id);

        if (studentIndex === -1) {
            throw new Error("Student not found!");
        }

        students.splice(studentIndex, 1);

        console.log("Student deleted successfully!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 7. CALCULATE AVERAGE GRADE
// ============================================

function calculateAverage() {
    try {
        if (students.length === 0) {
            throw new Error("No students available!");
        }

        let total = 0;

        for (let i = 0; i < students.length; i++) {
            total += students[i].grade;
        }

        let average = total / students.length;

        console.log(`Average grade: ${average.toFixed(2)}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 8. FIND STUDENT WITH HIGHEST GRADE
// ============================================

function findHighestGrade() {
    try {
        if (students.length === 0) {
            throw new Error("No students available!");
        }

        let highestStudent = students[0];

        for (let i = 1; i < students.length; i++) {
            if (students[i].grade > highestStudent.grade) {
                highestStudent = students[i];
            }
        }

        console.log("\n===== HIGHEST GRADE =====");
        console.log(`Name: ${highestStudent.name}`);
        console.log(`Grade: ${highestStudent.grade}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// ============================================
// 9. MAIN PROGRAM - TESTING
// ============================================

console.log("\n===== STUDENT MANAGEMENT SYSTEM =====");

// Display all students
displayStudents();

// Add a new student
addStudent(104, "Michael", 22, 95);

// Search student
searchStudent(102);

// Update student grade
updateGrade(101, 92);

// Delete student
deleteStudent(103);

// Calculate average
calculateAverage();

// Find highest grade
findHighestGrade();

// Display updated student list
displayStudents();
