import React from 'react'

const CategoriesIcon = (props) => {
  const { color } = props
  const svgColor = color || 'white'
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00002 7.5C5.00002 6.11929 6.1193 5 7.50002 5H25C26.3807 5 27.5 6.11929 27.5 7.5V25C27.5 26.3807 26.3807 27.5 25 27.5H7.50002C6.1193 27.5 5.00002 26.3807 5.00002 25V7.5ZM10 10V22.5H22.5V10H10Z"
        fill={svgColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 7.5C32.5 6.11929 33.6193 5 35 5H52.5C53.8807 5 55 6.11929 55 7.5V25C55 26.3807 53.8807 27.5 52.5 27.5H35C33.6193 27.5 32.5 26.3807 32.5 25V7.5ZM37.5 10V22.5H50V10H37.5Z"
        fill={svgColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 35C32.5 33.6193 33.6193 32.5 35 32.5H52.5C53.8807 32.5 55 33.6193 55 35V52.5C55 53.8807 53.8807 55 52.5 55H35C33.6193 55 32.5 53.8807 32.5 52.5V35ZM37.5 37.5V50H50V37.5H37.5Z"
        fill={svgColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00002 35C5.00002 33.6193 6.1193 32.5 7.50002 32.5H25C26.3807 32.5 27.5 33.6193 27.5 35V52.5C27.5 53.8807 26.3807 55 25 55H7.50002C6.1193 55 5.00002 53.8807 5.00002 52.5V35ZM10 37.5V50H22.5V37.5H10Z"
        fill={svgColor}
      />
    </svg>
  )
}

export default CategoriesIcon
