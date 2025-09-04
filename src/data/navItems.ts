import { NavItemsTyps  } from "@/utils/types";

 export const NavItems: NavItemsTyps[] = [
     {
          name: "Home Page", link: "/"
     },
     {
          name: "Recipe Page", link: "/recipe"
     },
     {
          name: "Categories", link: "/categories", children: [
               {name: "Beef", link: "/categories/beef"},
               {name: "Chicken", link: "/categories/chicken"},
               {name: "Dessert", link: "/categories/dessert"},
               {name: "Lamb", link: "/categories/lamb"},
               {name: "Pasta", link: "/categories/pasta"},
               {name: "Seafood", link: "/categories/seafood"},

          ]
     },
     {
          name: "Elements", link: "/elements"
     },
     {
          name: "LogIn", link: "/logIn"
     },

         {
          name: "Profile", link: "/profile"
     },
 ]