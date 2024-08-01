export type Tour = {
  _id: string;
  slug: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images?: string[];
  startDates: Date[];
  secretTour: boolean;
  startLocation: StartLocation;
  locations: Location[];
  guides: User[];
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
};

export type Location = {
  _id: string;
  type: string;
  coordinates: number[];
  description: string;
  day: number;
};

export type StartLocation = Omit<Location, '_id' | 'day'> & {
  address: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Review = {
  _id: string;
  review: string;
  rating: number;
  tour: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};
