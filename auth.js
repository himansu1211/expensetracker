import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "expense-tracker-hks.firebaseapp.com",
  projectId: "expense-tracker-hks",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").onclick = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error during sign-in:", error);
    alert("Sign-in failed: " + error.message);
  }
};

document.getElementById("logout").onclick = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, user => {
  document.getElementById("app").classList.toggle("hidden", !user);
});
/* DASHBOARD FUNCTIONALITY */

let chart = null;
function updateDashboard() {
  const incomes = document.querySelectorAll("#income-entries .entry");
  const expenses = document.querySelectorAll("#expenses-entries .entry");
    let totalIncome = 0;
    let totalExpenses = 0;

    const labels = [];
    const values = [];
    incomes.forEach(row => {
      totalIncome += Number(row.children[1].value || 0);
    });

    expenses.forEach(row => {
      const val = Number(row.children[1].value || 0);
      totalExpenses += val;
      labels.push(row.children[0].value || "Expense");
      values.push(val);
    });
    document.getElementById("totalIncome").textContent = totalIncome;
    document.getElementById("totalExpenses").textContent = totalExpenses;
    document.getElementById("savings").textContent = totalIncome - totalExpenses;
    const maxIndex = values.indexOf(Math.max(...values));
    document.getElementById("maxCategory").textContent =
      labels[maxIndex] || "-";
    drawChart(labels, values);
}
function drawChart(labels, data) {
  const ctx = document.getElementById("expenseChart");
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels,
        datasets: [{
          data,
            backgroundColor: [
                "#ef4444",
                "#f97316",
                "#facc15",
                "#22c55e",
                "#38bdf8",
                "#8b5cf6"
            ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" }
        },
        cutout: "65%"
      }
    });
}
