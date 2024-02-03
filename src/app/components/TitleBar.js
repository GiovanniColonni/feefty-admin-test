import React from 'react';
import { ChevronLeftIcon,PlusIcon } from '@heroicons/react/24/solid';

export const TitleBar = ({ title }) => {
  return (
      <h2 className="text-2xl font-medium leading-[116%] text-gray-900 w-full" style={{ lineHeight: '23px', color: '#0E1823' }}>
        {title}
      </h2>

  );
};

const IconButton = ({ text,type,Icon,onClick }) => {
    return (
      <button onClick={onClick} className="flex items-center text-center px-0 gap-1.5 left-58 top-5.5 text-primary border-none bg-transparent font-normal text-sm leading-none" style={{ width: '64px', height: '14px', color: '#104EE9' }}>
        {Icon}
        <span>{text}</span>
      </button>
    );
  };

  export const IconButtonAdd = ({ text,type,onClick }) => {
    return (
      <IconButton onClick={onClick} text={text} type={type} Icon={
        <PlusIcon className="h-5 w-5" aria-hidden="true"/>
      } />
    );
  };

  export const IconButtonBack = ({ text,type }) => {
    return (
      <IconButton text={text} type={type} Icon={
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      } />
    );
  }