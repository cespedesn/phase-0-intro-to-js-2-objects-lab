const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee= {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value){
    newEmployee[key] = value;
    return newEmployee;
}
function deleteFromEmployeeByKey(newEmployee, key) {
    const newerEmployee = {...newEmployee};
    delete newerEmployee[key];
    return newerEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}