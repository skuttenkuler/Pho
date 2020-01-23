# It's Slurpin' Time!
ORM Application that allows you to add and slurp as many bowls of Pho as you wish. Adding every type of Pho that you can imagine to the menu ready for slurpin'!
# Deployed Link
[Pho Time!](https://vast-atoll-52376.herokuapp.com/)


# Screenshot

![Alt text](./public/assets/img/screen.png?raw=true "Preview")

# Prerequisites
* [NodeJS](https://nodejs.org/en/)


# Technologies
* HTML
* CSS
* Javascript
* jQuery
* [MySQL](https://www.mysql.com/)
* [NodeJS](https://nodejs.org/en/)
    * [Express](https://expressjs.com/)
    * [Express-handlebars](https://www.npmjs.com/package/express-handlebars)

# Instructions 

```git
git clone https://github.com/skuttenkuler/Pho.git
```
```bash
cd Pho
npm install
```

format the `.env` reads as follows:
```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASS=password
    DB_NAME=pho_db
```
import the database:
```bash
#login to mysql
mysql -u username -p

#import the required schema
source db/schema.sql

#import the optional demo data
source db/seeds.sql
```
start:
```bash
node server.js

visit http://localhost:8080
```
    
# Code Snippets
    - creating a new Note and pushing to JSON array
The ORM for the application
```javascript
    module.exports = {

    selectAll: (tableName, cb) => {
        connection.query("SELECT * FROM ??",[tableName],(err,res) =>{
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: (tableName,newData,cb) => {
        connection.query("INSERT INTO ?? SET ?",[tableName,newData], (err,res)=>{
            if(err) throw err
            cb(res);
        });
    },
    updateOne: (tableName,newData,condition,cb) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [tableName, newData, condition], (err,res)=> {
            if(err) throw err;
            cb(res);
        });
    },
    deleteOne: (tableName,condition, cb) => {
        connection.query("DELETE FROM ?? WHERE ?",[tableName,condition], (err,res) => {
            if(err) throw err;
            cb(res);
        });
    },
}
```
All the controller CRUD Routes for the ORM
```javascript
    //routes
router.get("/", function (req, res){
    pho.all(function(data) {
        console.log(data)
        var phoObject = {
            pho: data
        };
        console.log(phoObject);
        res.render("index", phoObject);
    });
});

router.post("/api/pho", function(req, res){
    pho.create(["name"], [req.body.name], function(result){
        //send back the ID of new pho
        res.json({id:result.insertId});

    });
});

router.put("/api/pho/:id", function(req, res){
    var condition = "boolean = " + req.params.boolean; 
    console.log("condition", condition);
    pho.update(
        {

            pho: req.body.boolean
        },
        condition,
        function(result){
            if ( result.changeRows === 0) {
                //no rows changed
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
    router.delete("/api/pho/:id", function(req, res) {
        pho.delete(["id"], params.body.id, function(result){
            res.status(200).end();
        });
    });
```

 - deleting selected note from list and .filter() new array


 ```javascript
 //delete note
app.delete("/api/notes/:id", function(req,res){
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf-8", function(err){
        if (err) throw err;
        let db = JSON.parse(data);
        var noteID = parseInt(req.params.id);
        console.log(db);
        console.log(noteID);
        //return new arr with items that were selected
        var newDB = db.filter(num => num.id != noteID);
                 
    


        console.log("________________________")
        console.log(newDB)
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newDB), function(err){
            if (err) throw err;
            console.log("note deleted");
            
        })
    })
});
 ```




    

# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)

# License
This project is licensed under the ISC License.