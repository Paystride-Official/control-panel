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
