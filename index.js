
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pizzaService = require('./PizzaCart');

const PizzaCart = pizzaService();


const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'));




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var smaller = 0.00;
var mediumm = 0.00;
var larger = 0.00;
var totals = 0.00;
var newStatus='Incomplete transaction'




// add your routes here...

app.get("/", function (req, res) {
	smaller = PizzaCart.getSmall();
	mediumm = PizzaCart.getMedium();
	larger = PizzaCart.getLarge();
	totals = PizzaCart.getTotal();




	res.render("index", {
		smaller,
		mediumm,
		larger,
		totals
	});


});

app.get("/order", function (req, res) {

	var orders=PizzaCart.PizzasOrder(req.body.paid);

	var CustomerStatus = orders.status;
	var ID = orders.orderId;
	var action = orders.action;


console.log(orders)

	res.render("add-pizza", {
		ID,
		CustomerStatus,
		action,
		totals,
		

	});
});



app.post("/buy", function (req, res) {

	PizzaCart.buyPizza(req.body.option);


	res.redirect("/");

});



app.post("/order", function (req, res) {


	res.redirect("/order");

})


app.get("/paid", function (req, res) {

	var orders=PizzaCart.PizzasOrder(req.body.paid);

	 CustomerStatus = orders.status;
	ID = orders.orderId;
  action = orders.action;


	res.redirect("/order");

})

app.post("/paid", function (req, res) {


	// PizzaCart.PizzasPaid(req.body.paid);
	// PizzaCart.PizzasPaid(req.body.paid).status
	



	res.redirect("/order");

})



const PORT = process.env.PORT || 7008;
app.listen(PORT, function () {
	console.log('started');
});