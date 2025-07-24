import { RecommendationInput } from '@/pages/Index';

export interface DrinkRecommendation {
  id: string;
  name: string;
  brand: string;
  type: string;
  taste: string[];
  price: string;
  description: string;
  pairings: string[];
  mixRecipes?: string[];
  alcohol_content: string;
  best_for: string;
  image_emoji: string;
  budget_range: string[];
  group_size: string[];
}

// Curated database of popular Indian alcoholic drinks
const DRINKS_DATABASE: DrinkRecommendation[] = [
  {
    id: 'old-monk-rum',
    name: 'Old Monk Dark Rum',
    brand: 'Old Monk',
    type: 'rum',
    taste: ['strong', 'sweet'],
    price: '₹650 - ₹800',
    description: 'India\'s most beloved dark rum with a rich, smooth taste and legendary status among Indian drinkers.',
    pairings: ['spicy Indian snacks', 'kebabs', 'chocolate'],
    mixRecipes: ['Old Monk + Coke', 'Old Monk + Ginger Ale', 'Hot Toddy with Old Monk'],
    alcohol_content: '42.8% ABV',
    best_for: 'Perfect for cold evenings and nostalgic conversations',
    image_emoji: '🥃',
    budget_range: ['500-1000', '1000-2000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'kingfisher-ultra',
    name: 'Kingfisher Ultra',
    brand: 'Kingfisher',
    type: 'beer',
    taste: ['light', 'bitter'],
    price: '₹180 - ₹220',
    description: 'Premium light beer with a crisp, refreshing taste that\'s perfect for Indian summers.',
    pairings: ['street food', 'cricket matches', 'barbecue'],
    alcohol_content: '4.8% ABV',
    best_for: 'Hot summer days and casual hangouts',
    image_emoji: '🍺',
    budget_range: ['500-1000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'bira-white',
    name: 'Bira 91 White',
    brand: 'Bira 91',
    type: 'beer',
    taste: ['light', 'fruity'],
    price: '₹160 - ₹200',
    description: 'Modern craft wheat beer with coriander and orange peel, offering a smooth and refreshing experience.',
    pairings: ['Asian cuisine', 'seafood', 'light salads'],
    alcohol_content: '4.9% ABV',
    best_for: 'Trendy gatherings and modern dining experiences',
    image_emoji: '🍺',
    budget_range: ['500-1000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'blenders-pride',
    name: 'Blenders Pride Reserve Collection',
    brand: 'Blenders Pride',
    type: 'whiskey',
    taste: ['strong', 'bitter'],
    price: '₹1,800 - ₹2,200',
    description: 'Premium Indian whiskey with complex flavors and smooth finish, perfect for celebrations.',
    pairings: ['nuts', 'cheese', 'dark chocolate'],
    mixRecipes: ['Whiskey Sour', 'Old Fashioned', 'Whiskey on the rocks'],
    alcohol_content: '42.8% ABV',
    best_for: 'Special occasions and sophisticated evenings',
    image_emoji: '🥃',
    budget_range: ['1000-2000', '2000-3000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'sula-red-wine',
    name: 'Sula Red Wine Shiraz',
    brand: 'Sula',
    type: 'wine',
    taste: ['fruity', 'sweet'],
    price: '₹1,200 - ₹1,500',
    description: 'Premium Indian red wine with rich berry flavors and elegant finish from Nashik vineyards.',
    pairings: ['tandoori dishes', 'paneer', 'biryani'],
    alcohol_content: '13% ABV',
    best_for: 'Romantic dinners and wine appreciation sessions',
    image_emoji: '🍷',
    budget_range: ['1000-2000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'royal-challenge',
    name: 'Royal Challenge Premium',
    brand: 'Royal Challenge',
    type: 'whiskey',
    taste: ['strong', 'bitter'],
    price: '₹1,100 - ₹1,400',
    description: 'Smooth Indian whiskey with a perfect balance of flavor and affordability.',
    pairings: ['samosas', 'pakoras', 'grilled meats'],
    mixRecipes: ['RC + Soda', 'Whiskey Neat', 'RC Old Fashioned'],
    alcohol_content: '42.8% ABV',
    best_for: 'Friends gatherings and casual celebrations',
    image_emoji: '🥃',
    budget_range: ['1000-2000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'greater-than-gin',
    name: 'Greater Than London Dry Gin',
    brand: 'Greater Than',
    type: 'gin',
    taste: ['bitter', 'strong'],
    price: '₹2,800 - ₹3,200',
    description: 'Premium Indian craft gin with botanicals that create a unique and sophisticated flavor profile.',
    pairings: ['cucumber sandwiches', 'olives', 'citrus fruits'],
    mixRecipes: ['Gin & Tonic', 'Gin Gimlet', 'Negroni'],
    alcohol_content: '42.8% ABV',
    best_for: 'Sophisticated cocktail evenings and gin appreciation',
    image_emoji: '🍸',
    budget_range: ['2000-3000', '3000-5000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'happy-den-apple',
    name: 'Happy Den Apple Wine',
    brand: 'Happy Den',
    type: 'wine',
    taste: ['sweet', 'fruity'],
    price: '₹400 - ₹600',
    description: 'Light and refreshing apple wine perfect for beginners and those who prefer sweeter alcoholic beverages.',
    pairings: ['desserts', 'fruit salads', 'light snacks'],
    alcohol_content: '8% ABV',
    best_for: 'Casual sipping and sweet tooth satisfaction',
    image_emoji: '🍷',
    budget_range: ['500-1000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'imperial-blue',
    name: 'Imperial Blue Whiskey',
    brand: 'Imperial Blue',
    type: 'whiskey',
    taste: ['light', 'sweet'],
    price: '₹750 - ₹950',
    description: 'Smooth and affordable Indian whiskey that\'s perfect for mixing and casual drinking.',
    pairings: ['fried snacks', 'masala peanuts', 'evening tea-time'],
    mixRecipes: ['IB + Water', 'IB + Sprite', 'IB Highball'],
    alcohol_content: '42.8% ABV',
    best_for: 'Budget-friendly celebrations and casual get-togethers',
    image_emoji: '🥃',
    budget_range: ['500-1000', '1000-2000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'cocktail-mai-tai',
    name: 'Classic Mai Tai',
    brand: 'House Special',
    type: 'cocktails',
    taste: ['fruity', 'sweet'],
    price: '₹800 - ₹1,200',
    description: 'Tropical cocktail with rum, orange curaçao, and orgeat syrup - perfect for Indian summers.',
    pairings: ['coconut-based dishes', 'tropical fruits', 'beach vibes'],
    mixRecipes: ['White Rum + Dark Rum + Orange Curaçao + Orgeat + Lime'],
    alcohol_content: '18% ABV',
    best_for: 'Pool parties and tropical-themed celebrations',
    image_emoji: '🍹',
    budget_range: ['500-1000', '1000-2000'],
    group_size: ['party']
  },
  {
    id: 'cocktail-whiskey-sour',
    name: 'Indian Whiskey Sour',
    brand: 'House Special',
    type: 'cocktails',
    taste: ['bitter', 'strong'],
    price: '₹700 - ₹1,000',
    description: 'Classic whiskey sour made with Indian whiskey, fresh lime, and a touch of jaggery.',
    pairings: ['tandoori appetizers', 'cheese platters', 'spicy nuts'],
    mixRecipes: ['Indian Whiskey + Fresh Lime + Jaggery Syrup + Egg White'],
    alcohol_content: '22% ABV',
    best_for: 'Sophisticated evenings and whiskey appreciation',
    image_emoji: '🍸',
    budget_range: ['500-1000', '1000-2000'],
    group_size: ['solo', 'party']
  },
  {
    id: 'haywards-5000',
    name: 'Haywards 5000 Super Strong Beer',
    brand: 'Haywards',
    type: 'beer',
    taste: ['strong', 'bitter'],
    price: '₹150 - ₹190',
    description: 'India\'s strongest beer with high alcohol content, perfect for those who want maximum impact.',
    pairings: ['spicy street food', 'biryani', 'heavy meals'],
    alcohol_content: '7% ABV',
    best_for: 'When you want a strong beer that packs a punch',
    image_emoji: '🍺',
    budget_range: ['500-1000'],
    group_size: ['solo', 'party']
  }
];

export function getDrinkRecommendations(input: RecommendationInput): DrinkRecommendation[] {
  const { groupSize, taste, budget, alcoholType } = input;
  
  // Filter drinks based on user preferences
  let filteredDrinks = DRINKS_DATABASE.filter(drink => {
    const matchesType = drink.type === alcoholType || 
      (alcoholType === 'cocktails' && (drink.type === 'gin' || drink.type === 'rum' || drink.type === 'whiskey'));
    const matchesTaste = drink.taste.includes(taste);
    const matchesBudget = drink.budget_range.includes(budget);
    const matchesGroupSize = drink.group_size.includes(groupSize);
    
    return matchesType && matchesTaste && matchesBudget && matchesGroupSize;
  });

  // If no exact matches, fall back to type and budget matching
  if (filteredDrinks.length === 0) {
    filteredDrinks = DRINKS_DATABASE.filter(drink => {
      const matchesType = drink.type === alcoholType || 
        (alcoholType === 'cocktails' && (drink.type === 'gin' || drink.type === 'rum' || drink.type === 'whiskey'));
      const matchesBudget = drink.budget_range.includes(budget);
      
      return matchesType && matchesBudget;
    });
  }

  // If still no matches, return drinks of the requested type
  if (filteredDrinks.length === 0) {
    filteredDrinks = DRINKS_DATABASE.filter(drink => 
      drink.type === alcoholType || 
      (alcoholType === 'cocktails' && (drink.type === 'gin' || drink.type === 'rum' || drink.type === 'whiskey'))
    );
  }

  // Sort by relevance and return top 3-6 recommendations
  return filteredDrinks.slice(0, Math.min(6, filteredDrinks.length));
}