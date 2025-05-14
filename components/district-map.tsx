"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export function DistrictMap() {
  const router = useRouter()
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const svgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Check if device is mobile/tablet (no cursor)
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      
      setIsMobile(isTouchDevice && window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    fetch('/t.svg')
      .then(response => response.text())
      .then(svgContent => {
        if (svgRef.current) {
          svgRef.current.innerHTML = svgContent
          
          const paths = svgRef.current.querySelectorAll('.tel')
          
          paths.forEach(path => {
            // Only add hover events for non-mobile devices
            if (!isMobile) {
              path.addEventListener('mouseenter', (e) => {
                const target = e.target as SVGPathElement
                const districtName = target.getAttribute('name')
                
                if (target.parentNode) {
                  target.parentNode.appendChild(target)
                }
                
                const originalStroke = target.style.stroke
                const originalStrokeWidth = target.style.strokeWidth
                const originalTransform = target.style.transform
                const originalZIndex = target.style.zIndex
                
                target.style.stroke = '#2563eb' 
                target.style.strokeWidth = '3'
                target.style.transform = 'scale(1.1)' 
                target.style.transformOrigin = 'center'
                target.style.transition = 'all 0.3s ease-in'
                target.style.zIndex = '1' 
                
                setActiveDistrict(districtName)
                
                const handleMouseLeave = () => {
                  target.style.stroke = originalStroke
                  target.style.strokeWidth = originalStrokeWidth
                  target.style.transform = originalTransform
                  target.style.zIndex = originalZIndex
                  setActiveDistrict(null)
                  
                  target.removeEventListener('mouseleave', handleMouseLeave)
                }
                
                target.addEventListener('mouseleave', handleMouseLeave)
              })
              
              // Click handler for desktop
              path.addEventListener('click', (e) => {
                const target = e.target as SVGPathElement
                const districtName = target.getAttribute('name')
                
                if (districtName) {
                  const slug = districtName.toLowerCase().replace(/\s+/g, '-')
                  window.open(`/districts/${slug}`, '_blank')
                }
              })
            }

            // Touch handler for mobile devices only
            if (isMobile) {
              path.addEventListener('touchstart', (e) => {
                const target = e.target as SVGPathElement
                const districtName = target.getAttribute('name')
                
                // Reset all paths styling
                const paths = svgRef.current?.querySelectorAll('.tel') || []
                paths.forEach(p => {
                  const pathElement = p as SVGPathElement
                  pathElement.style.stroke = ''
                  pathElement.style.strokeWidth = ''
                  pathElement.style.transform = ''
                  pathElement.style.zIndex = ''
                })
                
                // Bring the tapped element to the front
                if (target.parentNode) {
                  target.parentNode.appendChild(target)
                }
                
                // Style the tapped district
                target.style.stroke = '#2563eb'
                target.style.strokeWidth = '2'
                target.style.transform = 'scale(1.05)'
                target.style.transformOrigin = 'center'
                target.style.transition = 'all 0.3s ease'
                target.style.zIndex = '10'
                
                // Set active district to show info
                setActiveDistrict(districtName)
                
                // Prevent default to avoid zoom issues on mobile
                e.preventDefault()
              })
            }
          })
          
          const svgElement = svgRef.current.querySelector('svg')
          if (svgElement) {
            svgElement.setAttribute('width', '100%')
            svgElement.setAttribute('height', '100%')
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')
            svgElement.setAttribute('viewBox', '0 0 1000 1000')
            svgElement.style.display = 'block'
            svgElement.style.margin = '0 auto'
            svgElement.style.maxHeight = '60vh'
            svgElement.style.maxWidth = '100%'
          }
          
          setIsLoading(false)
        }
      })
      .catch(error => {
        console.error('Error loading SVG:', error)
        setIsLoading(false)
      })
      
    return () => {
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll('.tel')
        paths.forEach(path => {
          path.replaceWith(path.cloneNode(true))
        })
      }
    }
  }, [router, isMobile])

  // Function to handle viewing district details
  const handleViewDistrictDetails = () => {
    if (activeDistrict) {
      const slug = activeDistrict.toLowerCase().replace(/\s+/g, '-')
      window.open(`/districts/${slug}`, '_blank')
    }
  }

  return (
    <div className="relative w-full">
      <div className="border rounded-lg shadow-sm p-4 bg-white">
        
        {activeDistrict && (
          <div className="absolute top-4 right-4 bg-white p-2 shadow-md rounded-md border z-10">
            <h3 className="text-lg font-medium">{activeDistrict} District</h3>
            {isMobile && (
              <button 
                onClick={handleViewDistrictDetails}
                className="mt-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:ring-2 hover:ring-black text-white py-1.5 px-3 rounded-md text-sm font-medium shadow-sm transition-all duration-200 flex items-center justify-center"
                >
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            )}
            {!isMobile && (
              <p className="text-sm text-gray-500">Click for details</p>
            )}
          </div>
        )}
        
        <div className="svg-container relative w-full" style={{ height: "60vh", overflow: "hidden" }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          <div 
            ref={svgRef} 
            className="w-full h-full"
            style={{ overflow: "hidden" }}
          />
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          {isMobile ? (
            <p>Tap on a district to see its name and a button to view details.</p>
          ) : (
            <p>Hover over a district to see its name. Click on a district to view its details.</p>
          )}
        </div>
      </div>
    </div>
  )
}