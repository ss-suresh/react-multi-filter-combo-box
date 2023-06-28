import React from 'react'
import { IconProps } from '../types/utils'

export default function SearchIcon({ fill = 'gray', height = 15, width = 15 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      height={height}
      width={width}
      viewBox='0 0 24 24'
      id='search'
    >
      <g data-name='Layer 2'>
        <path
          d='m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z'
          data-name='search'
        ></path>
      </g>
    </svg>
  )
}
