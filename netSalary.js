// Constants for tax rates, NHIF rates, and NSSF rates.
const taxRates = [
    { range: [0, 24000], rate: 0.1 },
    { range: [24001, 32333], rate: 0.15 },
    { range: [32334, 40667], rate: 0.2 },
    { range: [40668, 49000], rate: 0.25 },
    { range: [49001, Infinity], rate: 0.3 }
];

const nhifRates = [

    { range: [0, 5999], rate: 150 },
    { range: [6000, 7999], rate: 300 },
    { range: [8000, 11999], rate: 400 },
    { range: [12000, 14999], rate: 500 },
    { range: [15000, 19999], rate: 600 },
    { range: [20000, 24999], rate: 750 },
    { range: [25000, 29999], rate: 850 },
    { range: [30000, 34999], rate: 900 },
    { range: [35000, 39999], rate: 950 },
    { range: [40000, 44999], rate: 1000 },
    { range: [45000, 49999], rate: 1100 },
    { range: [50000, 59999], rate: 1200 },
    { range: [60000, 69999], rate: 1300 },
    { range: [70000, 79999], rate: 1400 },
    { range: [80000, 89999], rate: 1500 },
    { range: [90000, 99999], rate: 1600 },
    { range: [100000, Infinity], rate: 1700 }];

const nssfRates = { employee: 0.06, employer: 0.06 };

// Function to calculate Payee (Tax) based on income
function calculatePayee(income) {
    for (const { range, rate } of taxRates) {
        if (income >= range[0] && income <= range[1]) {
            return income * rate;
        }
    }
    return 0;
}

// Function to calculate NHIF Deductions based on income
function calculateNHIF(income) {
    for (const { range, rate } of nhifRates) {
        if (income >= range[0] && income <= range[1]) {
            return rate;
        }
    }
    return 0;
}

// Function to calculate NSSF Deductions based on income
function calculateNSSF(income) {
    const employeeDeduction = income * nssfRates.employee;
    const employerContribution = income * nssfRates.employer;
    return { employee: employeeDeduction, employer: employerContribution };
}

// Get user input for basic salary and benefits
const basicSalary = ("Enter Basic Salary:");
const benefits = ("Enter Benefits:");

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate Payee (Tax)
const payee = calculatePayee(grossSalary);

// Calculate NHIF Deductions
const nhifDeductions = calculateNHIF(grossSalary);

// Calculate NSSF Deductions
const nssfDeductions = calculateNSSF(grossSalary);

// Calculate Net Salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions.employee;

//Callfunction to display the amount
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions (Employee): ${nssfDeductions.employee}`);
console.log(`Net Salary: ${netSalary}`);
