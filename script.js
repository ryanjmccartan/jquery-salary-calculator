$(document).ready(onReady);

function onReady(){
    $('#submitBtn').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteBtn', delEmployee);
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
    // append the calculation for total monthly cost
    // $('#monthlyCost').empty();
    // $('#monthlyCost').append(calculateCost(totalSalary));

}

function displayEmployees(){
  let totalCost = 0;
  let el = $('#employeeList');
  el.empty();  

  el.append(`<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>ID</th>
    <th>Title</th>
    <th>Salary</th>
</tr>`);
  // loop through employee array
  for (let i=0; i<employees.length; i++){
      el.append( `<tr> 
      <td>${employees[i].firstName}</td> 
      <td>${employees[i].lastName}</td> 
      <td>${employees[i].idNumber}</td> 
      <td>${employees[i].jobTitle}</td> 
      <td>${employees[i].annualSal}</td> 
      <td><button class="deleteBtn">Delete</button></td>
      </tr>`);
    totalCost += Number (employees[i].annualSal);
    let monthlyCost = $('#monthlyCost');
    monthlyCost.empty();
    monthlyCost.append('$' + totalCost / 12 );
    if (totalCost > (salaryLim * 12) ){
        $('#monthlyCost').addClass('error');
    }
    //   // append to DOM
    //   el.append(li);
  }
}

// `<button class="deleteBtn">Delete</button>`

function delEmployee(){
    console.log('in delEmployee');
}
