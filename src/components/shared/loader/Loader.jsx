import React from 'react'
import style from './Loader.scss'

function Loader (props) {
  return (
    <svg height="64" width="64" >
      <rect className={style.bg} height="66" id="canvas_background" width="66" x="-1" y="-1" />
      <g className={style.letter} id="letter" >
        <line id="svg_1" x1="31.646065" x2="31.646065" y1="29.960675" y2="47.926967" />
        <line id="svg_4" x1="32.162921" x2="43.162921" y1="32.297754" y2="16.297754" />
        <line id="svg_5" x1="31.938201" x2="20.837079" y1="32.073035" y2="16.073035" />
      </g>
      <rect className={style.border} id="border" x="11" y="5" />
    </svg>
  )
}

export default Loader
