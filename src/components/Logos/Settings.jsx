import React from 'react'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTheta: 0
    }
  }

  componentDidMount() {
    const animate = () => {
      const { currentTheta } = this.state
      const { thetaDelta, angularLimit } = this.props
      const nextTheta = currentTheta > angularLimit ? 0 : currentTheta + thetaDelta

      this.setState({ currentTheta: nextTheta })
      this.rafId = requestAnimationFrame(animate)
    }
    this.rafId = requestAnimationFrame(animate)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId)
  }

  render() {
    const { currentTheta } = this.state
    const { color1, color2, width } = this.props
    return (
      <svg x="0px" y="0px" viewBox="0 0 496 496" style={{ width }} preserveAspectRatio="xMidYMid meet">
        <g>
          <path
            transform={`rotate(${currentTheta})`}
            style={{ fill: color2, transformOrigin: '50% 65%' }}
            d="M288,496h-80v-37.792c-10.232-2.96-20.096-7.048-29.44-12.208l-26.728,26.736l-56.568-56.568
            L122,389.44c-5.168-9.344-9.248-19.2-12.208-29.44H72v-80h37.792c2.96-10.232,7.048-20.096,12.208-29.432l-26.736-26.736
            l56.568-56.568l26.728,26.728c11.184-6.176,23.128-10.824,35.56-13.832l1.88-0.216l65.872,0.224c12.44,3,24.376,7.648,35.56,13.832
            l26.728-26.728l56.568,56.568l-26.736,26.736c5.168,9.336,9.248,19.2,12.208,29.432H424v80h-37.792
            c-2.96,10.232-7.048,20.096-12.208,29.44l26.736,26.728l-56.568,56.568L317.44,446c-9.344,5.168-19.2,9.248-29.44,12.208V496z
            M224,480h48v-34.24l6.128-1.48c12.848-3.112,25.12-8.192,36.448-15.12l5.376-3.28l24.216,24.224l33.944-33.944l-24.224-24.216
            l3.28-5.376c6.92-11.328,12.008-23.592,15.12-36.448l1.472-6.12H408v-48h-34.24l-1.48-6.128c-3.112-12.856-8.192-25.12-15.12-36.44
            l-3.28-5.376l24.224-24.224l-33.944-33.944l-24.216,24.232l-5.376-3.288c-11.048-6.752-23-11.76-35.536-14.888h-62.064
            c-12.536,3.128-24.496,8.136-35.536,14.888l-5.376,3.288l-24.216-24.232l-33.944,33.944l24.224,24.224l-3.28,5.376
            c-6.92,11.328-12.008,23.584-15.12,36.44L122.24,296H88v48h34.24l1.48,6.128c3.112,12.848,8.192,25.12,15.12,36.448l3.28,5.376
            l-24.224,24.216l33.944,33.944l24.216-24.224l5.376,3.28c11.328,6.92,23.592,12.008,36.448,15.12l6.12,1.472V480z"
          />
          <path
            style={{ fill: color2 }}
            d="M128,64c-10.416,0-19.216,6.712-22.528,16H40c-13.232,0-24,10.768-24,24v289.472
            C6.712,396.784,0,405.584,0,416c0,13.232,10.768,24,24,24s24-10.768,24-24c0-10.416-6.712-19.216-16-22.528V104
            c0-4.408,3.584-8,8-8h65.472c3.312,9.288,12.112,16,22.528,16c13.232,0,24-10.768,24-24S141.232,64,128,64z M24,424
            c-4.416,0-8-3.584-8-8s3.584-8,8-8s8,3.584,8,8S28.416,424,24,424z M128,96c-4.416,0-8-3.592-8-8s3.584-8,8-8s8,3.592,8,8
            S132.416,96,128,96z"
          />
          <rect x="48" y="112" style={{ fill: color2 }} width="16" height="16" />
          <rect x="48" y="144" style={{ fill: color2 }} width="16" height="16" />
          <rect x="48" y="176" style={{ fill: color2 }} width="16" height="16" />
          <path
            style={{ fill: color2 }}
            d="M480,393.472V104c0-13.232-10.768-24-24-24h-65.472c-3.312-9.288-12.112-16-22.528-16
            c-13.232,0-24,10.768-24,24s10.768,24,24,24c10.416,0,19.216-6.712,22.528-16H456c4.416,0,8,3.592,8,8v289.472
            c-9.288,3.312-16,12.112-16,22.528c0,13.232,10.768,24,24,24s24-10.768,24-24C496,405.584,489.288,396.784,480,393.472z M368,96
            c-4.416,0-8-3.592-8-8s3.584-8,8-8s8,3.592,8,8S372.416,96,368,96z M472,424c-4.416,0-8-3.584-8-8s3.584-8,8-8s8,3.584,8,8
            S476.416,424,472,424z"
          />
          <rect x="432" y="112" style={{ fill: color2 }} width="16" height="16" />
          <rect x="432" y="144" style={{ fill: color2 }} width="16" height="16" />
          <rect x="432" y="176" style={{ fill: color2 }} width="16" height="16" />
          <path
            style={{ fill: color2 }}
            d="M248,416c-52.936,0-96-43.064-96-96s43.064-96,96-96s96,43.064,96,96S300.936,416,248,416z M248,240
            c-44.112,0-80,35.888-80,80s35.888,80,80,80s80-35.888,80-80S292.112,240,248,240z"
          />
        </g>
        <path
          style={{ fill: color1 }}
          d="M272,0v59.816l-24,8l-24-8V0c-27.944,9.896-48,36.48-48,67.816c0,24.96,12.712,46.944,40,59.856
          v265.624c9.808,4.288,20.616,6.704,32,6.704s22.192-2.416,32-6.704V127.672c27.288-12.92,40-34.896,40-59.856
          C320,36.48,299.944,9.896,272,0z"
        />
        <g>
          <rect x="240" y="368" style={{ fill: color2 }} width="16" height="16" />
          <rect x="240" y="336" style={{ fill: color2 }} width="16" height="16" />
          <rect x="240" y="304" style={{ fill: color2 }} width="16" height="16" />
        </g>
      </svg>
    )
  }
}

export default Settings