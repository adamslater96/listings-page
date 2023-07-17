import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useTypeDispatch } from "../store"
import { 
    selectTerm, 
    setTerm,
} from "../store/slices/searchSlice"
import { selectMaxPrice, selectMinPrice, selectSortBy } from "../store/slices/menuSlice"
import fetchData from "../functions/api"

const SearchBar = () => {
    const dispatch = useTypeDispatch();
    let search = useSelector(selectTerm);
    const minPrice = useSelector(selectMinPrice);
    const maxPrice = useSelector(selectMaxPrice);
    const sortBy = useSelector(selectSortBy);
    
    fetchData({search, minPrice, maxPrice, sortBy})

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

    const handleInputChange = (event: any) => { 
        dispatch(setTerm(event.target.value))
    }
    useEffect(() => {
    
    }, [search, minPrice, maxPrice, sortBy])
    return (
    <div className="flex items-center gap-4">
        <h3 className="my-4 font-semibold">Search</h3>
        <select className="w-full border-2 rounded-md py-1 px-2 text-black" name="sort-by" id="sortBy" onChange={(event) => handleInputChange(event)}>
            {searchOptions.map((option, key) => (
                <option key={key} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
    );
}
export default SearchBar;