import { Stay } from '../models/stay.model';

export const STAYS: Stay[] = [
  // Paris stays
  {
    id: 'paris-1',
    cityId: 'paris',
    name: 'Luxury Apartment in Marais',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 250,
    rating: 4.9,
    reviews: 127,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Beautiful apartment in the heart of Marais district'
  },
  {
    id: 'paris-2',
    cityId: 'paris',
    name: 'Cozy Studio near Eiffel Tower',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 180,
    rating: 4.7,
    reviews: 89,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Heating'],
    description: 'Perfect location with Eiffel Tower views'
  },
  {
    id: 'paris-3',
    cityId: 'paris',
    name: 'Modern Loft in Latin Quarter',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 200,
    rating: 4.8,
    reviews: 104,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 5,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning', 'Gym'],
    description: 'Spacious loft with modern amenities'
  },
  {
    id: 'paris-4',
    cityId: 'paris',
    name: 'Charming Apartment in Montmartre',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 160,
    rating: 4.6,
    reviews: 72,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 3,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    description: 'Artistic neighborhood with local charm'
  },
  {
    id: 'paris-5',
    cityId: 'paris',
    name: 'Penthouse with Seine Views',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 350,
    rating: 5.0,
    reviews: 45,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning', 'Balcony'],
    description: 'Luxury penthouse with stunning views'
  },
  {
    id: 'paris-6',
    cityId: 'paris',
    name: 'Budget-Friendly Room in Belleville',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
    ],
    price: 85,
    rating: 4.3,
    reviews: 156,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Heating'],
    description: 'Affordable option in trendy Belleville'
  },
  {
    id: 'paris-7',
    cityId: 'paris',
    name: 'Family Villa in Outskirts',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 220,
    rating: 4.7,
    reviews: 63,
    bedrooms: 4,
    bathrooms: 2,
    maxGuests: 8,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Garden', 'Parking'],
    description: 'Spacious villa perfect for families'
  },
  {
    id: 'paris-8',
    cityId: 'paris',
    name: 'Historic Apartment near Notre-Dame',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop'
    ],
    price: 195,
    rating: 4.8,
    reviews: 91,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    description: 'Located in historic Île de la Cité'
  },
  {
    id: 'paris-9',
    cityId: 'paris',
    name: 'Trendy Apartment in Le Marais',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 230,
    rating: 4.6,
    reviews: 78,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Modern and stylish apartment'
  },
  {
    id: 'paris-10',
    cityId: 'paris',
    name: 'Parisian Studio with Balcony',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 140,
    rating: 4.5,
    reviews: 88,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'Balcony'],
    description: 'Cozy studio with outdoor space'
  },
  {
    id: 'paris-11',
    cityId: 'paris',
    name: 'Luxury 5-Star Mansion',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 450,
    rating: 5.0,
    reviews: 32,
    bedrooms: 5,
    bathrooms: 4,
    maxGuests: 12,
    amenities: ['WiFi', 'Full Kitchen', 'TV', 'Washer', 'Sauna', 'Pool', 'Concierge'],
    description: 'Ultra-luxury mansion experience'
  },

  // Tokyo stays
  {
    id: 'tokyo-1',
    cityId: 'tokyo',
    name: 'Modern Apartment in Shibuya',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 220,
    rating: 4.8,
    reviews: 145,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Heart of Shibuya with great nightlife'
  },
  {
    id: 'tokyo-2',
    cityId: 'tokyo',
    name: 'Traditional Japanese House',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop'
    ],
    price: 190,
    rating: 4.9,
    reviews: 112,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'Tatami', 'Traditional Bath'],
    description: 'Authentic Japanese experience'
  },
  {
    id: 'tokyo-3',
    cityId: 'tokyo',
    name: 'Studio in Harajuku',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 130,
    rating: 4.5,
    reviews: 98,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    description: 'Trendy Harajuku fashion district'
  },
  {
    id: 'tokyo-4',
    cityId: 'tokyo',
    name: 'Luxury Suite in Shinjuku',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 280,
    rating: 4.9,
    reviews: 67,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning', 'City View'],
    description: 'Premium location in Shinjuku'
  },
  {
    id: 'tokyo-5',
    cityId: 'tokyo',
    name: 'Cozy Apartment near Senso-ji',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
    ],
    price: 150,
    rating: 4.7,
    reviews: 103,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    description: 'Near historic Senso-ji Temple'
  },
  {
    id: 'tokyo-6',
    cityId: 'tokyo',
    name: 'Modern Loft in Asakusa',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 210,
    rating: 4.6,
    reviews: 76,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Modern loft in traditional area'
  },
  {
    id: 'tokyo-7',
    cityId: 'tokyo',
    name: 'Budget Room in Ikebukuro',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 95,
    rating: 4.2,
    reviews: 124,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 1,
    amenities: ['WiFi'],
    description: 'Budget-friendly Ikebukuro option'
  },
  {
    id: 'tokyo-8',
    cityId: 'tokyo',
    name: 'Spacious Family House',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop'
    ],
    price: 240,
    rating: 4.8,
    reviews: 54,
    bedrooms: 4,
    bathrooms: 2,
    maxGuests: 8,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Garden'],
    description: 'Large house perfect for families'
  },
  {
    id: 'tokyo-9',
    cityId: 'tokyo',
    name: 'Penthouse in Roppongi',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 320,
    rating: 4.9,
    reviews: 41,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'City View', 'Concierge'],
    description: 'Upscale Roppongi penthouse'
  },
  {
    id: 'tokyo-10',
    cityId: 'tokyo',
    name: 'Apartment with Shrine View',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 170,
    rating: 4.7,
    reviews: 89,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Shrine View'],
    description: 'Peaceful with temple views'
  },
  {
    id: 'tokyo-11',
    cityId: 'tokyo',
    name: 'Ultra-Luxury Tokyo Suite',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 400,
    rating: 5.0,
    reviews: 28,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    amenities: ['WiFi', 'Full Kitchen', 'TV', 'Washer', 'Spa', 'Gym', 'Concierge'],
    description: 'The ultimate Tokyo luxury experience'
  },

  // New York stays
  {
    id: 'newyork-1',
    cityId: 'newyork',
    name: 'Apartment in Midtown Manhattan',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 300,
    rating: 4.7,
    reviews: 156,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Prime Midtown location'
  },
  {
    id: 'newyork-2',
    cityId: 'newyork',
    name: 'Brooklyn Loft near Bridge',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop'
    ],
    price: 220,
    rating: 4.8,
    reviews: 121,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer'],
    description: 'Trendy Brooklyn with Manhattan views'
  },
  {
    id: 'newyork-3',
    cityId: 'newyork',
    name: 'Studio in Upper West Side',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 160,
    rating: 4.5,
    reviews: 94,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'TV'],
    description: 'Residential Upper West Side'
  },
  {
    id: 'newyork-4',
    cityId: 'newyork',
    name: 'Luxury Times Square Apartment',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 350,
    rating: 4.9,
    reviews: 87,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning', 'City View'],
    description: 'Heart of Times Square'
  },
  {
    id: 'newyork-5',
    cityId: 'newyork',
    name: 'Chelsea Market Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
    ],
    price: 240,
    rating: 4.7,
    reviews: 109,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer'],
    description: 'Near famous Chelsea Market'
  },
  {
    id: 'newyork-6',
    cityId: 'newyork',
    name: 'East Village Room',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 140,
    rating: 4.4,
    reviews: 118,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Kitchen'],
    description: 'Vibrant East Village neighborhood'
  },
  {
    id: 'newyork-7',
    cityId: 'newyork',
    name: 'SoHo Loft with Brick Walls',
    images: [
      'https://images.unsplash.com/photo-1507090960745-b32f65c3ae38?w=600&h=400&fit=crop'
    ],
    price: 280,
    rating: 4.8,
    reviews: 77,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer', 'Air Conditioning'],
    description: 'Classic SoHo loft'
  },
  {
    id: 'newyork-8',
    cityId: 'newyork',
    name: 'Harlem Brownstone',
    images: [
      'https://images.unsplash.com/photo-1512918728624-92573ef4f72e?w=600&h=400&fit=crop'
    ],
    price: 190,
    rating: 4.6,
    reviews: 65,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['WiFi', 'Kitchen', 'TV', 'Washer'],
    description: 'Historic Harlem brownstone'
  },
  {
    id: 'newyork-9',
    cityId: 'newyork',
    name: 'Hudson Yards Penthouse',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 400,
    rating: 4.9,
    reviews: 52,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    amenities: ['WiFi', 'Full Kitchen', 'TV', 'Washer', 'Gym', 'City View'],
    description: 'Modern Hudson Yards penthouse'
  },
  {
    id: 'newyork-10',
    cityId: 'newyork',
    name: 'Upper East Side Mansion',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    ],
    price: 320,
    rating: 4.8,
    reviews: 48,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    amenities: ['WiFi', 'Full Kitchen', 'TV', 'Washer', 'Gym'],
    description: 'Prestigious Upper East Side mansion'
  },
  {
    id: 'newyork-11',
    cityId: 'newyork',
    name: 'Legendary Plaza Hotel Suite',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=400&fit=crop'
    ],
    price: 500,
    rating: 5.0,
    reviews: 35,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    amenities: ['WiFi', 'Full Kitchen', 'TV', 'Washer', 'Spa', 'Concierge', 'City Views'],
    description: 'Iconic luxury hotel experience'
  }
];
