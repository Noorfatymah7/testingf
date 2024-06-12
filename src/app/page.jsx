import Hero from '@/components/Home/Hero'
import React from 'react'

const page = () => {
  const name = "Usman"
  return (
    <div>
      <Hero name={name} age={19} />
    </div>
  )
}

export default page