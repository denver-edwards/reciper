import { scrapeRecipe } from "@/utils/scraper";

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const recipe = await scrapeRecipe(url);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to scrape the recipe" });
  }
}
