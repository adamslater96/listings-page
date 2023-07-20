import { FC, useEffect } from "react";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { 
    selectBurger,
    selectCart, 
} from "../../store/slices/menuSlice";
import Cart from "./Cart";

//If both filters and cart components were combined then logic here could potentially be simplified

//POTENTIAL IMPROVEMENT: adding in a total price by looping through the active pricing on each item in the cart
  
const Menu: FC = () => {
    const isCartActive = useSelector(selectCart);
    const isBurgerActive = useSelector(selectBurger);

    useEffect(() => {

    }, [isCartActive])
    return (
        <>
        {isCartActive && <Cart />}
        {isBurgerActive && <Filters />}
        </>
    );
}
 
export default Menu;