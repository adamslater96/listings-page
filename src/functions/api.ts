import { useTypeDispatch } from "../store";
import { setFacets, setProducts } from "../store/slices/dataSlice"
import { Data } from "../types/sliceTypes"

interface Props {
    search: string, 
    minPrice: number, 
    maxPrice: number, 
    sortBy: number,
    color: number,
}

//POTENTIAL IMPROVEMENT: Change this to be a HOOK 

const FetchData = async ({search, minPrice, maxPrice, sortBy, color}: Props) => {
    const dispatch = useTypeDispatch();
    const colorArr = ["Black", "White", "Chrome", "Rose Gold"]
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
                "colour": [{
                    "value" : `${colorArr[color]}`
                }],
                
                // "colour": [{
                //     "identifier": "3F-CB-96-ED-6C-64-AB-3F",
                //     "value" : "Black" ${color?.value} 
                // }],
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
        console.log(error)
      }
    }

export default FetchData