import type { ReactNode } from "react"
import Link from "next/link"
import { Bell, CreditCard, Home, LogOut, Menu, Settings, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 mr-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LoyalX</span>
          </div>
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                    <Sparkles className="h-6 w-6" />
                    <span className="sr-only">LoyalX</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/tokens"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <CreditCard className="h-5 w-5" />
                    My Tokens
                  </Link>
                  <Link
                    href="/dashboard/memberships"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <User className="h-5 w-5" />
                    Memberships
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
            <Link href="/dashboard" className="font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link
              href="/dashboard/tokens"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              My Tokens
            </Link>
            <Link
              href="/dashboard/swap"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Swap
            </Link>
            <Link
              href="/dashboard/staking"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Staking
            </Link>
            <Link
              href="/dashboard/memberships"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Memberships
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" className="relative h-8 w-8 rounded-full">
                  <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="rounded-full object-cover" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex-1 container py-6 md:py-10">{children}</div>
    </div>
  )
}

