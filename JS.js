/*
notes js 

in callbacks there are two main problem are occurs 

.callback hell
.inversion of control

.callback hell:- 
-----------------

->In large number code ther is so many callbacks are occures when we code
 the program. when occuring of some many nested callback, 
-> leads to difficulty in maintaing code

 .inversion of control:-
 -----------------------

->When we callback a function the controll of callback function is in
other functions hand , so we dont no when that function will call, 
or is it exicute .
-> this lose of contorll of callback function is caled inversion of 
controll.

    ex: const cart = ["shoes", "pants", "kurta"];

        createOrder(cart, function (orderId){
        proceedToPayment(orderId)});

    in this above example the controll of proceedToPayment funtion in
    hands of createOrder funtion;




=> PROMISES
 -------------

->promises are nothing we can assume it as a object with data value.
-> when code starts exicution.

    ex: const promise = createOrder(cart);
        
        promise.then(funtion (orderId){
        proceedToPayment(orderId);})


    when we use like this using "then", when the promise varible creatd a
    it automaticaly fill data in th promie object


    ->diference between
    -------------------

     ex: const cart = ["shoes", "pants", "kurta"];

        createOrder(cart, function (orderId){
        proceedToPayment(orderId)});

    and

    const promise = createOrder(cart);
        
        promise.then(funtion (orderId){
        proceedToPayment(orderId);})

    =>when we use the first option the callback function is passed to 
    createOrder function

    but,

    in second option the callback function is attached to promise object

    this make lot of differense

    ->promise object garantines that when a data is in the promise object
    it defenetly execute in this case controll is not taken by another 
    function.

  -> fetch return promise

------------------------------------------------------------------

  FOR INTERVIEW
  ---------------

  => promise is a placeholder that filled later with a value.
     -------------------------
  => **main
    promise is object that represent the eventual complition of 
    async operation .


--------------------------------------------------------------------

  PROMISE CHAINING
  -----------------

  when we use so many nexted callbacks are done, callback hell should 
  occuers to avoid it  we use promise chaining like bellow

  using .then

  ex: createOrder(cart)
  .then(function (orderId){
    prceedToPayment(orderId)});
  .then(function (paymentId){
    showOrderSummary(paymentId)};


=> promise has 2 part 

- consuming part -> is above things.


- creation part -> const pr = new Promise(function(resolve, reject){})

