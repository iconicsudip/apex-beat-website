import { useEffect, useState } from 'react'

export default function useResponsive() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    return {
        screenWidth,
        isMobile: screenWidth < 768,
        isTablet: screenWidth >= 768 && screenWidth < 1024,
        isLaptop: screenWidth >= 1024 && screenWidth < 1440,
        isDesktop: screenWidth >= 1440,
    }
}
