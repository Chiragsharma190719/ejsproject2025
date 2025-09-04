const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin(){
    try{
        let user = await User.findOne({email:'mukul1907@gmail.com'});
        if(user){
            console.log("User already exists");
        }
        else
        {
         user = new User();
         user.firstName = 'Mukul';
         user.lastName = 'Sharma';
         user.email = 'mukul1907@gmail.com';
         let encryptedPassword = bcrypt.hashSync('123456', 10);
         user.password = encryptedPassword;
         user.userType = 'Admin';
         await user.save();
         console.log("Data saved successfully");
         }
    }
    catch(err){
        console.log(err);
    }
}
module.exports = makeAdmin;