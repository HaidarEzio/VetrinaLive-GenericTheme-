import { useEffect } from 'react'

let firstClientX, clientX
const preventTouch = (e) => {
  const minValue = 5

  clientX = e.touches[0].clientX - firstClientX

  if (Math.abs(clientX) > minValue) {
    e.preventDefault()
    e.returnValue = false

    return false
  }
}

const touchStart = (e) => {
  firstClientX = e.touches[0].clientX
}

function useSwipeSlider(carousel) {
  useEffect(() => {
    const autoloop = setTimeout(() => {
      let storedSlide = localStorage.getItem('current-carousel-item')
      if (carousel && carousel.current && storedSlide) {
        carousel.current.goToSlide(parseInt(storedSlide))
        localStorage.removeItem('current-carousel-item')
      }
    }, 0)

    if (carousel && carousel.current) {
      const containerRef = carousel.current.containerRef.current
      containerRef.addEventListener('touchstart', touchStart)
      containerRef.addEventListener('touchmove', preventTouch, {
        passive: false
      })
    }

    return () => {
      clearTimeout(autoloop)
      if (carousel && carousel.current) {
        const containerRef = carousel.current.containerRef.current
        containerRef.removeEventListener('touchstart', touchStart)
        containerRef.removeEventListener('touchmove', preventTouch, {
          passive: false
        })
      }
    }
  }, [carousel])
}

export default useSwipeSlider
