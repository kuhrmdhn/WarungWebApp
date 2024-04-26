"use client"
import { IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigation2 } from 'react-feather'

export default function ScrollTopButton() {
  const [buttonVisible, setButtonVisible] = useState<Boolean>(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
      setButtonVisible(true)
      return
    } else if(window.scrollY < 50) {
      setButtonVisible(false)
    }
  })
  return <IconButton position={"fixed"} transition={"all 500ms ease-in-out"}  onClick={scrollToTop} className={`${buttonVisible ? "z-10" : "-z-10"} bottom-5 right-5 duration-500 transition-all`} aria-label='Scroll to Top of Page Button' icon={<Navigation2 />} />
}
