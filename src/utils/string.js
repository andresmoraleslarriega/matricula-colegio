
const  bcrypt = require('bcryptjs');

const encryptString = ( string ) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(string, salt);
}

module.exports = {
    encryptString
}
