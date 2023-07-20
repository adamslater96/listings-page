import { setProducts } from "../store/slices/basketSlice";
import { useTypeDispatch } from "../store"

let arr: [object]

interface CurrentProd {
    mainImage: string,
    mainImageAlt: string,
    brandImage: string,
    brandName: string,
    productName: string,
    priceIncTax: number,
    status: string,
    id: string,
};

//POTENTIAL IMPROVEMENT: Given more time i think it would be ab extremely viable option to combine ProductCard.tsx and cartProductCard.ts to be a dynamic component that would work in both the cart and the main page.

const ProductCard = ({prod}: any) => {
    const dispatch = useTypeDispatch();

    const currentProd: CurrentProd = {
        mainImage: prod.image.url,
        mainImageAlt: prod.image.attributes.imageAltText,
        brandImage: prod.brand.brandImage.url,
        brandName: prod.brand.name,
        productName: prod.productName,
        priceIncTax: prod.price.priceIncTax,
        status: prod.stockStatus.status,
        id: prod.id,
    }
    
    return (
    <div id={prod?.id} className="border w-[300px] shadow-md flex flex-col items-center my-4 bg-white">
        <img 
            src={prod?.image.url} 
            alt={prod?.image.attributes.imageAltText}
            className="w-full"
        />
        <div className="p-4 w-full">
            <img 
                src={prod?.brand.brandImage.url} 
                alt={prod?.brand.name} 
                className="w-[60px] mb-2"
            />
            <div>
                <h3 className="text-sm leading-none mb-1 h-[40px] flex items-center">{prod?.productName}</h3>
                <h2 className="text-lg font-bold leading-none mb-3">£{prod?.price.priceIncTax}</h2>  


                {/* POTENTIAL IMPROVEMENT: adding a ternary statement for the button text context. If already in cart the word will read "Added (tick icon)" If not it would then default display "Add to cart" */}
                <button className="py-2 px-4 bg-primary rounded-full text-white hover:scale-125 mb-3" onClick={() => {
                    arr = [currentProd]
                    dispatch(setProducts(...arr))
                }}>Add To Cart</button>
                <div className="flex justify-end">
                    {prod?.stockStatus.status === 'G' ? 
                        <div className="flex gap-2 items-center">
                            <img className="w-[30px]" alt="In Stock" src={require("../assets/images/green-check.png")}/> 
                            <span>In Stock</span>
                        </div>
                    :
                        <p className="text-red">OUT OF STOCK</p>
                     }
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default ProductCard;