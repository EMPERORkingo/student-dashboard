let students = [
  { name: "Rahul", uid: 101, marks: 92 },
  { name: "Priya", uid: 102, marks: 88 },
  { name: "Aman", uid: 103, marks: 95 },
  { name: "Sneha", uid: 104, marks: 90 },
  { name: "Arjun", uid: 105, marks: 85 },
  { name: "Neha", uid: 106, marks: 91 },
  { name: "Karan", uid: 107, marks: 87 },
  { name: "Riya", uid: 108, marks: 93 },
  { name: "Vikas", uid: 109, marks: 89 },
  { name: "Simran", uid: 110, marks: 94 },
  { name: "Ankit", uid: 111, marks: 86 },
  { name: "Pooja", uid: 112, marks: 84 }
];

// Sort students
students.sort((a, b) => b.marks - a.marks);

// Assign rank
students.forEach((s, i) => s.rank = i + 1);

// Load table on page load
window.onload = () => loadTable(students);

function loadTable(data) {
  const body = document.getElementById("tableBody");
  body.innerHTML = "";

  data.forEach(s => {
    let row = `
      <tr>
        <td>${s.rank}</td>
        <td>${s.name}</td>
        <td>${s.uid}</td>
        <td>${s.marks}</td>
      </tr>`;
    body.innerHTML += row;
  });
}

// Search function (FIXED)
function searchStudent() {
  let uid = document.getElementById("searchUID").value.trim();

  let student = students.find(s => s.uid == uid);

  if (student) {
    loadTable([student]); // show only one result
  } else {
    alert("Student not found!");
  }
}

// Reset table
function resetTable() {
  loadTable(students);
}
