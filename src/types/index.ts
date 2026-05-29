/**
 * Type definitions for DGL application
 */

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  DEVELOPER = 'DEVELOPER',
  EDITOR = 'EDITOR',
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export enum ProductStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
  developer: string; // User ID
  ratings: number;
  downloads: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string; // User ID
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  _id: string;
  user: string; // User ID
  product: string; // Product ID
  status: SubscriptionStatus;
  startDate: Date;
  endDate?: Date;
  renewalDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  _id: string;
  user: string; // User ID
  amount: number;
  currency: string;
  status: PaymentStatus;
  stripePaymentIntentId?: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
