export default class Category {
  id: string;
  title: string;
  icon: string;
  products: number;

  constructor(id: string, title: string, icon: string, products: number) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.products = products;
  }
}

export const FeaturedCategoriesCard = [
  new Category("1", "Electronics", "electronics", 16),
  new Category("2", "Tools", "hammer", 20),
  new Category("3", "Events", "party", 27),
  new Category("4", "Outdoor", "tent", 29),
  new Category("5", "Fashion", "dress", 54),
];
