import React from 'react';
import { ReactComponent as AccountIcon } from '../../assets/credit-card-regular.svg';
import { ReactComponent as InvoicingIcon } from '../../assets/file-invoice-solid.svg';
import { ReactComponent as SettingsIcon } from '../../assets/cog-solid.svg';
import { ReactComponent as UserIcon } from '../../assets/user-regular.svg';
import { ReactComponent as ShieldIcon } from '../../assets/shield-alt-solid.svg';
import { ReactComponent as SupportIcon } from '../../assets/comment-alt-regular.svg';
import { ReactComponent as CaretDownIcon } from '../../assets/caret-down-solid.svg';
import './Sidebar.scss';

export default [
  {
    icon: <AccountIcon className="icon" />,
    text: 'Accounts',
    optional: <CaretDownIcon className="icon right" />,
    id: 0
  },
  {
    icon: <InvoicingIcon className="icon" />,
    text: 'Invoicing',
    optional: null,
    id: 1
  },
  {
    icon: <SettingsIcon className="icon" />,
    text: 'Account Management',
    optional: <CaretDownIcon className="icon right" />,
    id: 2
  },
  {
    icon: <UserIcon className="icon" />,
    text: 'My Profile',
    optional: null,
    id: 3
  },
  {
    icon: <ShieldIcon className="icon" />,
    text: 'Security',
    optional: null,
    id: 4
  },
  {
    icon: <SupportIcon className="icon" />,
    text: 'Support',
    optional: null,
    id: 5
  },
];
