import React from 'react'

class Engineer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTheta: 0
    }
  }

  componentDidMount() {
    const animate = () => {
      const { thetaDelta } = this.props
      const { angularLimit } = this.props
      const { currentTheta } = this.state
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
        <path
          transform={`rotate(${currentTheta})`}
          style={{ fill: color1, transformOrigin: '68% 68%' }}
          d="M496,376v-80h-38.504c-2-6.096-4.432-11.992-7.28-17.64l27.208-27.208l-56.568-56.568l-27.208,27.208
            c-5.648-2.848-11.544-5.28-17.64-7.28V176H296v38.504c-6.096,2-11.992,4.432-17.64,7.28l-27.208-27.208l-56.568,56.568
            l27.208,27.208c-2.848,5.648-5.28,11.544-7.28,17.64H176v80h38.504c2,6.096,4.432,11.992,7.28,17.64l-27.208,27.208l56.568,56.568
            l27.208-27.208c5.648,2.848,11.544,5.28,17.64,7.28V496h80v-38.504c6.096-2,11.992-4.432,17.64-7.28l27.208,27.208l56.568-56.568
            L450.2,393.648c2.848-5.648,5.28-11.544,7.28-17.64H496V376z M336,408c-39.768,0-72-32.232-72-72s32.232-72,72-72s72,32.232,72,72
            S375.768,408,336,408z"
        />
        <g>
          <path
            transform={`rotate(${currentTheta})`}
            style={{ fill: color2, transformOrigin: '68% 68%' }}
            d="M401.32,382.2c9.6-13.552,14.68-29.528,14.68-46.2c0-44.112-35.888-80-80-80s-80,35.888-80,80
            s35.888,80,80,80c20.416,0,39.848-7.688,54.728-21.648l-10.944-11.672C367.88,393.848,352.336,400,336,400
            c-35.288,0-64-28.712-64-64s28.712-64,64-64s64,28.712,64,64c0,13.336-4.056,26.12-11.736,36.952L401.32,382.2z"
          />
          <path
            style={{ fill: color2 }}
            d="M304,336c0,17.648,14.352,32,32,32s32-14.352,32-32s-14.352-32-32-32S304,318.352,304,336z M352,336
            c0,8.824-7.176,16-16,16s-16-7.176-16-16s7.176-16,16-16S352,327.176,352,336z"
          />
          <rect x="336" y="160" style={{ fill: color2 }} width="16" height="16" />
          <path
            style={{ fill: color2 }}
            d="M16,112h96V16h224v128h16V0H100.688L0,100.688V496h296v-16H16V112z M27.312,96L96,27.312V96H27.312z"
          />
          <path
            style={{ fill: color2 }}
            d="M192,192h-48v-32H96v-32H32v144h48h16h32h16h48V192z M80,256H48V144h32v16V256z M128,256H96v-80h32
            v16V256z M176,256h-32v-48h32V256z"
          />
          <rect x="32" y="288" style={{ fill: color2 }} width="16" height="16" />
          <rect x="64" y="288" style={{ fill: color2 }} width="96" height="16" />
          <rect x="32" y="320" style={{ fill: color2 }} width="128" height="16" />
          <rect x="32" y="352" style={{ fill: color2 }} width="128" height="16" />
          <rect x="32" y="384" style={{ fill: color2 }} width="128" height="16" />
          <rect x="32" y="416" style={{ fill: color2 }} width="96" height="16" />
          <rect x="144" y="416" style={{ fill: color2 }} width="16" height="16" />
          <rect x="56" y="448" style={{ fill: color2 }} width="16" height="16" />
          <rect x="88" y="448" style={{ fill: color2 }} width="16" height="16" />
          <rect x="120" y="448" style={{ fill: color2 }} width="16" height="16" />
          <rect x="128" y="32" style={{ fill: color2 }} width="16" height="16" />
          <rect x="160" y="32" style={{ fill: color2 }} width="160" height="16" />
          <rect x="304" y="96" style={{ fill: color2 }} width="16" height="16" />
          <rect x="128" y="96" style={{ fill: color2 }} width="160" height="16" />
          <rect x="128" y="64" style={{ fill: color2 }} width="192" height="16" />
        </g>
      </svg>
    )
  }
}

export default Engineer
