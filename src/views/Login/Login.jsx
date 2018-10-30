import React from 'react'

import Particles from '../../components/Particles/Particles'
import Engineer from '../../components/Logos/Engineer'
import Settings from '../../components/Logos/Settings'

export default function Login() {
  return (
    <div>
      <Particles maxParticles={120} drawInterval={100} />
      <Engineer angularLimit={360} thetaDelta={2} color1="#FFA64D" color2="#dddddd" width={150} />
      <Settings angularLimit={360} thetaDelta={1} color1="#FFA64D" color2="#dddddd" width={150} />
    </div>
  )
}
