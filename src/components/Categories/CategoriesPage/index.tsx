import CategoriesRecipe from "../CategoriesRecipe";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export default async function CategoriesPage() {
  let categories: Category[] = [];

  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
      {
        cache: "no-store",
        headers: { Accept: "application/json" }, 
      }
    );

    const text = await res.text();

    if (!res.ok) {
      console.error("Failed to fetch categories:", text);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    try {
      const json = JSON.parse(text); 
      categories = json.categories || [];
    } catch (parseErr) {
      console.error("Failed to parse JSON:", parseErr, text);
    }
  } catch (err) {
    console.error("Error fetching categories:", err);
  }

  if (categories.length === 0) {
    return (
      <div>
        <h1>Categories</h1>
        <p>Could not load categories. Please try again later.</p>
      </div>
    );
  }

  return <CategoriesRecipe categories={categories} />;
}
