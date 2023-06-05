'use client'

import React from 'react'
import { CodeBlock as CodeBlockBase } from 'react-code-blocks'
import { themes } from '@/utils/code-block-themes'

export const CodeBlock = ({
  children,
  language = 'tsx',
  theme = themes.monokaiSublime,
  showLineNumbers = true,
  wrapLines = true,
  className = ''
}) => {
  return (
    <div
      className="p-2 rounded-lg"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <CodeBlockBase
        text={children}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={theme}
        wrapLines={wrapLines}
        codeBlock
        className={className}
      />
    </div>
  )
}
