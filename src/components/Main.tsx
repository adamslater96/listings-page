import { FC } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../store/slices/dataSlice";
import { selectTerm } from "../store/slices/searchSlice";
import ProductCard from "./ProductCard";

//MAIN DISPLAY PAGE FOR FETCHED DATA

const Main: FC = () => {
    const products = useSelector(selectProducts);
    const searchTerm = useSelector(selectTerm)

    const capitilizeFirstLetter = (term: string) => {
        return term.charAt(0).toUpperCase() + searchTerm.slice(1)
    }

    return (
    <div className="px-6 pt-[150px]  md:pt-[100px] pb-3 h-full overflow-auto bg-secondary">
        <h2 className="text-center font-bold text-4xl">{capitilizeFirstLetter(searchTerm)}</h2>
        <div className="flex justify-center">
            <div className="flex justify-center gap-3 flex-wrap max-w-[1300px]">
                {products.length > 0 ? 
                    products.map((prod, key) => {
                        return <ProductCard prod={prod} key={key} />
                })
                :
                <div className="flex justify-center items-center w-full">
                    <p className="w-[350px] text-3xl text-gray-300 p-2 text-center font-semibold">Search here for all your plumbing related needs!</p>
                </div>
                }
            </div>
        </div>
    </div>
    );
}
 
export default Main;