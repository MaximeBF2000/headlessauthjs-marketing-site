import React, { FC } from 'react'
import { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

interface Props {
  children: any
  className?: ClassValue
}

export const Description: FC<Props> = ({ children, className }) => {
  return <p className={cn('text-xl', className)}>{children}</p>
}
