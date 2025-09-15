import { NavItemsTyps  } from "@/utils/types";

 export const NavItems: NavItemsTyps[] = [
     {
          name: "Home Page", link: "/"
     },
     {
          name: "Recipe Page", link: "/recipe"
     },
     {
          // the children are empty array that it will be filed by data from API
          name: "Categories", link: "/categories", children: [],
     },
     {
          name: "Areas", link: "/areas"
     },
     {
          name: "LogIn", link: "/logIn"
     },
     {
          name: "Profile", link: "/profile"
     },
 ]