document.getElementById('addExpenseBtn').addEventListener('click', addExpense);

let expenses = [];

function addExpense() {
    // Get form inputs
    const amount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('expenseDescription').value;
    const category = document.getElementById('expenseCategory').value;

    if (amount === '' || description === '') {
        alert('Please fill all fields');
        return;
    }

    // Create an expense object
    const expense = {
        amount: parseFloat(amount),
        description: description,
        category: category
    };

    // Add expense to the list
    expenses.push(expense);
    updateExpenseList();

    // Clear the form
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
}

function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${expense.amount} - ${expense.category} - ${expense.description}
            <div>
                <button class="btn btn-danger btn-sm me-2" onclick="deleteExpense(${index})">Delete</button>
                <button class="btn btn-secondary btn-sm" onclick="editExpense(${index})">Edit</button>
            </div>`;
        expenseList.appendChild(li);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
}

function editExpense(index) {
    const expense = expenses[index];

    document.getElementById('expenseAmount').value = expense.amount;
    document.getElementById('expenseDescription').value = expense.description;
    document.getElementById('expenseCategory').value = expense.category;

    // Remove the expense being edited
    expenses.splice(index, 1);
    updateExpenseList();
}
