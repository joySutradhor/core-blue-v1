"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeSwitcher() {
    const [ mounted , setMounted ] = useState(false)
    const {setTheme , resolvedTheme } = useTheme()

    useEffect( () => setMounted(true), [])

    if(!mounted) return null ;

    return (
        <div onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? <FiSun className='text-white dark:text-black/80' /> : <FiMoon className='text-white dark:text-black/80' />}
        </div>
    );

}
