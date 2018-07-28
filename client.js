console.log('JS');
$(readyNow);
function readyNow() {
    console.log('JQ');
    let tBody = $('<tbody id="calcBody"></tbody>');
    $('#empTable').append(tBody);


class employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, annualSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.id = idIn;
        this.title = titleIn;
        this.annualSalary = annualSalaryIn;
    }
}

const empOne = new employee('Sam', 'Bahta', 001, 'CEO', 150000);
const empTwo = new employee('Amalia', 'Ellison', 002, 'Legal Counsel', 60000);
const employeeArr = [empOne, empTwo];



for (employ of employeeArr) {
    $('#calcBody').append('<tr>' + '<td>' + employ.firstName + '</td>' + '<td>' + employ.lastName + '</td>' + '<td>' + employ.id + '</td>' + '<td>' + employ.title + '</td>' + '<td>' + employ.annualSalary + '</td>' + '</tr>');
    console.log(employ);
}
}