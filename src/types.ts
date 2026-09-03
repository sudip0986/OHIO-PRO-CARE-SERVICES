export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  typicalIssues: string[];
  diagnosticFee: string;
  isPopular?: boolean;
}

export interface BrandInfo {
  id: string;
  name: string;
  tier: 'Top Residential' | 'Premium / Luxury' | 'Commercial & Standard';
  description: string;
  popularAppliances: string[];
  truckStockedParts: boolean;
  warrantyFriendly: boolean;
}

export interface ServiceArea {
  name: string;
  zipCode: string;
  county: string;
  turnaroundDays: string;
}

export interface BookingFormState {
  serviceType: string;
  brand: string;
  applianceAge: string;
  issueDescription: string;
  urgency: 'Standard' | 'Urgent / Same-Week' | 'Emergency Appliance Failure';
  serviceArea: string;
  streetAddress: string;
  zipCode: string;
  preferredDate: string;
  preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)' | 'Afternoon (12:00 PM - 5:00 PM)' | 'First Available';
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface BookingConfirmation {
  confirmationId: string;
  createdAt: string;
  data: BookingFormState;
  estimatedDiagnosticFee: number;
}
