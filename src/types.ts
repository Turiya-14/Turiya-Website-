export interface SectorItem {
  id: string;
  name: string;
  description: string;
  useCase: string;
  iconName: string;
  metric?: string;
}

export interface DemoBookingData {
  name: string;
  email: string;
  company: string;
  date: string;
  timeSlot: string;
  solutions: string[];
  notes?: string;
}
