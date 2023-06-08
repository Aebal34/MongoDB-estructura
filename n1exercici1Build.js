//DB Build

use bottlebottomsoptics
db.createCollection("Brand")
db.createCollection("Glasses")
db.createCollection("Employee")
db.createCollection("Customer")
db.createCollection("Purchase")

//Now we insert some data to try the db
//Brand
db.Brand.insertOne({supplier: {name:"Rebion", address: {street: "123 fakeStreet", number: 12, door: 1, floor: 0, postalCode: 12345, city: "Barcelona", country: "Spain"}, phone: 698682673, fax: "123-123321456"}, _id: 127, name:"Afflelou"})
//Glasses
db.Glasses.insertOne({brand_id: 127, _id: 10304, price: 199.95, colour:{framecolour: "Black", rightcolour:"Clear", leftcolour:"Clear"}, graduation:{leftgraduation:3.5, rightgraduation:2.9}, frametype:"Metalic"})
//Employee
db.Employee.insertOne({_id:19, salary: 1490, name: "Vanessa"})
//Customers
db.Customer.insertOne({_id:1029, address:{street:"122 normal Alley", number: 3, floor: 2, door:"B", postalcode:17600, city:"Figueres", country:"Spain"}, name: "Clara", email:"claragarganta@gargaras.net", phone:666666666, registerdate:new Date("2023-06-02")})
db.Customer.insertOne({_id:1122, address:{street:"122 normal Alley", number: 3, floor: 2, door:"B", postalcode:17600, city:"Figueres", country:"Spain"}, name: "Miguel", email:"miguelramon@gargaras.net", phone:656565656, registerdate:new Date("2023-06-08"), referral_id: 1029})
//Purchase
db.Purchase.insertOne({_id: 230041, glasses_id:10304, customer_id:1122, employee_id:19, purchasedate: new Date("2023-06-08")})