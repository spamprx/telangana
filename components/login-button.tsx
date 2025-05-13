"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleGoogleLogin = () => {
    setIsLoading(true)
    // Simulate Google authentication
    setTimeout(() => {
      setIsLoading(false)
      setIsLoggedIn(true)
      setIsOpen(false)
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
          <DialogDescription>Access exclusive content and features by logging in.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button onClick={handleGoogleLogin} disabled={isLoading} className="w-full">
            {isLoading ? "Logging in..." : "Continue with Google"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
