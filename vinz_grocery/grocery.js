var items = [{
                "name" : "Bananas",
                "price": "1,99",
                "quantity" : "30",
                "available": "true",
                "image" : "bananas.jpg"
            },{
                "name" : "Milk",
                "price": "1,15",
                "quantity" : "50",
                "available": "true",
                "image" : "milk.jpg"
            },{
                "name" : "Bread",
                "price": "1,50",
                "quantity" : "10",
                "available": "true",
                "image" : "bread.jpg"
            },{
                "name" : "Eggs",
                "price": "4,20",
                "quantity" : "25",
                "available": "true",
                "image" : "eggs.jpg"
            },{
                "name" : "Jelly-Beans",
                "price": "3,25",
                "quantity" : "6",
                "available": "true",
                "image" : "jelly.jpg"
            },{
                "name" : "Cheese",
                "price": "2,50",
                "quantity" : "65",
                "available": "true",
                "image" : "cheese.jpg"
            },{
                "name" : "Beef",
                "price": "8,50",
                "quantity" : "3",
                "available": "true",
                "image" : "beef.jpg"
            }];


function showItems() {

    var div = $("<div></div>");
    $("body").append(div);
    
    for(var i=0;i<items.length;i++) {
        var container = $(`<div></div>`);
        $(div).append(container);
        
        var basket = $(`<ul>
                            <img src="./img/${items[i].image}" style="width: 20%">
                            <li>name: ${items[i].name}</li>
                            <li>price: ${items[i].price}</li>
                            <li>quantity: ${items[i].quantity}</li>
                            <li  id="${i}">available: ${items[i].available}</li></ul>`);
        
        $(container).append(basket);
        var available = items[i].available;

        switch(available) {
            case "true" : $("li:last-child").css("background-color", "green");
            break;
            case "false" : $("li:last-child").css("background-color", "red");
            break;
            default : $("li:last-child").css("background-color", "yellow");
        }
        
    }
}
showItems();