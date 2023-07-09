import { forwardRef } from 'react'
import clsx from 'clsx'

function Logo(props) {
  return (
    <svg
      {...props}
      width="267"
      height="50"
      viewBox="0 0 267 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.32501 1.14738H14.975V36.0359H32.8523V44.9437H5.32501V1.14738ZM56.0288 1.14738H64.0086L83.0612 44.9437H72.174L68.4006 35.6648H51.3894L47.7397 44.9437H37.0999L56.0288 1.14738ZM59.7403 13.8904L54.4205 27.4994H65.1221L59.7403 13.8904ZM101.79 22.0558L87.3151 1.14738H99.4395L108.78 16.4885L117.75 1.14738H129.441L115.275 21.8702L131.111 44.9437H118.987L108.285 27.3138L97.893 44.9437H86.4491L101.79 22.0558ZM138.982 1.14738H155.251C157.519 1.14738 159.664 1.35358 161.684 1.76597C163.705 2.17837 165.458 2.90006 166.942 3.93104C168.468 4.92079 169.664 6.28169 170.53 8.01375C171.437 9.70456 171.891 11.849 171.891 14.4471C171.891 17.0039 171.479 19.1484 170.654 20.8805C169.829 22.6125 168.695 23.994 167.252 25.025C165.808 26.056 164.097 26.7983 162.117 27.2519C160.138 27.6643 157.993 27.8705 155.684 27.8705H148.632V44.9437H138.982V1.14738ZM148.632 19.7051H155.065C155.931 19.7051 156.756 19.6226 157.54 19.4577C158.365 19.2927 159.086 19.0247 159.705 18.6535C160.365 18.2411 160.88 17.705 161.251 17.0452C161.664 16.3441 161.87 15.4781 161.87 14.4471C161.87 13.3336 161.602 12.447 161.066 11.7872C160.571 11.0861 159.911 10.55 159.086 10.1788C158.303 9.80766 157.416 9.58085 156.426 9.49837C155.437 9.37465 154.488 9.31279 153.581 9.31279H148.632V19.7051ZM181.383 1.14738H198.332C200.559 1.14738 202.662 1.3742 204.642 1.82783C206.662 2.24023 208.415 2.96192 209.9 3.9929C211.426 4.98265 212.622 6.34355 213.488 8.07561C214.395 9.76643 214.848 11.8903 214.848 14.4471C214.848 17.5401 214.044 20.1794 212.436 22.3651C210.828 24.5095 208.477 25.8704 205.384 26.4478L216.519 44.9437H204.951L195.796 27.4375H191.033V44.9437H181.383V1.14738ZM191.033 19.2721H196.724C197.59 19.2721 198.497 19.2515 199.446 19.2103C200.435 19.1278 201.322 18.9422 202.105 18.6535C202.889 18.3236 203.528 17.8287 204.023 17.1689C204.559 16.5091 204.827 15.5812 204.827 14.3852C204.827 13.2718 204.6 12.3851 204.147 11.7253C203.693 11.0655 203.116 10.5706 202.415 10.2407C201.714 9.86952 200.91 9.62209 200.002 9.49837C199.095 9.37465 198.208 9.31279 197.342 9.31279H191.033V19.2721Z"
        fill="white"
      />
      <circle
        cx="242.782"
        cy="23.2817"
        r="20.6197"
        stroke="#FFC72C"
        stroke-width="3.43662"
      />
      <path
        d="M245.015 7.64518L245.415 7.80494C248.806 9.16147 251.759 11.4245 253.951 14.3466V14.3466"
        stroke="#FFC72C"
        stroke-width="3.43662"
        stroke-linecap="round"
      />
      <path
        d="M256.769 19.1903L256.807 19.3048C257.157 20.3698 257.335 21.4837 257.335 22.6048V22.6048"
        stroke="#FFC72C"
        stroke-width="3.43662"
        stroke-linecap="round"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        {/* <MenuIcon className="h-6 w-6 flex-none" /> */}
        <Logo className="h-5 w-full flex-none" />
        {/* <UserIcon className="h-6 w-6 flex-none" /> */}
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl font-black text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-200">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto', className)}
    >
      {children}
    </div>
  )
})
