
const students = {
  "john@example.com": {
    name: "John Doe",
    email: "john@example.com",
    mobile: "9876543210",
    domain: "Web Development",
    college: "Tech Institute",
    start: "01 June 2024",
    duration: "1 Month",
    photo: "https://via.placeholder.com/130",
    assignments: [true, false, true, true],
    certificate: "#"
  },
  "jane@example.com": {
    name: "Jane Smith",
    email: "jane@example.com",
    mobile: "1234567890",
    domain: "Data Science",
    college: "Data University",
    start: "15 July 2024",
    duration: "2 Months",
    photo: "https://via.placeholder.com/130",
    assignments: [true, true, true, true],
    certificate: "#"
  }
};

function verifyStudent() {
  const input = document.getElementById('identifier').value.trim();
  const resultBox = document.getElementById('result');

  if (!input) return showToast("Please enter a valid Email or ID");

  showSpinner(true);
  setTimeout(() => {
    const student = students[input.toLowerCase()];
    if (!student) {
      showToast("❌ No student found for that Email/ID");
      showSpinner(false);
      return;
    }

    const html = \`
      <div class="card">
        <img src="\${student.photo}" alt="Student Photo" />
        <h3>\${student.name}</h3>
        <p><strong>Email:</strong> \${student.email}</p>
        <p><strong>Mobile:</strong> \${student.mobile}</p>
        <p><strong>Domain:</strong> \${student.domain}</p>
        <p><strong>College:</strong> \${student.college}</p>
        <p><strong>Start Date:</strong> \${student.start}</p>
        <p><strong>Duration:</strong> \${student.duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
          \${student.assignments.map((done, i) => \`<span>A\${i+1}: \${done ? '✅' : '❌'}</span>\`).join('')}
        </div>
        <a href="\${student.certificate}" target="_blank">View Certificate</a>
      </div>
    \`;

    resultBox.innerHTML = html;
    showSpinner(false);
    showToast("✅ Student Verified");
  }, 1000);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function showSpinner(show) {
  document.querySelector(".spinner").style.display = show ? "block" : "none";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add("dark");
};
