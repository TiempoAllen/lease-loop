import { PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Bag 1",
      description: "Description for Bag 1",
      price: 19.99,
      imgUrl: "/products/bag1.jpg",
      category: "Fashion",
      slug: "bag-1",
    },
    {
      name: "Bag 2",
      description: "Description for Bag 2",
      price: 29.99,
      imgUrl: "/products/bag2.jpg",
      category: "Fashion",
      slug: "bag-2",
    },
    {
      name: "Bag 3",
      description: "Description for Bag 3",
      price: 39.99,
      imgUrl: "/products/bag3.jpg",
      category: "Fashion",
      slug: "bag-3",
    },
    {
      name: "Bag 4",
      description: "Description for Bag 4",
      price: 49.99,
      imgUrl: "/products/bag4.jpg",
      category: "Fashion",
      slug: "bag-4",
    },
    {
      name: "Bag 5",
      description: "Description for Bag 5",
      price: 59.99,
      imgUrl: "/products/bag5.jpg",
      category: "Fashion",
      slug: "bag-5",
    },
    {
      name: "Bike",
      description: "Description for Bike",
      price: 69.99,
      imgUrl: "/products/bike1.jpg",
      category: "Outdoor",
      slug: "bike",
    },
    {
      name: "Camping 1",
      description: "Description for Camping 1",
      price: 19.99,
      imgUrl: "/products/camping1.jpg",
      category: "Outdoor",
      slug: "camping-1",
    },
    {
      name: "Camping 2",
      description: "Description for Camping 2",
      price: 89.99,
      imgUrl: "/products/camping2.jpg",
      category: "Outdoor",
      slug: "camping-2",
    },
    {
      name: "Chair",
      description: "Description for Chair",
      price: 99.99,
      imgUrl: "/products/chair1.jpg",
      category: "Events",
      slug: "chair",
    },
    {
      name: "Dress 10",
      description: "Description for Dress 10",
      price: 109.99,
      imgUrl: "/products/dress1.jpg",
      category: "Fashion",
      slug: "dress-10",
    },
    {
      name: "Dress 11",
      description: "Description for Dress 11",
      price: 119.99,
      imgUrl: "/products/dress2.jpg",
      category: "Fashion",
      slug: "dress-11",
    },
    {
      name: "Dress 12",
      description: "Description for Dress 12",
      price: 129.99,
      imgUrl: "/products/dress3.jpg",
      category: "Fashion",
      slug: "dress-12",
    },
    {
      name: "Gadget-13",
      description: "Description for Gadget-13",
      price: 139.99,
      imgUrl: "/products/gadget1.jpg",
      category: "Electronics",
      slug: "gadget-13",
    },
    {
      name: "Gadget-14",
      description: "Description for Gadget-14",
      price: 149.99,
      imgUrl: "/products/gadget2.jpg",
      category: "Electronics",
      slug: "gadget-14",
    },
    {
      name: "Gadget-15",
      description: "Description for Gadget-15",
      price: 159.99,
      imgUrl: "/products/gadget3.jpg",
      category: "Electronics",
      slug: "gadget-15",
    },
    {
      name: "Sports-16",
      description: "Description for Sports-16",
      price: 169.99,
      imgUrl: "/products/music1.jpg",
      category: "Outdoor",
      slug: "sports-16",
    },
    {
      name: "Sports-17",
      description: "Description for Sports-17",
      price: 179.99,
      imgUrl: "/products/music2.jpg",
      category: "Outdoor",
      slug: "sports-17",
    },
    {
      name: "Sports-18",
      description: "Description for Sports-18",
      price: 189.99,
      imgUrl: "/products/sports1.jpg",
      category: "Outdoor",
      slug: "sports-18",
    },
    {
      name: "Sports-19",
      description: "Description for Sports-19",
      price: 199.99,
      imgUrl: "/products/sports2.jpg",
      category: "Outdoor",
      slug: "sports-19",
    },
    {
      name: "Sports-20",
      description: "Description for Sports-20",
      price: 209.99,
      imgUrl: "/products/sports3.jpg",
      category: "Outdoor",
      slug: "sports-20",
    },
    {
      name: "Sports-21",
      description: "Description for Sports-21",
      price: 219.99,
      imgUrl: "/products/sports4.jpg",
      category: "Outdoor",
      slug: "sports-21",
    },
    {
      name: "Suit-22",
      description: "Description for Suit-22",
      price: 229.99,
      imgUrl: "/products/suit1.jpg",
      category: "Fashion",
      slug: "suit-22",
    },
    {
      name: "Suit-23",
      description: "Description for Suit-23",
      price: 239.99,
      imgUrl: "/products/suit2.jpg",
      category: "Fashion",
      slug: "suit-23",
    },
    {
      name: "Tools-24",
      description: "Description for Tools-24",
      price: 249.99,
      imgUrl: "/products/tools1.jpg",
      category: "Tools",
      slug: "tools-24",
    },
    {
      name: "Tools-25",
      description: "Description for Tools-25",
      price: 259.99,
      imgUrl: "/products/tools2.jpg",
      category: "Tools",
      slug: "tools-25",
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("🌱 Seed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
