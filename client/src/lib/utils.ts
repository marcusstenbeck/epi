import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function blurActiveDocumentElement() {
  const element = document.activeElement;
  if (element && 'blur' in element && typeof element.blur === 'function') {
    element.blur();
  }
}
