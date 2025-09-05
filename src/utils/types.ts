export interface UserType {
    name: string,
    favouriteCategory: string | null,
    favouritReceipes: string[],
    image: string,
    email:string | number

}

export interface UserContextType {
    user: UserType | null,
    setUser: (user:UserType) => void
}

export interface NavItemsTyps {
    name: string,
    link: string,
    children?: {name:string; link: string}[];
}


export interface RecipDataType {
    image: string,
    name: string,
    rating: number
}

export interface RecipDataPopularType {
    image: string,
    name: string
}

export interface RecipDataCollectionType {
    image: string,
    link: string,
    recipe: string
}

export interface FooterItemsTyps {
    name: string,
    link: string

}
export interface FooterItemsLegalTyps {
    name: string,
    link: string

}
export interface FooterItemsFollowTyps{
    name: string,
    link: string

}