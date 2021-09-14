module.exports = function PizzaOrder() {

	var small=0.00;
	var medium = 0.00;
	var large=0.00;
	var total=0.00;

	//var customerID=5;
	//var statusValue= "Payment due";
	
	

	function buyPizza(pizzaId){
		//console.log(pizzaId)
		if(pizzaId=='small'){
			small+=35.00;
			total+=35.00;

		}

		if(pizzaId=='medium'){
			medium+=65.00;
			total+=65.00;
		}

		if(pizzaId=='large'){
			large+=85.00;
			total+=85.00;
		}
		
	}

	function getSmall(){
		return small;

	}


	function getMedium(){
		return medium;

	}


	function getLarge(){
		return large;

	}


	function getTotal(){
		return total;

	}

	function PizzasOrder(btnClicked){
		var order = {
			
			orderId : Math.floor(Math.random() * 50),
			status: "Payment due",
				amount : total,
				action:'Pay'
			  }
			  var list=Object.entries(order);;
	
		if(!btnClicked){
			return 	order;
			
		}

		if(btnClicked){
			order = {
			
				orderId : Math.floor(Math.random() * 50),
				status: "Paid",
					amount : total,
					action:'Collect'
				  }

			return order;
		}
			

		
		 
	
	
	}

	//  function PizzasPaid(btnClicked){

	// if(btnClicked){
	
	// var	orders = {
	// 		orderId :  Math.floor(Math.random() * 50),
	// 		status: "Paid",
	// 			amount : total
	// 		  }
		

	// }
	// return orders;
		 
	//  }


	
	
	

	return {
		buyPizza,
		getSmall,
		getMedium,
		getLarge,
		getTotal,
		PizzasOrder
		
		// showValues
		


	}

}