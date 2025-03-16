import pillsData from './pills.json';

export interface Pill {
  id: string;
  name: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  brand: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  canCrush: boolean;
  image: string;
  notes?: {
    en: string;
    hi: string;
    ta?: string;
    [key: string]: string | undefined;
  };
  alternatives?: {
    en: string[];
    hi: string[];
    ta?: string[];
    [key: string]: string[] | undefined;
  };
}

// Convert the imported JSON data to the Pill type
export const pills: Pill[] = pillsData; 