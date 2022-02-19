function solve() {
    const getEl = selector => document.querySelector(selector);
    const crEl = selector => document.createElement(selector);

    const fnameEl = getEl('#fname');
    const lnameEl = getEl('#lname');
    const emailEl = getEl('#email');
    const birthEl = getEl('#birth');
    const positionEl = getEl('#position');
    const salaryEl = getEl('#salary');
    const hireWorkerBTN = getEl('#add-worker');

    const tbodyContentEl = getEl('#tbody');
    const budgetForSalaryEl = getEl('#sum');
    let currentSalary = 0;

    hireWorkerBTN.addEventListener('click', (e) => {
        e.preventDefault();
        if (fnameEl.value != "" && lnameEl.value != "" && emailEl.value != "" && birthEl.value != "" && positionEl.value != "" && salaryEl.value != "") {
            const trEL = crEl('tr');
            const tdName = crEl('td');
            const tdLName = crEl('td');
            const tdEmail = crEl('td');
            const tdBirth = crEl('td');
            const tdPosition = crEl('td');
            const tdSalary = crEl('td');
            const tdBTNs = crEl('td');
            const firedBtn = crEl('button');
            firedBtn.className = 'fired';
            firedBtn.textContent = 'Fired'
            const editBtn = crEl('button');
            editBtn.className = 'edit';
            editBtn.textContent = 'Edit';

            tdBTNs.appendChild(firedBtn);
            tdBTNs.appendChild(editBtn);

            tdName.textContent = fnameEl.value;
            tdLName.textContent = lnameEl.value;
            tdEmail.textContent = emailEl.value;
            tdBirth.textContent = birthEl.value;
            tdPosition.textContent = positionEl.value;
            tdSalary.textContent = salaryEl.value;

            trEL.appendChild(tdName);
            trEL.appendChild(tdLName);
            trEL.appendChild(tdEmail);
            trEL.appendChild(tdBirth);
            trEL.appendChild(tdPosition);
            trEL.appendChild(tdSalary);
            trEL.appendChild(tdBTNs);

            tbodyContentEl.appendChild(trEL);

            currentSalary += Number(salaryEl.value);
            budgetForSalaryEl.textContent = currentSalary.toFixed(2);

            editBtn.addEventListener('click', (e) => {
                e.preventDefault();

                fnameEl.value = tdName.textContent;
                lnameEl.value = tdLName.textContent;
                emailEl.value = tdEmail.textContent;
                birthEl.value = tdBirth.textContent;
                positionEl.value = tdPosition.textContent;
                salaryEl.value = tdSalary.textContent;
                currentSalary -= Number(salaryEl.value);
                budgetForSalaryEl.textContent = currentSalary.toFixed(2);

                trEL.remove();
            });

            firedBtn.addEventListener('click', (e) => {
                e.preventDefault();
                currentSalary -= Number(tdSalary.textContent);
                budgetForSalaryEl.textContent = currentSalary.toFixed(2);

                trEL.remove();
            })

            fnameEl.value = ""
            lnameEl.value = ""
            emailEl.value = ""
            birthEl.value = ""
            positionEl.value = ""
            salaryEl.value = ""

        }
    });
}
solve()