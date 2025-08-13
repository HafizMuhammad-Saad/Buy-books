// Your own product data - Educational Books and Materials
export const localProducts = [
  {
    id: 1,
    title: "Brainy Builder A3 - Complete Set",
    price: 299.99,
    image: "/a3/Brainy Builder a3/Artboard 4.jpg",
    level: "A3",
    category: "workbook",
    description: "Comprehensive A3 workbook set covering all essential topics for grade 3 students with engaging activities and colorful illustrations."
  },
  {
    id: 2,
    title: "Mathematics 1-7 Series",
    price: 199.99,
    image: "/a3/maths 1-7/Artboard 1 copy.jpg",
    level: "1-7",
    category: "mathematics",
    description: "Complete mathematics series from grade 1 to 7 with progressive learning approach and practical examples."
  },
  {
    id: 3,
    title: "Science Explorer 1-7",
    price: 249.99,
    image: "/a3/science 1-7/Artboard 1.jpg",
    level: "1-7",
    category: "science",
    description: "Interactive science series covering physics, chemistry, and biology with hands-on experiments and real-world applications."
  },
  {
    id: 4,
    title: "A4 Art Concept Series",
    price: 179.99,
    image: "/a4/Art Concept Title/Artboard 1.jpg",
    level: "A4",
    category: "art",
    description: "Creative art workbook series designed to enhance artistic skills and creative thinking for grade 4 students."
  },
  {
    id: 5,
    title: "Islamiat Studies A4",
    price: 159.99,
    image: "/a4/Islamiat Title/Artboard 4.jpg",
    level: "A4",
    category: "islamiat",
    description: "Comprehensive Islamic studies workbook covering Quran, Hadith, and Islamic history for grade 4 students."
  },
  {
    id: 6,
    title: "English Readers Collection",
    price: 129.99,
    image: "/a4/readers/Artboard 1.jpg",
    level: "A4",
    category: "readers",
    description: "Engaging English reader series with phonics, vocabulary building, and comprehension exercises."
  },
  {
    id: 7,
    title: "Urdu Readers Collection",
    price: 129.99,
    image: "/a4/readers/Urdu back.jpg",
    level: "A4",
    category: "readers",
    description: "Comprehensive Urdu reader series with poetry, stories, and language exercises for grade 4 students."
  },
  {
    id: 8,
    title: "Workbook Collection A3",
    price: 349.99,
    image: "/a3/workbook/Artboard 1.jpg",
    level: "A3",
    category: "workbook",
    description: "Complete A3 workbook collection covering all subjects with practice exercises and assessment tools."
  },
  {
    id: 9,
    title: "Mathematics Practice Book 1-7",
    price: 89.99,
    image: "/a3/maths 1-7/Artboard 9.jpg",
    level: "1-7",
    category: "mathematics",
    description: "Additional practice book for mathematics with challenging problems and detailed solutions."
  },
  {
    id: 10,
    title: "Science Lab Manual 1-7",
    price: 119.99,
    image: "/a3/science 1-7/Artboard 2.jpg",
    level: "1-7",
    category: "science",
    description: "Hands-on science lab manual with step-by-step experiments and safety guidelines."
  },
  {
    id: 11,
    title: "Brainy Builder Workbook Set",
    price: 399.99,
    image: "/a3/Brainy Builder a3/Artboard 4 copy.jpg",
    level: "A3",
    category: "workbook",
    description: "Premium workbook set with laminated pages and interactive learning tools for grade 3."
  },
  {
    id: 12,
    title: "Art & Craft Activity Book A4",
    price: 149.99,
    image: "/a4/Art Concept Title/Artboard 1 copy.jpg",
    level: "A4",
    category: "art",
    description: "Creative art and craft activity book with supplies and step-by-step instructions."
  }
];

// Categories based on your educational content
export const localCategories = [
  "workbook",
  "mathematics", 
  "science",
  "art",
  "islamiat",
  "readers"
];

// Replace API calls with local data
export const fetchProducts = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return localProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    return localProducts; // Always return local data as fallback
  }
};

export const fetchProductById = async (id) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return localProducts.find(product => product.id === id) || null;
  } catch (error) {
    console.error('Error loading product:', error);
    return localProducts.find(product => product.id === id) || null;
  }
};

export const fetchCategories = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return localCategories;
  } catch (error) {
    console.error('Error loading categories:', error);
    return localCategories;
  }
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return localProducts.filter(product => product.category === category);
};

// Helper function to get products by level
export const getProductsByLevel = (level) => {
  return localProducts.filter(product => product.level === level);
};

// Helper function to search products
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return localProducts.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.level.toLowerCase().includes(lowercaseQuery) ||
    (product.description && product.description.toLowerCase().includes(lowercaseQuery))
  );
};
