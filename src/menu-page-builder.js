const loadMenuPage = function(){
    const theMenu = [
        {
            type: "main",
            name: "Spaghetti & Chicken Leg",
            price: "£7.00",
            description: "Classic spaghetti served with a seasoned oven-roasted chicken leg and light tomato sauce."
        },
        {
            type: "main",
            name: "White Rice & Stew & Turkey",
            price: "£7.50",
            description: "Steamed white rice topped with rich tomato stew and tender grilled turkey pieces."
        },
        {
            type: "main",
            name: "Steak & Stir-fry Veggies",
            price: "£6.49",
            description: "Juicy pan-seared steak served with a colorful medley of stir-fried vegetables."
        },
        {
            type: "snacks",
            name: "Nachos & Chili Dip",
            price: "£5.99",
            description: "Crispy nacho chips served with a warm, mildly spicy chili cheese dip."
        },
        {
            type: "snacks",
            name: "Crackers & Cheese",
            price: "£4.00",
            description: "Crunchy savory crackers paired with smooth and creamy cheese slices."
        },
        {
            type: "snacks",
            name: "Pizza",
            price: "£3.99",
            description: "Slice of freshly baked pizza topped with cheese and classic tomato sauce."
        },
        {
            type: "dessert",
            name: "Chocolate & Strawberry Milkshake",
            price: "£3.00",
            description: "Thick and creamy milkshake blended with chocolate and fresh strawberry flavors."
        },
        {
            type: "dessert",
            name: "Lemon & Cheese Cake",
            price: "£4.49",
            description: "Smooth and tangy lemon cheesecake served with a buttery biscuit base."
        },
        {
            type: "dessert",
            name: "Metropolitan Ice Cream",
            price: "£2.99",
            description: "Classic tri-flavor ice cream — chocolate, vanilla, and strawberry scoops."
        }
    ];
    const contentDiv = document.getElementById("content");
    const divsContMenu = document.createElement("div");
    divsContMenu.id = "divs-cont-menu"
    const title = document.createElement("h1");
    title.setAttribute("class","menu-title");
    title.innerText = "Heaven's Menu";
    contentDiv.appendChild(title);

    const mainDiv = document.createElement("div");
    const mainH = document.createElement("h2");
    mainH.innerText = "Mains";
    mainDiv.appendChild(mainH);
    theMenu.filter(menuObj => menuObj.type === "main").forEach(main=>{
        const foodDiv = document.createElement("div");
        foodDiv.setAttribute("class","food-item");
        foodDiv.innerHTML += `<h3 class="menu-item">${main.name}</h3><p class="description">${main.description}</p><p class="price">${main.price}</p>`
        mainDiv.appendChild(foodDiv);
    })

    const snacksDiv = document.createElement("div");

    const snacksH = document.createElement("h2");
    snacksH.innerText = "Snacks";
    snacksDiv.appendChild(snacksH);
    theMenu.filter(menuObj => menuObj.type === "snacks").forEach(snacks=>{
        const foodDiv = document.createElement("div");
        foodDiv.setAttribute("class","food-item");
        foodDiv.innerHTML += `<h3 class="menu-item">${snacks.name}</h3><p class="description">${snacks.description}</p><p class="price">${snacks.price}</p>`
        snacksDiv.appendChild(foodDiv);
    })

    const dessertDiv = document.createElement("div");
    const dessertH = document.createElement("h2");
    dessertH.innerText = "Desserts";
    dessertDiv.appendChild(dessertH);
    theMenu.filter(menuObj => menuObj.type === "dessert").forEach(dessert=>{
        const foodDiv = document.createElement("div");

        foodDiv.setAttribute("class","food-item");
        foodDiv.innerHTML += `<h3 class="menu-item">${dessert.name}</h3><p class="description">${dessert.description}</p><p class="price">${dessert.price}</p>`
        dessertDiv.appendChild(foodDiv);
    })
    
    divsContMenu.appendChild(mainDiv);
    divsContMenu.appendChild(snacksDiv);
    divsContMenu.appendChild(dessertDiv);
    contentDiv.appendChild(divsContMenu);
}

export default loadMenuPage;