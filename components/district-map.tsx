"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { districts } from "@/lib/districts"

export function DistrictMap() {
  const router = useRouter()
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const svgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsLoading(true)
    // Fetch the SVG as raw content
    fetch('/t.svg')
      .then(response => response.text())
      .then(svgContent => {
        if (svgRef.current) {
          svgRef.current.innerHTML = svgContent
          
          // Get all the path elements that represent districts
          const paths = svgRef.current.querySelectorAll('.tel')
          
          // Add event listeners to each path
          paths.forEach(path => {
            // Handle mouse enter (hover)
            path.addEventListener('mouseenter', (e) => {
              const target = e.target as SVGPathElement
              const districtName = target.getAttribute('name')
              
              // Store the original styles
              const originalFill = target.style.fill
              const originalStroke = target.style.stroke
              const originalStrokeWidth = target.style.strokeWidth
              const originalTransform = target.style.transform
              
              // Set hover styles
              target.style.fill = '#e2e8f0' // light blue/gray
              target.style.stroke = '#2563eb' // blue
              target.style.strokeWidth = '2'
              target.style.transform = 'scale(1.05)'
              target.style.transformOrigin = 'center'
              target.style.transition = 'all 0.3s ease'
              
              // Set active district
              setActiveDistrict(districtName)
              
              // Handle mouse leave
              const handleMouseLeave = () => {
                // Restore original styles
                target.style.fill = originalFill
                target.style.stroke = originalStroke
                target.style.strokeWidth = originalStrokeWidth
                target.style.transform = originalTransform
                setActiveDistrict(null)
                
                // Remove the event listener
                target.removeEventListener('mouseleave', handleMouseLeave)
              }
              
              target.addEventListener('mouseleave', handleMouseLeave)
            })
            
            // Handle click
            path.addEventListener('click', (e) => {
              const target = e.target as SVGPathElement
              const districtName = target.getAttribute('name')
              
              if (districtName) {
                const slug = districtName.toLowerCase().replace(/\s+/g, '-')
                
                router.push(`/districts/${slug}`)
              }
            })
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
      
    // Cleanup function to remove event listeners
    return () => {
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll('.tel')
        paths.forEach(path => {
          path.replaceWith(path.cloneNode(true))
        })
      }
    }
  }, [router])

  return (
    <div className="relative w-full">
      <div className="border rounded-lg shadow-sm p-4 bg-white">
        
        {activeDistrict && (
          <div className="absolute top-4 right-4 bg-white p-2 shadow-md rounded-md border z-10">
            <h3 className="text-lg font-medium">{activeDistrict}</h3>
            <p className="text-sm text-gray-500">Click for details</p>
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
          <p>Hover over a district to see its name. Click on a district to view its details.</p>
        </div>
      </div>
    </div>
  )
}