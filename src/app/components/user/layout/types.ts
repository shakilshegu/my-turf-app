import { ElementType } from "react";

export interface NavItem {
  href: string;
  icon: ElementType;
  label: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}