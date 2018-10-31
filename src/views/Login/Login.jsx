import React from 'react'

import Particles from '../../components/Particles/Particles'
import Form from '../../components/Form/Form'

export default function Login() {
  return (
    <div>
      <Particles maxParticles={120} drawInterval={100} />
      <Form />
    </div>
  )
}
