import { FC } from 'react'
import { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: any
  className?: ClassValue
}

export const Title: FC<Props> = ({ as = 'h2', children, className }) => {
  const Tag = as

  return (
    <Tag
      className={cn(
        'text-5xl font-extrabold uppercase leading-normal mb-6',
        className
      )}
    >
      {children}
    </Tag>
  )
}
