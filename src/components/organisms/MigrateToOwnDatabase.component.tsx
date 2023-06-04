import React from 'react'
import { Description, Title } from '../atoms'
import { CodeBlock } from '../molecules'

const sqlCodeBlockContent = `INSERT INTO YOUR_OWN_DATABASE SELECT * FROM HEADLESSAUTH_USERS`

export const MigrateToOwnDatabase = () => {
  return (
    <>
      <Title className="mt-24 md:mt-48">
        Migrate to your own SQL Database in a minute
      </Title>
      <Description className="mb-16">
        You can start building your product with us and continue to grow with
        us. <br /> If you require to make your own system at some point, we make
        it easy for you to migrate
      </Description>
      <div className="flex justify-center">
        <div className="text-left md:text-xl w-full lg:w-fit">
          <CodeBlock language="sql" className="w-full">
            {sqlCodeBlockContent}
          </CodeBlock>
        </div>
      </div>
    </>
  )
}
