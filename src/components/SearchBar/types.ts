export interface SearchBarProps {
  title: string;
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
