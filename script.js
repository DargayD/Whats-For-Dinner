var fruitsArray = [
    { name: 'Hawaiian Burger', image: 'images/hawaiianBurger.jpg' }, 
    { name: 'Grilled Chicken & Strawberry Salad Wrap', image: 'images/chickenWrap.jpg' },
    { name: 'BBQ Meatball Subs', image: 'images/meatBallSub.jpg' },
    { name: 'Homemade Chicken Burgers', image: 'images/chickenBurger.jpg' },
    { name: 'Goulash', image: 'images/goulash.jpg' },
    { name: 'Chicken Parmesan', image: 'images/chickenParm.jpg' },
    { name: 'Stuffed Pepper Soup', image: 'images/pepperSoup.jpg' },
    { name: 'Stuffed Zucchini', image: 'images/stuffedZucchini.jpg' },
    { name: 'Huevos Rancheros', image: 'images/huevosRancheros.jpg' }
  ];

function randomFood() {
    var fruit = fruitsArray[Math.floor(Math.random()*fruitsArray.length)];
    recipe.innerHTML = fruit.name + '<img src="'+fruit.image+'">';

    
    switch (fruit.name) {
        case "Hawaiian Burger":
            details.innerHTML = "<img src='images/hawaiianBurgerDetails.jpg'/>";
        break;
        case "Grilled Chicken & Strawberry Salad Wrap":
            details.innerHTML = "<img src='images/chickenWrapDetails.jpg'/>";
        break;
        case "BBQ Meatball Subs":
            details.innerHTML = "<img src='images/meatBallSubDetails.jpg'/>";
        break;
        case "Homemade Chicken Burgers":
            details.innerHTML = "<img src='images/chickenBurgerDetails.jpg'/>";
        break;
        case "Goulash":
            details.innerHTML = "<img src='images/goulashDetails.jpg'/>";
        break;
        case "Chicken Parmesan":
            details.innerHTML = "<img src='images/chickenParmDetails.jpg'/>";
        break;
        case "Stuffed Pepper Soup":
            details.innerHTML = "<img src='images/pepperSoupDetails.jpg'/>";
        break;
        case "Stuffed Zucchini":
            details.innerHTML = "<img src='images/stuffedZucchiniDetails.jpg'/>";
        break;
        case "Huevos Rancheros":
            details.innerHTML = "<img src='images/huevosRancherosDetails.jpg'/>";
        break;
    }
}

