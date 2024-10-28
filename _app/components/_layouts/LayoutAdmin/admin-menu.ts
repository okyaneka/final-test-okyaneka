import { Home, Package } from 'lucide-vue-next';
import { Routes } from '~/_app/config/routes';
export const menuSidebar = [
  {
    name: 'dashboard',
    icon: Home,
    link: Routes.BO_DASHBOARD,
  },
  {
    name: 'components',
    icon: Package,
    link: Routes.BO_COMPONENTS,
  }
];

export const menuAccount = [
  {
    name: 'myAccount',
  },
  {
    separator: true
  },
  {
    name: 'settings',
  },
  {
    name: 'help',
  },
  {
    separator: true
  },
  {
    name: 'logout',
  },
];