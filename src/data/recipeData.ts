import { RecipDataCollectionType, RecipDataPopularType, RecipDataType } from "@/utils/types";

 export const RecipData:RecipDataType[] = [
     {
        image: "/RecipeSectionImg/menu2.jpg", name: "Spinach and Cheese Pasta", rating: 5
     },
    {
        image: "/RecipeSectionImg/menu3.jpg", name: "Fancy Glazed Donuts", rating: 3
     },
    {
        image: "/RecipeSectionImg/menu4.jpg" , name: "Mighty cheesy Breakfast Burger", rating: 4
     },
]


 export const RecipDataSweet:RecipDataType[] = [
     {
        image: "/RecipeSectionSweetImg/menu5.jpg", name: "Caramel Strawberry Milkshake", rating: 5
     },
    {
        image: "/RecipeSectionSweetImg/menu6.jpg", name: "Chocolate and Banana Jar Cake", rating: 5
     },
    {
        image: "/RecipeSectionSweetImg/menu7.jpg" , name: "Berry Maddness Biscuts", rating: 5
     },
]

 export const RecipDataPopular:RecipDataPopularType[] = [
     {
        image: "/RecipePopularImg/menu8.png", name: "Pasta"
     },
    {
        image: "/RecipePopularImg/menu9.png", name: "Pizza"
     },
    {
        image: "/RecipePopularImg/menu10.png" , name: "Vegan"
     },
       {
        image: "/RecipePopularImg/menu11.png" , name: "Desserts" 
     },
       {
        image: "/RecipePopularImg/menu12.png" , name: "Smoothies" 
     },
       {
        image: "/RecipePopularImg/menu13.png" , name: "Breakfast"
     },
]

 export const RecipDDataCollection:RecipDataCollectionType[] = [
     {
        image: "/HandCollectionImg/cake-img7.jpg", link: "Delicious cakes", recipe: "Recippe"
     },
    {
        image: "/HandCollectionImg/cupcakes-img6.jpg", link: "Chocolate Cupcake", recipe: "Recippe"
     },
    {
        image: "/HandCollectionImg/eclair-img4.jpg" , link: "Classic french Eclair", recipe: "Recippe"
     },
       {
        image: "/HandCollectionImg/fish-img8.png" , link: "Grilled Fish with  lemon", recipe: "Recippe"
     },
       {
        image: "/HandCollectionImg/mochi-img5.png" , link: "Orange Mochi", recipe: "Recippe" 
     },
       {
        image: "/HandCollectionImg/pretzel-img1.jpg" , link: "German pretzels", recipe: "Recippe"
     },
         {
        image: "/HandCollectionImg/sausage-roll-img3.jpg" , link: "Sausage Roll", recipe: "Recippe"
     },
         {
        image: "/HandCollectionImg/strawberry-roll-img2.jpg" , link: "Strawberry Roll cake", recipe: "Recippe"
     },
      {
        image: "/HandCollectionImg/delicious-dessert-millefeuille-Img9.jpg" , link: "Mille feuille dessert", recipe: "Recippe"
     },
]

// connected to the user 
export const Recipes = [
  { id: 1, title: "Caramel Strawberry Milkshake", image: "/ProfileCollection/img1.jpg" },
  { id: 2, title: "Fancy Glazed Donuts", image: "/ProfileCollection/img2.jpg" },
  { id: 3, title: "Chocolate and Banan Jar Cake", image: "/ProfileCollection/img3.jpg" },
  { id: 4, title: "Fancy Glazed Donuts", image: "/ProfileCollection/img4.jpg" },
  { id: 5, title: "Chocolate and Banan Jar Cake", image: "/ProfileCollection/img5.jpg" },
  { id: 6, title: "Fancy Glazed Donuts", image: "/ProfileCollection/img6.jpg" },
  { id: 7, title: "Chocolate and Banan Jar Cake", image: "/ProfileCollection/img7.jpg" },
];