import React from 'react'
import { Description, Title } from '../atoms'

const spheresContent = [
  {
    n: 1,
    content: (
      <>
        Import <br /> HeadlessAuth
      </>
    )
  },
  {
    n: 2,
    content: (
      <>
        Register your <br /> User Schema
      </>
    )
  },
  {
    n: 3,
    content: (
      <>
        Start Registering <br /> Users 🎉
      </>
    )
  }
]

const StepSphere = ({ n, content }) => {
  return (
    <div className="w-48 h-48 lg:w-64 lg:h-64 bg-indigo-600 text-white font-bold flex justify-center items-center rounded-full">
      <div className="text-center">
        {n} <br />
        <br />
        {content}
      </div>
    </div>
  )
}

export const StepsDescribed = () => {
  return (
    <>
      <Title className="mt-24 md:mt-48 mb-12">
        Implement auth in 5 minutes
      </Title>
      <Description className="mb-24">
        Let us know what your users should look like, and you're basically good
        to go !
      </Description>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-5">
        {spheresContent.map(sphereContent => (
          <div key={sphereContent.n} className="relative">
            <StepSphere n={sphereContent.n} content={sphereContent.content} />
            {sphereContent.n !== 3 && (
              <span className="hidden 2xl:block absolute left-full top-1/2 translate-x-12 -translate-y-1/2 h-2 w-64 bg-gray-800 after:content-[''] after:h-0 after:w-0 after:border-x-[16px] after:border-x-transparent after:border-b-[16px] after:border-b-gray-800 after:block after:rotate-90 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:-translate-x-4" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
