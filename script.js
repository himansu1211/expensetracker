let chart;

function addRow(containerId, name = "", value = "") {
  const row = document.createElement("div");

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Category";
  nameInput.value = name;

  const valueInput = document.createElement("input");
  valueInput.type = "number";
  valueInput.placeholder = "Amount";
  valueInput.value = value;

  const del = document.createElement("button");
  del.textContent = "✕";
  del.onclick = () => row.remove();

  row.append(nameInput, valueInput, del);
  document.getElementById(containerId).appendChild(row);
}

document.getElementById("addIncome").onclick = () =>
  addRow("incomeList");

document.getElementById("addExpense").onclick = () =>
  addRow("expenseList");

document.getElementById("calculate").onclick = calculate;

function calculate() {
  const incomes = document.querySelectorAll("#incomeList div");
  const expenses = document.querySelectorAll("#expenseList div");

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
        ],
        borderRadius: 6
      }]
    },
    options: {
      cutout: "65%",
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}

/* SHARE AS IMAGE */
document.getElementById("shareBtn").onclick = async () => {
  const app = document.getElementById("app");

  window.scrollTo(0, 0);

  const canvas = await html2canvas(app, {
    scale: 2,
    backgroundColor: "#0f172a"
  });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "Expense_Tracker_Himansu_Kumar_Sahu.png";
  link.click();
};
