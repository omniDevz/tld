export interface HeaderProps {
  isMenuIcon: boolean;
  title: string;
  onClick: function();
  teacher: boolean;
  type: 'icon' | 'back' | 'exit';
  text?: string;
}
