import CategoriesPage from "@/components/Categories/CategoriesPage";
import JoinComponent from "@/components/JoinComponent";
import MainInformation from "@/components/MainInformation";
import RecipePopular from "@/components/RecipComponent/RecipePopular";
import RecipSection from "@/components/RecipComponent/RecipeSection";
import RecipeSectionSweet from "@/components/RecipComponent/RecipeSectionSweet";
import HandCollection from "@/components/RecipComponent/HandCollection";

// import { useUserContext } from "@/utils/contexts";
// import { UserContextType } from "@/utils/types";

export default function Home() {
  // const { user } = useUserContext() as UserContextType;
  // const API_ENDPOINT: string = "https//www.themealdb.com/api/json/v1/1/";
  // const getCategoryReceipes = () => {};
  // const getRandomRecipe = async () => {
  //   try {
  //     const response = await fetch(`${API_ENDPOINT}.random.php`);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="homepage">
      <MainInformation />
      <RecipSection />
      <RecipeSectionSweet />
      <RecipePopular />
      <JoinComponent />
      <HandCollection />
      <CategoriesPage />
      
      {/* <RandomRecipe /> */}

      {/* <h1>Welcome to my website</h1>
      <p>{user?.name}</p>
      <p>{user?.favouriteCategory ? "Category" : "No category"}</p> */}
    </div>
  );
}
