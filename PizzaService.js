module.exports = function(pizzaList) {

	const pizzas = pizzaList || [];

	function listAll() {
		return pizzas;

	}

	function addPizza(pizza) {
		pizzas.push({
			id: pizza.id,
			size: pizza.size,
			name: pizza.name,
			description: pizza.description
		});

	}

	function deletePizza(pizzaId){

	}

	function updatePizza(pizzaId) {

	}

	return {
		addPizza,
		deletePizza,
		updatePizza,
		listAll,
	}

}