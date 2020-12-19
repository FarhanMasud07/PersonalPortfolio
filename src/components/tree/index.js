import React from 'react'
import { ParentSize } from '@vx/responsive'
import Tree from './Tree'
import data from './data'

const TreeExample = () => (
  <ParentSize>
    {size =>
      size.ref && (
        <>
        <div
          style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding:'15px',
          }}>
          <Tree
            data={data}
            width={size.width*.5}
            height={size.height*.9}
          />
        </div>
        </>
      )
    }
  </ParentSize>
)

export default TreeExample
