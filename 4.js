let numberofchild = 2;
let numberofadult = 1;
let numberofseniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalchildprice = numberofchild * childTicketPrice;
 let totaladultPrice = numberofadult *   adultTicketPrice;
let totalseniorprice = numberofseniors * seniorTicketPrice;
let totalprice = totalchildprice + totaladultPrice + totalseniorprice; 

console.log("Total price to be paid: Rs. " + totalprice);