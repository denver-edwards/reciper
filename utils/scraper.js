import axios from "axios";
import cheerio from "cheerio";
// supported sites
// allrecipes, tastesbetterfromscratch, foodandwine, tasty.co, seriouseats, epicurious, thespruceeats, incredibleegg, recipetineats, rachelcooks

// doesnt support
// delish, foodnetwork

const classNames = {
  title: [
    ".recipe-title",
    ".content-title",
    ".main-title",
    ".wprm-recipe-name",
    ".article-heading",
    ".o-AssetTitle__a-HeadlineText",
    ".recipe-name",
    ".heading__title",
    ".SplitScreenContentHeaderHed-lcUSuI",
    ".css-kc3jbx",
    ".recipe-header__title",
  ],
  ingredients: [
    ".ingredients-list",
    ".recipe-ul li",
    ".ingredients",
    ".wprm-recipe-ingredient",
    ".mntl-structured-ingredients__list-item",
    ".o-Ingredients__a-Ingredient--CheckboxLabel",
    ".ingredient",
    ".Description-cSrMCf",
    ".css-gpfiiw",
    ".structured-ingredients__list-item",
  ],
  instructions: [
    ".recipe-steps",
    ".instructions",
    ".wprm-recipe-instruction",
    ".comp .mntl-sc-block .mntl-sc-block-html",
    ".o-Method__m-Step",
    "ol.prep-steps li",
    ".kUNDwd p",
    ".css-1kxxcd1 ol>li",
    ".recipe-directions__list li+li",
  ],
};

export async function scrapeRecipe(url) {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    let title = "";
    let ingredients = [];
    let instructions = [];

    for (let className of classNames.title) {
      if ($(className).length) {
        title = $(className).text().trim();
        break;
      }
    }

    for (let className of classNames.ingredients) {
      if ($(className).length) {
        $(className).each((i, elem) => {
          ingredients.push($(elem).text().replace("▢", "").trim());
        });
        break;
      }
    }

    for (let className of classNames.instructions) {
      if ($(className).length) {
        $(className).each((i, elem) => {
          instructions.push($(elem).text().trim());
        });
        break;
      }
    }

    return {
      title,
      ingredients,
      instructions,
    };
  } catch (error) {
    console.error(`Error scraping recipe: ${error.message}`);
    return null;
  }
}
