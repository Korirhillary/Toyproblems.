Toy Problems 

1.Student Grade Generator.

 Description:

This is a function that calculates a grade based on provided marks. The function takes a numeric input between 0 and 100 and returns a corresponding grade from 'A' to 'E'. The grading scale used is:

- A: 80 - 100
- B: 60 - 79
- C: 50 - 59
- D: 40 - 49
- E: 0 - 39

Set Up Instructions:

To use this grade calculator function, follow these steps:

1. Include the `calculateGrade` function in your JavaScript project.

2. Call the `calculateGrade` function with a numeric argument representing the marks you want to calculate the grade for.

3. The function will return the calculated grade as a string ('A', 'B', 'C', 'D', or 'E').

4. Calculated grade can be displayed using `console.log`.



2.Speed Calculator

Description

This is a function  that calculates demerit points for a given speed of a car. It checks whether a driver's speed exceeds the speed limit and determines the appropriate action based on the calculated demerit points

Set up instructions:

To use this Speed calculator function, follow these steps:

1.Call the calculateDemeritsPoints function and provide the speed of the car as an argument.

2.The function will return one of the following:

"OK": If the car's speed is within the speed limit (70 km/h).
"License suspended": If the calculated demerit points exceed 12, indicating that the driver's license should be suspended.
"Points: X": If the car's speed exceeds the speed limit but doesn't warrant a license suspension. X represents the number of demerit points calculated based on the speed violation.


3.Net Salary Calculator

Description

This is a program that calculates various deductions from a given salary to determine the net salary. It takes into account Payee (tax), NHIF (National Hospital Insurance Fund) deductions, and NSSF (National Social Security Fund) deductions.

Constants
Tax Rates (taxRates)
This constant defines an array of tax rate ranges and their corresponding rates. The program uses this information to calculate the Payee (tax) based on the provided income.

NHIF Rates (nhifRates)
This constant defines an array of NHIF rate ranges and their corresponding rates. The program uses this information to calculate NHIF deductions based on the provided income.

NSSF Rates (nssfRates)
This constant defines the NSSF rates for both employees and employers. The program uses these rates to calculate NSSF deductions for both parties based on the provided income.

Functions
calculatePayee(income)
This function calculates the Payee (tax) based on the provided income. It iterates through the tax rate ranges defined in taxRates to determine the appropriate tax rate for the given income.

calculateNHIF(income)
This function calculates NHIF deductions based on the provided income. It iterates through the NHIF rate ranges defined in nhifRates to determine the appropriate NHIF rate for the given income.

calculateNSSF(income)
This function calculates NSSF deductions for both employees and employers based on the provided income. It uses the rates defined in nssfRates to calculate the deductions.


Set Up Instructions.

The program prompts the user to enter their basic salary and any benefits.
It calculates the gross salary by adding the basic salary and benefits.
It calculates the Payee (tax) using calculatePayee().
It calculates NHIF deductions using calculateNHIF().
It calculates NSSF deductions using calculateNSSF().
It calculates the net salary by subtracting Payee, NHIF deductions, and NSSF deductions (employee portion) from the gross salary.
Finally, it displays the results including Gross Salary, Payee (Tax), NHIF Deductions, NSSF Deductions (Employee), and Net Salary in the console.