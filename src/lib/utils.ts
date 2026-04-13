import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiUrl() {
  const hostname = window.location.hostname;
  // Use Render backend for production, localhost for development
  if (hostname.includes('vercel.app') || hostname.includes('localhost') === false) {
    return 'https://noolu-hq.onrender.com/api';
  }
  return `http://${hostname}:3001/api`;
}
