'use client'

import React from 'react'
import { CodeBlock as CodeBlockBase } from 'react-code-blocks'
import { themes } from '@/code-block-themes'

export const CodeBlock = ({
  children,
  language = 'tsx',
  theme = themes.monokaiSublime,
  showLineNumbers = true,
  wrapLines = true,
  className = ''
}) => {
  return (
    <CodeBlockBase
      text={children}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={theme}
      wrapLines={wrapLines}
      codeBlock
      className={className}
    />
  )
}
