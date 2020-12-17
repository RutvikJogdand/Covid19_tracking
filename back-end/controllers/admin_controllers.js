const Admins = require("./../models/admin_model")

const checkDetails = (req, res) => {

    const {username, password} = req.body

    const query = {username: username, password: password}
    // console.log(query, "QUERY")
    return Admins.findOne(query)
    .then(result => {
      if(result) {
        // console.log(`Successfully found: ${result}.`);
        res.send(result)
      } 
     
    })
    .catch(err => console.error(`Failed to find: ${err}`));
}

module.exports = {checkDetails}