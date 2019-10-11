DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER NOT NULL,
stock_quantity INTEGER,
PRIMARY KEY(id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Couch", "Furniture", 1000, 5), ("Diamond Earrings", "Jewelry", 550, 8), ("Red Cardigan", "Women's Clothing", 30, 25), ("Bluetooth Speaker", "Electronics", 100, 10),("Barstool Set", "Furniture", 300, 4), ("Vaccuum Cleaner", "Household Items", 115, 6), ("Cast Iron Skillet", "Kitchen Items", 45, 17), ("Motion Sensor Trash Can", "Household Items", 100, 5), ("Silverware Set", "Kitchen Items", 125, 11),("Bamboo Plant", "Decor", 20, 19);

SELECT * FROM products;