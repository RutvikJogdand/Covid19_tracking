import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {get_all_emp,  cov_neg} from "./../../Redux/AllEmployees/allEmpActions"
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const useStyles2 = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    alignBtns:{
        textAlign:"right"
    }
  }));

export default function CovidPostiveEmployees() {
  const classes = useStyles();
  const classes2 = useStyles2()
  const dispatch = useDispatch()
  const allEmpArr = useSelector(state => state.allEmpRoot.all_emp_arr)

  let quarantines = []
  if(allEmpArr.length !== 0){

    quarantines = allEmpArr.filter(item => item.covid_positive === true).map(item => item.in_contact)
    
  }

  console.log(quarantines)
  const [empSearch, setEmpSearch] = React.useState("")
  const [open2, setOpen2] = React.useState(false);
  const [reqId, setID] = React.useState("")
  const [reqName, setName] = React.useState("")
  const history = useHistory()


  const handleOpen2 = (ID, Name) => {

    setOpen2(true);
    setID(ID)
    setName(Name)

  }


  const handleClose2 = () => {
    setOpen2(false);
    setID("")
    setName("")
  };

  const handleRecovered = () => {
    handleClose2()

    dispatch(cov_neg(reqId))
  }

  const handleSearch = (e) => {

    setEmpSearch(e.target.value)
  }

//   const handleViewAll = () => {

//     // history.push("/dashboard")
//     dispatch(get_all_emp())
//   }

  useEffect(() => {
      
      dispatch(get_all_emp())
    },[dispatch])
    
    // console.log(allEmpArr)
  return (
    <>  
    {/* Below Table displays list of all existing employees in the database */}
    {
        allEmpArr.filter(item => item.covid_positive === true).length > 0 ?   
        <>
        <div>
            <input type="search" placeholder="Search Employee" name="empSearch" onChange={handleSearch} value={empSearch} />
        </div>
        <br/>
        <br/>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Emp ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Sub Department</TableCell>
              <TableCell>Quarantine Days</TableCell>
              <TableCell>Number Of Quarantines</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmpArr && allEmpArr.filter(item => item.covid_positive === true).filter(item => item.Name.toLowerCase().includes(empSearch.toLowerCase())).map((row) => (
              <TableRow key={row.ID}>
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.Department}</TableCell>
                <TableCell>{row.subDepartment}</TableCell>
                <TableCell> 14  </TableCell>
                <TableCell>{row.in_contact.length}</TableCell>
                <TableCell>
                      <button onClick={() => handleOpen2(row.ID, row.Name)} className="btn btn-success">Mark Recover</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
      :
      <div>
        <p>No employees found</p>
        {/* <button className="btn btn-dark" onClick={handleViewAll}>View All Employees</button> */}
      </div>
  
    }
    

    {/* Modal to mark employee as recovered: */}
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes2.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes2.paper}>
            <h2 id="transition-modal-title">Are you sure?</h2>
            <p id="transition-modal-description">Do you want to mark employee: {reqId}, {reqName} as Recovered</p>
            <div className={classes2.alignBtns}>
                <button onClick={handleClose2} className="btn btn-dark m-2">Cancel</button>
                <button onClick={handleRecovered} className="btn btn-danger">Confirm</button>
            </div>
          </div>
        </Fade>
    </Modal>
    </>
  );
}
