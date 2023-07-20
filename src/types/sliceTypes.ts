//GENERAL TYPING FILE

//POTENTIAL IMPROVEMENT: Clean up and catergories typings, whilst also adding more comments in to explain each section of typing. If expansion of the project got past a certain point the each section of typings would be better in seperate files.

export type BasketState = {
    products: any,
    total: number,
}

export type Products = {
    id: string,
    image: Image,
    price: Price,
    productName: string,
    stockStatus: {status: string},
    brand: Brand,
    defaultCategory: DefaultCatergory,
}

export type Image = {
    attributes: {imageAltText: string},
    url: string,
}

export type DefaultCatergory = {
    isDefault: boolean,
    name: string,
    slug: string,
}

export type Brand = {
    brandImage: {
        externalId: string, 
        url: string, 
        priority: number, 
        isDefault: boolean, 
    },
    externalId: string,
    name: string,
    slug: string,
}

export type Price = {
    currencyCode: string,
    isOnPromotion: boolean,
    monthlyFinanceEstimate: number,
    priceExcTax: number,
    priceIncTax: number,
    wasPriceExcTax: number,
    wasPriceIncTax: number,
}

export interface Data  {
    facets: object[]
    products: []
}