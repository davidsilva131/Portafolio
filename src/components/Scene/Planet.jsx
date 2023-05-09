'use client'
import { useMemo } from "react"
import * as THREE from 'three'
import Word from "./Word"

export default function Planet({ count = 5, radius = 20 }) {
  const skills=['React','Sass','Redux','Tailwindcss','Next.js','Threejs','JavaScript','SQL','Git','Firebase','Firestore','Supabase','Axios','C#','HTML','CSS','Material UI']

  const randomSkill=()=>{
    return skills[Math.floor(Math.random()*skills.length)]
  }
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI*2) / count
    for (let i = 1; i < count+1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomSkill()])
    return temp
  }, [count, radius])
  return (
      words.map(([pos, word], index) => <Word key={index} position={pos} children={word}/>)
  )
  
}