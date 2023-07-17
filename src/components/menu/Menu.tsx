import { FC, useEffect } from "react";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { 
    selectBurger,
    selectCart, 
} from "../../store/slices/menuSlice";
import Cart from "./Cart";
  
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