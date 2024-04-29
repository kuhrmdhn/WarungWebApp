"use client"
import { IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigation2 } from 'react-feather'

export default function ScrollTopButton() {
  const [buttonVisible, setButtonVisible] = useState<Boolean>(false)
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      window.scrollY > 50 ? setButtonVisible(true) : setButtonVisible(false);
    }
  };
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ behavior: "smooth", top: 0 })
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <IconButton onClick={handleClick} position={"fixed"} transition={"all 500ms ease-in-out"} className={`${buttonVisible ? "z-10" : "-z-10"} bottom-5 right-5 duration-500 transition-all`} aria-label='Scroll to Top of Page Button' icon={<Navigation2 />} />
}
