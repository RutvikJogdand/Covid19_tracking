const EmployeesTrack = require("./../models/employees_modal")

const getAllEmployees = (req, res) => {

    return EmployeesTrack.find()
      .then(result => {
        if(result) {
        //   console.log(`Successfully found: ${result}.`);
          res.send(result)
        } 
       
      })
      .catch(err => console.error(`Failed to find: ${err}`));
}

const markEmployeeCovidPositive = (req, res) => {

    const {id} = req.body
    EmployeesTrack.findOne({ID:id})
      .then((employee) => {

        // if(employee)
        // {
        //     console.log(employee)
        // }
        
        employee._id = employee._id
        employee.ID = employee.ID ;
        employee.Name = employee.Name;
        employee.Location = employee.Location;
        employee.Designation = employee.Designation;
        employee.Department = employee.Department;
        employee.subDepartment = employee.subDepartment;
        employee.in_contact = employee.in_contact;
        employee.status = "Covid+ve";
        employee.infection_date = new Date(employee.infection_date),
        employee.covid_positive = true

  
        // console.log(employee)
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

        // if(employee)
        // {
        //     console.log(employee)
        // }
        
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
        employee.covid_positive = false

  
        // console.log(employee)
        employee
          .save()
          .then(() => res.json("Employee updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));

        
      })
      .catch((err) => res.status(400).json("Error: " + err));

    // console.log(id, "IDDDD")
}

module.exports = {getAllEmployees, markEmployeeCovidPositive, markEmployeeRecovered}