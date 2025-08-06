
import type React from 'react';

export interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface PriceItem {
  name: string;
  price: string;
  duration?: string;
}

export interface Review {
  name: string;
  comment: string;
  rating: number;
}

export interface NavLink {
    path: string;
    label: string;
}