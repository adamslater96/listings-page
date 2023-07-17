import { setIsActiveCart, selectCart, selectBurger, setIsActiveBurger } from "../store/slices/menuSlice";
import { useSelector } from "react-redux";
import {useTypeDispatch} from "../store/index";
import { FC } from "react";
import SearchBar from "./SearchBar";
import { selectProducts } from "../store/slices/basketSlice";

const Header: FC = () => {
    let isCartActive = useSelector(selectCart);
    let isBurgerActive = useSelector(selectBurger);
    const cartProducts = useSelector(selectProducts);
    const dispatch = useTypeDispatch();

    return (
        <header id="header" className="fixed w-full z-50">
            <div 
                className="text-white bg-primary flex justify-between items-center px-6 py-3 w-full"
            >
                <div className="text-center">
                    <div className="flex items-center">
                        <span className="font-bold text-3xl">X</span>
                        <h1 className="font-bold leading-none text-center">
                            Victorious<br/>
                            Plumbing
                        </h1>
                    </div>
                    <em>The UK's #2!</em>
                </div>
                <div className="hidden sm:block w-1/3"><SearchBar /></div>
                <div className="flex items-center gap-3">
                    <button 
                        className="w-[30px] md:w-[40px]"
                        onClick={() => {
                            dispatch(setIsActiveBurger(false))
                            dispatch(setIsActiveCart(!isCartActive))
                        }}
                    >
                        <div className="relative">
                            <img 
                                src={require('../assets/images/cart.png')} 
                                alt="Burger Icon" 
                                className="hover:scale-125 w-100"
                            />
                            <span className="absolute bottom-0 right-0 px-1 bg-red text-sm rounded-full">{cartProducts.length > 0 ? cartProducts.length : ""}</span>
                        </div>
                    </button>
                    <button 
                        className="w-[20px] md:w-[30px]"
                        onClick={() => {
                            dispatch(setIsActiveCart(false))
                            dispatch(setIsActiveBurger(!isBurgerActive))
                        }}
                    >
                        <img 
                            src={require('../assets/images/filter.png')} 
                            alt="Burger Icon" 
                            className="hover:scale-125"
                        />
                    </button>
                </div>
            </div>
            <div className="block sm:hidden w-full bg-primary pb-2 px-6"><SearchBar /></div>
        </header>
    );
}
 
export default Header;