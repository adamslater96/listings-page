import { FC } from "react";
import { useSelector } from "react-redux";
import { 
    selectMinPrice,  
    setMinPrice, 
    setMaxPrice, 
    selectMaxPrice, 
    setSortBy,
    setIsActiveCart,
    selectBurger,
    setIsActiveBurger,
    setColor,
} from "../../store/slices/menuSlice";
import { useTypeDispatch } from "../../store"
  
const Filters: FC = () => {
    const isBurgerActive = useSelector(selectBurger);
    const minPrice = useSelector(selectMinPrice);
    const maxPrice = useSelector(selectMaxPrice);
    const dispatch = useTypeDispatch();

    //Static search options
    const colorOptions = ["Black", "White", "Chrome", "Rose Gold"]
    
    const sortOptions = [
        {
          label: "Recommended",
          value: 1,
        },
        {
          label: "Price - Low to high",
          value: 2,
        },
        {
          label: "Price - High to low",
          value: 3,
        },
        {
          label: "Largest Discount",
          value: 4,
        },
    ];

    return (
    <section className="pt-[150px] md:pt-[100px] absolute top-0 right-0 w-full sm:w-1/2 h-full z-40 shadow-md border bg-white overflow-hidden" style={ isBurgerActive ? { display:'block'} : {display : 'none'} } >
        <div className="flex justify-end mr-6">
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
        <h2 className="text-lg text-center text-gray-600 mb-6 font-bold">Filters</h2>

        <div className="text-center text-gray-600">
            <h3 className="mb-4 font-semibold"><u>Price Range</u></h3>
            <div className="flex items-center justify-center">
                <div>
                    <i>£</i>
                    <input 
                        name="min-price"
                        placeholder="Min price"
                        value={ minPrice } 
                        onChange={(event) => dispatch(setMinPrice(Number(event.target.value)))}
                        type="string"
                        className={`border-2 rounded-md py-1 mx-1 px-1 text-black w-4/5`}
                    />
                </div>
                <p className="my-3">to:</p>
                <div>
                    <i>£</i>
                    <input 
                        name="max-price"
                        placeholder="Max price"
                        value={ maxPrice } 
                        onChange={(event) => dispatch(setMaxPrice(Number(event.target.value)))}
                        type="string"
                        className={`border-2 rounded-md py-1 mx-1 px-1 text-black w-4/5`}
                    />
                </div>
            </div>
            <h3 className="my-4 font-semibold"><u>Sort By</u></h3>
            <select className="border-2 rounded-md py-1 mx-1 px-1" name="sort-by" id="sortBy" onChange={(event) => dispatch(setSortBy(Number(event.target.value)))}>
                {sortOptions.map((option, key) => (
                    <option key={key} value={option.value}>{option.label}</option>
                ))}
            </select>
            <h3 className="my-4 font-semibold"><u>Colour</u></h3>
                <select className="border-2 rounded-md py-1 mx-1 px-1" name="colour" id="colour" onChange={(event) => {
                    dispatch(setColor(Number(event.target.value)))
                }}>
                {colorOptions.map((option: string, index: number) => (
                    <option key={index} value={index}>{option}</option>
                ))}
            </select>
        </div>
    </section>
    );
}
 
export default Filters;