"use client"

import Link from "next/link"
import {  Network, Eye, Loader, Shell, Waypoints } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="border-b">
      <div
        className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">

          {/* <Shell color="#ff80c0" strokeWidth={1.5} className="h-9 w-6" /> */}
          <Waypoints color="#004e9b" strokeWidth={1.5} className="h-9 w-6" />
          <span className="text-xl font-regular mb-1">Imploy</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="../jobs/" className="text-sm font-medium hover:underline">
            Find jobs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Log in
          </Link>

          <Button variant="outline">For employers</Button>
        </nav>
      </div>
    </header>
  );
}

