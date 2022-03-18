const Db =  require("../../boostrap/Db.js")
const db = new Db();
//console.log(db.client)
module.exports = class UserController {
   get() {
    db.connect(function(err) {
        if (err) throw err;
        db.query("SELECT * FROM users", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      })
   }
}