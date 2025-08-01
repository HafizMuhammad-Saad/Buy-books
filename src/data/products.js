export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback mock data
    return [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 }
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 }
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 }
      },
      {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 }
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 }
      }
    ];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ["electronics", "jewelery", "men's clothing", "women's clothing"];
  }
};
