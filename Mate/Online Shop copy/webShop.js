var Item = [{
		"id":"itemOne",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 119.99,
		"currency": "€"
	},
	{
		"id":"itemTwo",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 109.99,
		"currency": "€"
	},
	{
		"id":"itemThree",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 99.99 ,
		"currency": "€"
	},
	{
		"id":"itemFour",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 89.99,
		"currency": "€"	},
	{
		"id":"itemFive",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 79.99,
		"currency": "€"	},
	{
		"id":"itemSix",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 69.99,
		"currency": "€"	},
	{
		"id":"itemSeven",
		"src": "vans.jpg",
		"description": "adidas Shoes",
		"price": 59.99,
		"currency": "€"	
	}];

	var i;
	console.log(Item[0]);
	for(i=0; i<Item.length; i++){
		document.getElementById("article1").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
		document.getElementById("article1").innerHTML+="<p>" + "<button type='button' id='buttonText' onclick='addToCart()'>ADD TO CART</button>";
		document.getElementById("buttonText").id='buttonText' + Item[i].id;
	}
	
	if (document.getElementById("buttonTextitemOne").id == "buttonTextitemOne"){
		console.log("true");
	}

	console.log(document.getElementById("buttonTextitemOne").id);

	function addToCart() {
		if (document.getElementById("buttonTextitemOne").id == "buttonTextitemOne"){
			var i = 0;
			document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
			document.getElementById("balance").innerHTML+= Number(Item[i].price);
		}
		



	}
	

















