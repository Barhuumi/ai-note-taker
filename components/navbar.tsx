"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mic, BookOpen, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/recordings",
      label: "Recordings",
      icon: Mic,
      active: pathname === "/recordings",
    },
    {
      href: "/flashcards",
      label: "Flashcards",
      icon: BookOpen,
      active: pathname === "/flashcards",
    },
    {
      href: "/quizzes",
      label: "Quizzes",
      icon: BrainCircuit,
      active: pathname === "/quizzes",
    },
  ]

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center">
          <Mic className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">EchoLearn</span>
        </Link>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 flex-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={route.active ? "default" : "ghost"}
              asChild
            >
              <Link
                href={route.href}
                className="flex items-center"
              >
                <route.icon className="h-4 w-4 mr-2" />
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}