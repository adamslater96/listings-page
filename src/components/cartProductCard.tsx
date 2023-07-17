import { useSelector } from "react-redux";
import { useTypeDispatch } from "../store";
import { removeProducts, selectProducts, } from "../store/slices/basketSlice";

const CartProductCard = ({product}: any) => {
    const cartProducts = useSelector(selectProducts);
    const dispatch = useTypeDispatch();  

    return (
        <div id={product?.id} className="flex items-center gap-4 shadow-md p-2 rounded-sm w-full">
        <img 
            src={product?.mainImage} 
            alt={product?.mainImageAlt} 
            className="w-[60px] mb-2"
        />
        <div className="w-full">
            <h3 className="text-sm leading-none mb-1 h-[40px] flex items-center">{product?.productName}</h3>
            <h2 className="text-sm font-bold leading-none mb-3">£{product?.priceIncTax}</h2>  

            <div className="">
                <button className="py-2 px-4 bg-primary rounded-full text-white mb-3 w-[100px] hover:scale-125" onClick={() => {
                    cartProducts.filter((prod: any) => {
                        if(prod.payload.id === product.id) {
                            dispatch(removeProducts(prod.payload.id))
                        }
                    })
                }}>Remove</button>
            </div>

            <div className="flex justify-end">
                {product?.status === 'G' ? 
                    <div className="flex gap-2 items-center">
                        <img className="w-[15px]" src={require("../assets/images/green-check.png")}/> 
                        <span className="text-xs">In Stock</span>
                    </div>
                :
                    <p className="text-red">OUT OF STOCK</p>
                }
            </div>
        </div>
    </div>
    );
}
 
export default CartProductCard;