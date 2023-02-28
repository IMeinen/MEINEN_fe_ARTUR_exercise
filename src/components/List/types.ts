import {ListItem} from 'types';

export interface ListProps {
  items?: ListItem[];
  hasNavigation?: boolean;
  isLoading: boolean;
}