'use client'

import { Navbar } from '@/components/molecules'
import {
  Footer,
  Hero,
  MigrateToOwnDatabase,
  SocialAuth,
  StepsDescribed
} from '@/components/organisms'

export default function Home() {
  return (
    <>
      <main className="px-4 md:px-20 lg:px-32">
        <Navbar />
        <Hero />
        <div className="text-center mb-64">
          <StepsDescribed />
          <SocialAuth />
          <MigrateToOwnDatabase />
        </div>
      </main>
      <Footer />
    </>
  )
}
