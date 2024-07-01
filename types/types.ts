import { StaticImageData } from "next/image";

export type column = Record<string, any>;

export type row = Record<string, any>;

export type NewUser = Record<string, any>;

export type SidebarProps = {
  display?: string;
  displaymd?: string;
};

export type SidebarItemProps = {
  title: string;
  href: string;
  icon: (color: any) => JSX.Element;
};

export type AnalyticsCardProps = {
  title: string;
  amount: string;
  profit?: string;
  icon: string;
};
export type User = {
  id: string;
  name: string;
  email: string;
  business_name: string;
  phone_number: string;
  role: string;
  merchant_id: string | null;
  referred_by: string | null;
  otp: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  isLiteUser: boolean;
  customerID: string | null;
  customerCode: string | null;
};

interface LoginResponse {
  status: string;
  message: string;
  user: User;
  token: string;
}
