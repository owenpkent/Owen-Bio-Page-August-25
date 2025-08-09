"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface VantaCellsBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function VantaCellsBackground({ children, className = '' }: VantaCellsBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !vantaRef.current || typeof window === 'undefined') return

    const initVanta = async () => {
      try {
        // Load scripts dynamically to avoid build issues
        if (!window.THREE) {
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
          document.head.appendChild(script)
          await new Promise(resolve => script.onload = resolve)
        }

        if (!window.VANTA) {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js'
          document.head.appendChild(script)
          await new Promise(resolve => script.onload = resolve)
        }
        
        if (vantaRef.current && window.VANTA && !vantaEffect) {
          const effect = window.VANTA.CELLS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            // Blue color scheme to match your Bossa Nova palette
            color1: theme === 'dark' ? 0x1a365d : 0x00A68C, // Palm color
            color2: theme === 'dark' ? 0x2d5a87 : 0x00BFB3, // Wave color
            size: 1.50,
            speed: 1.00,
            zoom: 0.75
          })
          setVantaEffect(effect)
        }
      } catch (error) {
        console.warn('Vanta.js failed to load:', error)
      }
    }

    initVanta()

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy()
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error)
        }
        setVantaEffect(null)
      }
    }
  }, [mounted, theme, vantaEffect])

  // Update colors when theme changes
  useEffect(() => {
    if (vantaEffect && mounted) {
      try {
        vantaEffect.setOptions({
          color1: theme === 'dark' ? 0x1a365d : 0x00A68C,
          color2: theme === 'dark' ? 0x2d5a87 : 0x00BFB3,
        })
      } catch (error) {
        console.warn('Error updating Vanta colors:', error)
      }
    }
  }, [theme, mounted, vantaEffect])

  if (!mounted) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={vantaRef} 
        className="absolute inset-0 z-0"
        style={{ 
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)' 
            : 'linear-gradient(135deg, #00A68C 0%, #00BFB3 100%)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}
