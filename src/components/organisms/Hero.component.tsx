'use client'

import { themes } from '@/code-block-themes'
import { Description, Title } from '../atoms'
import { CodeBlock } from '../molecules'

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

export const Hero = () => {
  return (
    <div className="flex gap-16 items-center flex-col lg:flex-row">
      <div className="flex-1">
        <Title as="h1">Authentification without the headache</Title>
        <Description className="mb-16">
          Spend your time bringing value to your product while we handle user
          management for you.
        </Description>
        <button className="px-12 py-6 text-white bg-indigo-600 rounded uppercase font-bold">
          Get started 🚀
        </button>
      </div>
      <div className="w-full lg:w-5/12 border">
        <CodeBlock
          language="tsx"
          showLineNumbers={true}
          theme={themes.monokaiSublime}
          wrapLines={true}
        >
          {codeBlockContent}
        </CodeBlock>
      </div>
    </div>
  )
}
