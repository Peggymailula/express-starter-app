const assert = require('assert');

const cart = require('../PizzaCart');

describe('It should return the correct totals for the Pizza cart', function(){

    const pizzaTest = cart();

    it('should return the price of R70 from two pizzas bought', function(){
      pizzaTest.buyPizza('small');
      pizzaTest.buyPizza('small');
        assert.equal(70, pizzaTest.getSmall());
    });

    it('should return the price of R35 from one pizzas bought', function(){
        pizzaTest.buyPizza('small');
     
          assert.equal(35, pizzaTest.getSmall());


    });

    it('should return the price of R65 from one medium pizzas bought', function(){
        pizzaTest.buyPizza('medium');
   
        assert.equal(65, pizzaTest.getMedium());

    });
    describe('Greet exercise:Message setting' ,function(){


    it('should return the price of R195 from three medium pizzas bought', function(){
        pizzaTest.buyPizza('medium');
        pizzaTest.buyPizza('medium');
        pizzaTest.buyPizza('medium');
   
        assert.equal(195, pizzaTest.getMedium());

    });
    it('should return the price of R85 from one large pizzas bought', function(){
        pizzaTest.buyPizza('large');
   
        assert.equal(85, pizzaTest.getMedium());

    });

    it('should return the price of R425 from five large pizzas bought', function(){
        pizzaTest.buyPizza('large');
        pizzaTest.buyPizza('large');
        pizzaTest.buyPizza('large');
        pizzaTest.buyPizza('large');
        pizzaTest.buyPizza('large');
   
        assert.equal(425, pizzaTest.getLarge());

    });
    })})