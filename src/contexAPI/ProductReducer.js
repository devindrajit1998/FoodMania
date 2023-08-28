const ProductReducer = (state, action) => {
  switch (action.type) {
    case "BURGER_FILTER":
      const burgerData = action.payload.filter((burger) => {
        return burger.category === "Burgers";
      });
      return {
        ...state,
        showBurgers: burgerData,
      };
    case "FRI_FILTER":
      const friData = action.payload.filter((fri) => {
        return fri.category === "Fries";
      });
      return {
        ...state,
        showFries: friData,
      };
    case "DRINKS_FILTER":
      const drinkData = action.payload.filter((drink) => {
        return drink.category === "Drinks";
      });
      return {
        ...state,
        showDrinks: drinkData,
      };
    case "CHICKEN_FILTER":
      const chickenData = action.payload.filter((chicken) => {
        return chicken.category === "Chicken";
      });
      return {
        ...state,
        showChicken: chickenData,
      };
    case "DESSERT_FILTER":
      const desData = action.payload.filter((des) => {
        return des.category === "Desserts";
      });
      return {
        ...state,
        showDesserts: desData,
      };
    case "PIZZA_FILTER":
      const pizzaData = action.payload.filter((pizza) => {
        return pizza.category === "Pizza";
      });
      return {
        ...state,
        showPizza: pizzaData,
      };
    case "SALAD_FILTER":
      const saladData = action.payload.filter((salad) => {
        return salad.category === "Salads";
      });
      return {
        ...state,
        showSalad: saladData,
      };
    case "SANDWITCH_FILTER":
      const sandData = action.payload.filter((sand) => {
        return sand.category === "Sandwiches";
      });
      return {
        ...state,
        showSandwitch: sandData,
      };
    case "WRAP_FILTER":
      const wrapData = action.payload.filter((wrap) => {
        return wrap.category === "Wraps";
      });
      return {
        ...state,
        showWrap: wrapData,
      };
    case "BARBIQUE_FILTER":
      const barbiData = action.payload.filter((barbi) => {
        return barbi.category === "Berbique";
      });
      return {
        ...state,
        showBarbique: barbiData,
      };

    default:
      return state;
  }
};

export default ProductReducer;
