import { ReactNode } from "react";
import Link from "next/link";

interface IProps {
  as?: 'button' | 'link';
  href?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: '1' | '2' | '3';
}

export default function Button({ as = 'button', href = "", onClick, className, size = '1', children }: IProps) {
  const sizeClasses = {
    '1': 'px-5 py-3 rounded-3xl text-base',
    '2': 'px-6 py-3 rounded-3xl text-lg',
    '3': 'px-7 py-4 rounded-3xl text-xl',
  };

  const sizeClass = sizeClasses[size] || sizeClasses['1'];

  const classes = `text-center font-semibold text-white w-fit bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 ${sizeClass} ${className}`;

  if (as === 'link') {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
