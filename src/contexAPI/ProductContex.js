import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./ProductReducer";
import DishAPI from "../API/DishAPI";

const ProductContex = createContext();

const ProductProvider = ({ children }) => {
  const productData = DishAPI;

  const initialStage = {
    showBurgers: [],
    showFries: [],
    showDrinks: [],
    showChicken: [],
    showDesserts: [],
    showPizza: [],
    showSalad: [],
    showSandwitch: [],
    showWrap: [],
    showBarbique: [],
  };
  const [state, dispatch] = useReducer(reducer, initialStage);

  const [filterCategory, setFilterCategory] = useState(productData);
  console.log(filterCategory);

  // filter functions
  useEffect(() => {
    dispatch({ type: "BURGER_FILTER", payload: productData });
    dispatch({ type: "FRI_FILTER", payload: productData });
    dispatch({ type: "DRINKS_FILTER", payload: productData });
    dispatch({ type: "CHICKEN_FILTER", payload: productData });
    dispatch({ type: "DESSERT_FILTER", payload: productData });
    dispatch({ type: "PIZZA_FILTER", payload: productData });
    dispatch({ type: "SALAD_FILTER", payload: productData });
    dispatch({ type: "SANDWITCH_FILTER", payload: productData });
    dispatch({ type: "WRAP_FILTER", payload: productData });
    dispatch({ type: "BARBIQUE_FILTER", payload: productData });
  }, []);

  const showAll = () =>{
    setFilterCategory(productData)
  }

  const filterBurger = () => {
    setFilterCategory(state.showBurgers);
  };
  const filterFri = () => {
    setFilterCategory(state.showFries);
  };
  const filterDrinks = () => {
    setFilterCategory(state.showDrinks);
  };
  const filterChicken = () => {
    setFilterCategory(state.showChicken);
  };
  const filterDesserts = () => {
    setFilterCategory(state.showDesserts);
  };
  const filterPizza = () => {
    setFilterCategory(state.showPizza);
  };
  const filterSalads = () => {
    setFilterCategory(state.showSalad);
  };
  const filterSandwiches = () => {
    setFilterCategory(state.showSandwitch);
  };
  const filterWraps = () => {
    setFilterCategory(state.showWrap);
  };
  const filterBerbique = () => {
    setFilterCategory(state.showBarbique);
  };

  // useEffect(() => {
  //   setFilterCategory(state.showBurgers);
  // }, []);

  return (
    <ProductContex.Provider
      value={{
        productData,
        showAll,
        filterBurger,
        filterFri,
        filterDrinks,
        filterChicken,
        filterDesserts,
        filterPizza,
        filterSalads,
        filterSandwiches,
        filterWraps,
        filterBerbique,
        filterCategory,
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContex);
};
export { ProductContex, ProductProvider, useProductContext };
