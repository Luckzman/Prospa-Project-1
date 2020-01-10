import React from 'react';
import {ReactComponent as SavingIcon} from '../../assets/briefcase-solid.svg';
import {ReactComponent as TaxIcon} from '../../assets/bell-solid.svg';
import {ReactComponent as CurrentIcon} from '../../assets/credit-card-regular.svg';


export default [
  {
    accountType: 'Current account',
    accountNum: '00-00-00 18361554',
    amount: '2,600,234.90',
    img: <CurrentIcon className="icon red"/>,
    className: 'light-red'
  },
  {
    accountType: 'Saving account',
    accountNum: '00-00-00 18361554',
    amount: '1,050,234.33',
    img: <SavingIcon className="icon blue"/>,
    className: 'light-blue'
  },
  {
    accountType: 'Tax account',
    accountNum: '00-00-00 18361554',
    amount: '5892,897.00',
    img: <TaxIcon className="icon purple"/>,
    className: 'light-purple'
  }
]