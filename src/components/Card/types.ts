import {Teams, UserData} from 'types';

export interface CardProps {
  id?: string;
  url?: string;
  columns: Array<{
      key: string;
      value: string;
  }>;
  hasNavigation?: boolean;
  navigationProps?: UserData | Teams;
}

export interface ContainerProps {
  hasNavigation: boolean;
  hasHover: boolean;
}