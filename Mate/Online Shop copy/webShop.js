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
		document.getElementById("article1").innerHTML+="<p>" + "<button type='button' id='buttonText' onclick='addToCart()'>ADD TO CART</button></p>";
		document.getElementById("buttonText").id='buttonText' + Item[i].id;
	}
	
	var shoppingCartArray = [];
	document.getElementById("shoppingCart").innerHTML=shoppingCartArray;
	


	console.log(shoppingCartArray);


	function addToCart() {
		if (buttonTextitemOne.clicked = true){
			shoppingCartArray.push(Item[0]);
		}
		else if (buttonTextitemTwo.clicked = true){
			shoppingCartArray.push(Item[1]);
		}
		else if (buttonTextitemThree.clicked = true){
			shoppingCartArray.push(Item[2]);
		}
		else if (buttonTextitemFour.clicked = true){
			shoppingCartArray.push(Item[3]);
		}
		else if (buttonTextitemFive.clicked = true){
			shoppingCartArray.push(Item[4]);
		}
		else if (buttonTextitemSix.clicked = true){
			shoppingCartArray.push(Item[5]);
		}
		displayElement();
	}

	function displayElement(){
		for (i=0; i<shoppingCartArray.length; i++){
				// document.getElementById("itemShoppingCart").innerHTML+=shoppingCartArray[i].price;
				document.getElementById("itemShoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
				document.getElementById("itemShoppingCart").innerHTML+="<p>" + "<button type='button' id='objectRemove' onclick='removeFromCart()'>REMOVE FROMCART</button>";
				document.getElementById("objectRemove").id = "objectRemove" + Item[i].id;
			}
	}

	setInterval(function(){
		if (shoppingCartArray.length !=0){
			console.log(shoppingCartArray);
			// console.log(shoppingCartArray[0].id);
		}
	},10000)



	function removeFromCart() {
		if(objectRemoveitemOne.clicked == true){
			for(i=0; i<shoppingCartArray.length; i++){
				if(shoppingCartArray[i].id == itemOne){
					
				}
			}
		}
	}








	// if (document.getElementById("buttonTextitemOne").id == "buttonTextitemOne"){
	// 	console.log("true");
	// }

	// console.log(document.getElementById("buttonTextitemOne").id);

	// function addToCart() {
	// 	if (buttonTextitemOne.clicked == true){
	// 		var i = 0;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
	// 	else if (buttonTextitemTwo.clicked == true){
	// 		var i = 1;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
	// 	else if (buttonTextitemThree.clicked == true){
	// 		var i = 2;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
	// 	else if (buttonTextitemFour.clicked == true){
	// 		var i = 3;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
	// 	else if (buttonTextitemFive.clicked == true){
	// 		var i = 4;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
	// 	else {
	// 		var i = 5;
	// 		document.getElementById("shoppingCart").innerHTML+="<img src=" + Item[i].src + " width=200px><br>" + "<p>" + Item[i].description +  "</p><p>" + Item[i].price + " " + Item[i].currency + "</p>";
	// 		document.getElementById("balance").innerHTML+= Number(Item[i].price);
	// 	}
		



	// }
	

















