"use client"
import Clock from "@/components/Clock"
import { NavBar } from "@/components/navBar"

export default function ChromePage() {
  return (
    <main>
      <NavBar />
      <div className="mt-44 text-8xl">
        <Clock />
      </div>
    </main>
  )
}
