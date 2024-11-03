'use client'
import { Tooltip } from 'pol-ui'
import React from 'react'

const GeoTooltip = () => {
    return (
        <Tooltip label={<div>
            DE
      </div>}>
            
            <span className='cursor-help'>Freiburg.</span>
      </Tooltip>
  )
}

export default GeoTooltip