var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Flowerbud9",
    database: "bamazon_db"
});
var items = [];
connection.connect(function (err) {
    if (err) throw err;
    // console.log(`Connected as id ${connection.threadId} \n`);
});

function displayProd() {
    var query = `SELECT * FROM products`
    connection.query(query, function (err, res) {
        if (err) throw (err);
        
        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].id + "\nProduct: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity in Stock: " + res[i].stock_quantity + "\n\n");
            items.push(res[i]);
        }
        inquirer.prompt([
            {
                name: "id",
                message: "Enter the ID of the product you would like to buy:"
            },
            {
                name: "quant",
                message: "How many would you like to purchase?"
            }
        ]).then(function (answers) {
            var id = answers.id; //this gives us users id choice
            var query2 = `SELECT * FROM products WHERE id="${id}"`
            connection.query(query2, function(err, data){
                if (err) throw err;
                // console.log(data)
                var currQuantity = data[0].stock_quantity;
                var newQuantity = currQuantity - answers.quant; //need to do this in a connection.query
                var cost = data[0].price*currQuantity;
                var name = data[0].product_name;
// console.log(newQuantity)
                if (newQuantity < 0) {
                    console.log("Insufficient stock, please choose another product!")
                    displayProd();
                } else {
                    updateProduct(id, newQuantity, cost, name);
                }
                // var reqAmount = answers.quant //users requested amount
            })
        })
        
    })
    
  //  connection.end()
}
displayProd();


function updateProduct(id, newQuantity, cost, name) {
    

    connection.query(
        `UPDATE products SET stock_quantity = stock_quantity - ${newQuantity} WHERE id = ${id}`, function(err, res){

        } //select then set value of stock quantity. UPDATE products.
    
    )
   
        console.log(`You purchased ${id} ${name} for ${cost}`)
    
}