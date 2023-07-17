import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { 
    selectCart, 
    setIsActiveBurger, 
    setIsActiveCart,
} from "../../store/slices/menuSlice";
import { useTypeDispatch } from "../../store"
import { 
    selectProducts, 
} from "../../store/slices/basketSlice";
import CartProductCard from "../cartProductCard";
  
const Menu: FC = () => {
    const isCartActive = useSelector(selectCart);
    const cartProducts = useSelector(selectProducts);
    const dispatch = useTypeDispatch();

    return (
    <section className="pt-[130px] sm:pt-[90px] absolute top-0 right-0 w-full sm:w-1/2 h-full z-40 shadow-md border bg-white overflow-hidden" style={ isCartActive ? { display:'block'} : {display : 'none'} }>
        <div className="flex justify-end items-center px-6">
            <span 
                className="text-lg cursor-pointer"
                onClick={() => {
                    dispatch(setIsActiveBurger(false))
                    dispatch(setIsActiveCart(false))
                }}
            >
                X
            </span>
        </div>
        <h2 className="text-lg text-center text-gray-600 mb-6 font-bold">Cart</h2>

        <div className="px-6 pb-3 overflow-scroll h-4/5 flex justify-center gap-3 flex-wrap">
            {cartProducts.length > 0 ? 
                (
                    cartProducts.map((prod: any, key: number) => {
                        const product = prod.payload
                        return <CartProductCard product={product} key={key} />
                    })
                )
            :
                <div className="flex justify-center items-center w-full">
                    <p className="w-[200px] text-3xl text-gray-300 p-2 text-center">Your cart is empty.</p>
                </div>
            }
        </div>
    </section>
    );
}
 
export default Menu;