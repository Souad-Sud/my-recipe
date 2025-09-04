import CategoriesRecipe from "../CategoriesRecipe";

export default async function CategoriesPage() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
    cache: "no-store",
  });
  const json = await res.json();
  const categories = json.categories;

  return <CategoriesRecipe categories={categories} />;
}
