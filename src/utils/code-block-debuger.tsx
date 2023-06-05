'use client'

import { ChangeEvent, useState } from 'react'
import { map } from 'lodash'
import { CodeBlock } from 'react-code-blocks'
import { themes } from '@/utils/code-block-themes'

const codeBlockContent = `import Auth from 'headless-auth'

const auth = new Auth({ projectId: 'YOUR_PROJECT_ID' })

auth.registerUserSchema({
    email: 'string', // Required
    password: 'string', // Required
    firstName: 'string'
})

// ==============================================

// Register
auth.register({
    firstName: 'John',
    email: 'john.doe@mail.com',
    password: 'USER_PASSWORD'
})

// ==============================================

// Login
auth.loginWithEmailPassword({
    email: 'john.doe@mail.com',
    password: 'USER_PASSWORD'
})`

export const CodeBlockDebuger = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.a11yDark)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as keyof typeof themes
    setSelectedTheme(themes[value] as any)
  }

  return (
    <div>
      <select onChange={handleSelect} className="border p-4 mb-2">
        {map(themes, (_, themeKey) => (
          <option value={themeKey} className="border p-4">
            {themeKey}
          </option>
        ))}
      </select>
      <div className="w-2/5 border">
        <CodeBlock
          text={codeBlockContent}
          language="tsx"
          showLineNumbers={true}
          theme={selectedTheme}
          wrapLines={true}
          codeBlock
          className="p-4"
        />
      </div>
    </div>
  )
}
