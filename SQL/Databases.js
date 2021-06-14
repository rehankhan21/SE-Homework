/*
    What is a databse? an organizated collection of data.

     There are relational databases and non relational databases and cloud storage.
     SQL and NO SQL database.

     class Person {
         int pid;
         String name 
     }

     how is the class related to the sql table?

     class name should be the table name; Class relates to table name.

     Each instance varaible should be a field in the database table.

     Next week we will make a connect between classes and database tables.

     Cloud -aws, azure
     Relational Database - SQL

     defualt option dev 

     not bootstrap 

     you can see the database running, if u type services in the 
     windows search bar.

     Primary Key, if someone has the same name, the key can be used to uniquely identify 
     them.

     id INT PRIMARY KEY AUTO_INCREMENT, iname VARCHAR(25), idescription VARCHAR(100),
     price Decimal(10,2)); 

     INSERT INTO items (iname, idescription, price) VALUES ("phone", "its a cell phone", 300.50);

     SELECT * FROM items;

     SELECT * FROM items WHERE price > 100;

     SELECT COUNT(iid) from items WHERE price < 900;
*/