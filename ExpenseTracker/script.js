const form = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const list = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let expenses = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name && amount > 0) {
    const expense = { id: Date.now(), name, amount };
    expenses.push(expense);
    updateUI();
    form.reset();
  }
});

function updateUI() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - ₹${expense.amount}
      <button onclick="removeExpense(${expense.id})">❌</button>
    `;
    list.appendChild(li);
    total += expense.amount;
  });

  totalAmount.textContent = total.toFixed(2);
}

function removeExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  updateUI();
}
