import { useTypeDispatch } from "../store";
import { setFacets, setProducts } from "../store/slices/dataSlice"
import { Data } from "../types/sliceTypes"

const FetchData = async ({search, minPrice, maxPrice, sortBy}: any) => {
    const dispatch = useTypeDispatch();
    try {
        const response = await fetch(
        "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
        {
            method: "post",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            "query": `${search}`,
            "pageNumber": 0,
            "size": 0,
            "additionalPages": 0,
            "sort": `${sortBy}`,
            "facets": {
                "prices": [{
                    "value": {
                        "gte": `${minPrice > 0 ? minPrice : ''}`,
                        "lte": `${maxPrice > 0 ? maxPrice : '' }`
                        }
                    }],
            }
            })
        }
        )
        const data: Data = await response.json()
        if(data){
            dispatch(setProducts(data.products))
            dispatch(setFacets(data.facets))
        }
    } catch (error) {
        //console.log(error)
      }
    }

export default FetchData