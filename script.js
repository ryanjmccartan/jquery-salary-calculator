$(document).ready(onReady);

function onReady(){
    $('#submitBtn').on('click', addEmployee);
    $('#deleteBtn').on('click', delEmployee);
    displayEmployees();
}

let employees =[];
let totalSalary = [];
const salaryLim = 20000;

function Employee (firstName, lastName, idNumber, jobTitle, annualSal){
    this.firstName = firstName,
    this.lastName = lastName,
    this.idNumber = idNumber,
    this.jobTitle = jobTitle,
    this.annualSal = annualSal
}

function addEmployee(){
    const newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#jobTitle').val(), $('#salary').val() );
    console.log('in addEmployee', newEmployee);
    let annualSalary = $('#salary').val();
    let annSalNumber = Number (annualSalary);
    employees.push(newEmployee);
    totalSalary.push(Number (annualSalary));
    displayEmployees();
    // empty out inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');

    $('#monthlyCost').empty();
    $('#monthlyCost').append(calculateCost(totalSalary));

}

function displayEmployees(){
  let el = $('#employeeList');
  el.empty();  
  // loop through employee array
  for (let i=0; i<employees.length; i++){
      let li = `<li>` + employees[i].firstName + ' ' + employees[i].lastName + ' ' + employees[i].idNumber + ' ' 
      + employees[i].jobTitle + ' ' + employees[i].annualSal + `</li>`;
      // append to DOM
      el.append(li);
  }
}



function calculateCost (array){
    let totalCost = 0;
    for (let i = 0; i < array.length; i++){
        totalCost = totalCost + array[i];
    } 
    if (totalCost > (salaryLim * 12) ){
        $('#monthlyCost').addClass('error');
    }
    return (totalCost / 12 );
}

// function calculateCost(array){
//     let el = $('#monthlyCost');
//     let totalCost = 0;
//     el.empty();
//     for (let i = 0; i<employees.length; i++){
//         totalCost += employees[i].annualSal;
//     } 
//     el.append(totalCost);
// }

function delEmployee(){

}


// issues I had: getting the total salaries to show up as a number
