const EmployeesTrack = require("./../models/employees_modal")

const getAllEmployees = (req, res) => {

    return EmployeesTrack.find()
      .then(result => {
        if(result) {
          res.send(result)
        } 
       
      })
      .catch(err => console.error(`Failed to find: ${err}`));
}

const markEmployeeCovidPositive = (req, res) => {

    const {id} = req.body
    EmployeesTrack.findOne({ID:id})
      .then((employee) => {
        
        employee._id = employee._id
        employee.ID = employee.ID ;
        employee.Name = employee.Name;
        employee.Location = employee.Location;
        employee.Designation = employee.Designation;
        employee.Department = employee.Department;
        employee.subDepartment = employee.subDepartment;
        employee.in_contact = employee.in_contact;
        employee.status = "Covid+ve";
        employee.infection_date = new Date(employee.infection_date);
        employee.covid_positive = true;
        employee.man_days = 7

        employee
          .save()
          .then(() => res.json("Employee updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));

        
      })
      .catch((err) => res.status(400).json("Error: " + err));

    console.log(id, "IDDDD")
}


const markEmployeeRecovered = (req, res) => {

    const {id} = req.body
    EmployeesTrack.findOne({ID:id})
      .then((employee) => {

        employee._id = employee._id
        employee.ID = employee.ID ;
        employee.Name = employee.Name;
        employee.Location = employee.Location;
        employee.Designation = employee.Designation;
        employee.Department = employee.Department;
        employee.subDepartment = employee.subDepartment;
        employee.in_contact = employee.in_contact;
        employee.status = "Healthy";
        employee.infection_date = "",
        employee.covid_positive = false,
        employee.man_days = 0

        employee
          .save()
          .then(() => res.json("Employee updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));

        
      })
      .catch((err) => res.status(400).json("Error: " + err));

    EmployeesTrack.findOne({in_contact:{$elemMatch: {ID:id}}})
    .then((res) => {

      console.log(res)

      res.in_contact = res.in_contact.filter(item => item.ID !== id);

        res
          .save()
          .then(() => res.json("Employee updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));

    })
     

}

module.exports = {getAllEmployees, markEmployeeCovidPositive, markEmployeeRecovered}