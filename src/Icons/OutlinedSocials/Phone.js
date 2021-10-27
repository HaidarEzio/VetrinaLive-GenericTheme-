import React from 'react'

const PhoneIcon = (props) => {
  const { fill = 'white', ...restProps } = props
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M22.0004 16.92V19.92C22.0016 20.1985 21.9445 20.4742 21.8329 20.7294C21.7214 20.9845 21.5577 21.2136 21.3525 21.4019C21.1473 21.5901 20.905 21.7335 20.6412 21.8227C20.3773 21.9119 20.0978 21.9451 19.8204 21.92C16.7433 21.5856 13.7874 20.5342 11.1904 18.85C8.77425 17.3147 6.72576 15.2662 5.19042 12.85C3.5004 10.2412 2.44866 7.271 2.12042 4.18001C2.09543 3.90347 2.1283 3.62477 2.21692 3.36163C2.30555 3.09849 2.44799 2.85669 2.63519 2.65163C2.82238 2.44656 3.05023 2.28271 3.30421 2.17053C3.5582 2.05834 3.83276 2.00027 4.11042 2.00001H7.11042C7.59573 1.99523 8.06621 2.16708 8.43418 2.48354C8.80215 2.79999 9.0425 3.23945 9.11042 3.72001C9.23704 4.68007 9.47187 5.62273 9.81042 6.53001C9.94497 6.88793 9.97408 7.27692 9.89433 7.65089C9.81457 8.02485 9.62928 8.36812 9.36042 8.64001L8.09042 9.91001C9.51398 12.4136 11.5869 14.4865 14.0904 15.91L15.3604 14.64C15.6323 14.3711 15.9756 14.1859 16.3495 14.1061C16.7235 14.0263 17.1125 14.0555 17.4704 14.19C18.3777 14.5286 19.3204 14.7634 20.2804 14.89C20.7662 14.9585 21.2098 15.2032 21.527 15.5775C21.8441 15.9518 22.0126 16.4296 22.0004 16.92Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PhoneIcon
