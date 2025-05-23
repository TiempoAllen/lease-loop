export default class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  category: string;
  slug: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    category: string,
    slug: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.category = category;
    this.slug = slug;
  }
}
