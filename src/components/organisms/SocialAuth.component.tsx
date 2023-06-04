import React from 'react'
import { Description, Title } from '../atoms'
import { CodeBlock } from '../molecules'

const socialLoginCodeBlockContent = `import { auth } from './auth.js'

// Login with email and password
auth.loginWithEmailPassword({
    email: 'john.doe@mail.com',
    password: 'USER_PASSWORD'
})

// Login with Google
auth.loginWithSocial("google")
`

export const SocialAuth = () => {
  return (
    <>
      <Title className="mt-24 md:mt-48 mb-12">
        Use social login to increase conversion
      </Title>
      <Description className="mb-16">
        You can use "SignIn with Google" as easily as a simple Email / Password
        auth system
      </Description>
      <div className="flex justify-center">
        <div className="text-left 2xl:w-1/3 md:text-xl">
          <CodeBlock>{socialLoginCodeBlockContent}</CodeBlock>
        </div>
      </div>
    </>
  )
}
