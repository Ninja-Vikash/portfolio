import React from 'react'
import TypedComponent from '../ui/texts/TypedComponent'
import CommonButton from '../ui/btn/CommonButton'
import Image from 'next/image'

function LandingPage() {
  return (
    <section className="landing-page grid items-center grid-cols-2 py-20 px-28 h-[100vh] w-full relative">

        <div className="heading-text">
          <h1 className="text-4xl tracking-tight mb-2" style={{fontFamily: "var(--font-200)"}}>
            Hello
            <div className="text-7xl" style={{fontFamily: "var(--font-300)"}}>I am <span className="text-yellow-400">Vikash.</span></div>
          </h1>

          <h1 className="text-5xl tracking-tight mt-3 text-zinc-400" style={{fontFamily: "var(--font-200)"}}>
            A Frontend Developer
          </h1>

          <div className="h-12 mt-5">
            <TypedComponent />
          </div>

          <div className="btn-area mt-16 flex gap-4">
            <CommonButton textValue="Download CV 💛" />
          </div>
        </div>

        {/* Hero Image */}
        <figure className="flex items-center justify-center bg-zinc-950 myShadow rounded-lg">
          <Image
            src="/Images/computer.png"
            width={400}
            height={600}
            alt="Developer Image"
          />
        </figure>

      </section>
  )
}

export default LandingPage
