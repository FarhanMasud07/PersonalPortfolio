import React, { Fragment } from 'react'

function Node({ node, onClick }) {
  const width = 60
  const height = 40
  return (
    <Fragment>
      {node.depth === 0 && (
        <circle r={30} fill="url('#lg')" onClick={onClick} />
      )}
      {node.depth !== 0 && (
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={'#272b4d'}
          stroke={node.data.children ? '#03c0dc' : '#26deb0'}
          strokeWidth={1}
          strokeDasharray={!node.data.children ? '2,2' : '0'}
          strokeOpacity={!node.data.children ? 0.6 : 1}
          rx={!node.data.children ? 10 : 0}
          onClick={onClick}
        />
      )}
      <text
        dy={'.33em'}
        fontSize={12}
        fontFamily="Arial"
        fontWeight='700'
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={
          node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'
        }>
        {node.data.name}
      </text>
    </Fragment>
  )
}

export default Node
