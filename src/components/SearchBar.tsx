import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useTypeDispatch } from "../store"
import { 
    selectTerm, 
    setTerm,
} from "../store/slices/searchSlice"
import { 
    selectColor,
    selectMaxPrice, 
    selectMinPrice, 
    selectSortBy,
} from "../store/slices/menuSlice"
import fetchData from "../functions/api"

const SearchBar = () => {
    const dispatch = useTypeDispatch();
    let search = useSelector(selectTerm);
    const minPrice = useSelector(selectMinPrice);
    const maxPrice = useSelector(selectMaxPrice);
    const sortBy = useSelector(selectSortBy);
    const color = useSelector(selectColor);
    
    fetchData({search, minPrice, maxPrice, sortBy, color})

    //Static search options
    const searchOptions = [
        {
            label: "",
        },
        {
          label: "Toilets",
          value: "toilets",
        },
        {
          label: "Showers",
          value: "showers"
        },
        {
          label: "Baths",
          value: "baths",
        },
        {
          label: "Basins",
          value: "basins",
        },
        {
            label: "Taps",
            value: "taps",
        },
        {
            label: "Tiles",
            value: "tiles",
        },
    ];
    useEffect(() => {
    
    }, [search])
    return (
    <div className="flex items-center gap-4">
        <h3 className="my-4 font-semibold text-white">Search</h3>
        <select className="w-full border-2 rounded-md py-1 px-2 text-black" name="sort-by" id="sortBy" onChange={(event) => dispatch(setTerm(event.target.value))}>
            {searchOptions.map((option, key) => (
                <option key={key} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
    );
}
export default SearchBar;