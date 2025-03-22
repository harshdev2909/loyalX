"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, BadgeCheck, Coins, CreditCard, Repeat, ShieldCheck, Sparkles, Trophy, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const brandsRef = useRef<HTMLDivElement>(null)
  const usersRef = useRef<HTMLDivElement>(null)
  const demoRef = useRef<HTMLDivElement>(null)

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const brandsInView = useInView(brandsRef, { once: true, amount: 0.3 })
  const usersInView = useInView(usersRef, { once: true, amount: 0.3 })

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }

    // Features section animation with ScrollTrigger
    if (featuresRef.current) {
      gsap.from(featuresRef.current.querySelectorAll(".feature-card"), {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col dark">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LoyalX</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#brands" className="text-sm font-medium hover:text-primary">
              For Brands
            </Link>
            <Link href="#users" className="text-sm font-medium hover:text-primary">
              For Users
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section ref={heroRef} className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Future-Proof Loyalty Rewards for E-commerce
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground md:text-xl animate-hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Tokenize your loyalty program. Enable customers to earn, trade, and redeem rewards across multiple
                    brands.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row animate-hero"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button size="lg" variant="outline">
                      View Demo
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="flex items-center justify-center animate-hero"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-muted p-8 shadow-lg">
                  <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
                  <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
                    <Wallet className="h-16 w-16 text-primary" />
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Web3-Powered Loyalty</h2>
                      <p className="text-muted-foreground">
                        No crypto complexity. Just seamless rewards that work across your favorite brands.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-md">
                        <Coins className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-md">
                        <CreditCard className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-md">
                        <Trophy className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" ref={featuresRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  Key Features
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Revolutionize Your Loyalty Program
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  LoyalX transforms traditional loyalty programs into dynamic, interoperable reward ecosystems.
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <Coins className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Tokenized Loyalty Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Convert traditional loyalty points into tradable tokens that never expire and grow in value.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <Repeat className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Cross-Brand Swapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Trade loyalty tokens between brands, expanding redemption options for your customers.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <BadgeCheck className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>NFT Memberships</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Offer exclusive tiered memberships with tradable benefits and special perks.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>No Crypto Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Users sign up with email or social login. No wallets or crypto knowledge required.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <CreditCard className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Staking Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Customers can stake tokens to unlock cashback, discounts, and early access to products.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader className="pb-2">
                  <Trophy className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Brand Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive analytics and tools to create, manage, and optimize your loyalty program.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="brands" ref={brandsRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={brandsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Brands</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Supercharge Your Customer Loyalty
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join a network of forward-thinking brands and transform how you reward your most loyal customers.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Increase customer retention by up to 30%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Reduce loyalty program operational costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Access cross-brand marketing opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Detailed analytics on customer engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>No blockchain expertise required</span>
                  </div>
                </div>
                <div>
                  <Link href="/brand-signup">
                    <Button size="lg">Join as a Brand</Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={brandsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted p-8">
                  <div className="absolute inset-0 bg-grid-black/5" />
                  <img
                    src="/placeholder.svg?height=450&width=600"
                    alt="Brand dashboard preview"
                    className="mx-auto h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="users" ref={usersRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex items-center justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={usersInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-background p-8">
                  <div className="absolute inset-0 bg-grid-black/5" />
                  <img
                    src="/placeholder.svg?height=450&width=600"
                    alt="User dashboard preview"
                    className="mx-auto h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={usersInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Users</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loyalty That Works For You</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Earn rewards that never expire, can be traded, and grow in value over time.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Earn tokens from your favorite brands</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Swap tokens between different loyalty programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Stake tokens for enhanced rewards and benefits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Collect and trade exclusive membership NFTs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span>Simple sign-up with email or social login</span>
                  </div>
                </div>
                <div>
                  <Link href="/signup">
                    <Button size="lg">Create Your Account</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="demo" ref={demoRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  See LoyalX in Action
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Experience how LoyalX transforms loyalty programs for both brands and users.
                </motion.p>
              </div>
              <motion.div
                className="mx-auto w-full max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-video overflow-hidden rounded-xl border bg-muted shadow-lg">
                  <img
                    src="/placeholder.svg?height=450&width=800"
                    alt="LoyalX demo video placeholder"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/signup">
                  <Button size="lg">Get Started Now</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">LoyalX</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Future-proof loyalty rewards for e-commerce businesses and their customers.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#brands" className="text-muted-foreground hover:text-foreground">
                    For Brands
                  </Link>
                </li>
                <li>
                  <Link href="#users" className="text-muted-foreground hover:text-foreground">
                    For Users
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LoyalX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

