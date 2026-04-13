import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiUrl() {
  const hostname = window.location.hostname;
  // Use the same hostname as the frontend but fixed port 3001 for the backend
  return `http://${hostname}:3001/api`;
}
