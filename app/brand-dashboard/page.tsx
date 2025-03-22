"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ArrowRight, ArrowUpRight, LineChart, Plus, Repeat, Trophy, Users, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BrandDashboard() {
  const statsRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate stats cards
    if (statsRef.current) {
      gsap.from(statsRef.current.querySelectorAll(".stat-card"), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      })
    }

    // Animate chart placeholders
    if (chartRef.current) {
      gsap.from(chartRef.current.querySelectorAll(".chart-item"), {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      })
    }
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Brand Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, FashionFit! Here's an overview of your loyalty program.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/brand-dashboard/token-distribution/create">
            <Button variant="outline" className="gap-1">
              <Plus className="h-4 w-4" />
              Mint Tokens
            </Button>
          </Link>
          <Link href="/brand-dashboard/loyalty-program/create">
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              Create Campaign
            </Button>
          </Link>
        </div>
      </div>

      <div ref={statsRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="stat-card"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tokens Issued</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">125,430 FFT</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="stat-card"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,845</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="stat-card"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Token Redemption Rate</CardTitle>
              <Repeat className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32.8%</div>
              <p className="text-xs text-muted-foreground">+3.1% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="stat-card"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Membership NFTs</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">+15.3% from last month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div ref={chartRef} className="grid gap-6 md:grid-cols-2">
        <div className="chart-item">
          <Card>
            <CardHeader>
              <CardTitle>Program Health</CardTitle>
              <CardDescription>Overall performance of your loyalty program</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 mx-auto text-primary/50" />
                  <p className="mt-2 text-sm text-muted-foreground">Program health metrics chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="chart-item">
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
              <CardDescription>How your tokens are distributed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Circulating Supply</span>
                  <span className="font-medium">125,430 FFT</span>
                </div>
                <Progress value={62} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>Max Supply: 200,000 FFT</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Tokens Held by Users</span>
                  <span className="font-medium">85,250 FFT (68%)</span>
                </div>
                <Progress value={68} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Tokens Staked</span>
                  <span className="font-medium">32,180 FFT (26%)</span>
                </div>
                <Progress value={26} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Tokens Redeemed</span>
                  <span className="font-medium">8,000 FFT (6%)</span>
                </div>
                <Progress value={6} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1" asChild>
                <Link href="/brand-dashboard/token-distribution">
                  View Token Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="chart-item">
        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
            <CardDescription>Your most active loyalty program members</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Tokens Held</TableHead>
                  <TableHead>Membership Level</TableHead>
                  <TableHead>Lifetime Value</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Sophia Anderson</TableCell>
                  <TableCell>2,450 FFT</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>$4,850</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowUpRight className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Michael Johnson</TableCell>
                  <TableCell>3,120 FFT</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>$6,230</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowUpRight className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emma Williams</TableCell>
                  <TableCell>1,850 FFT</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>$3,720</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowUpRight className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">David Brown</TableCell>
                  <TableCell>2,780 FFT</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>$5,540</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowUpRight className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Olivia Davis</TableCell>
                  <TableCell>3,450 FFT</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>$6,890</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowUpRight className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full gap-1" asChild>
              <Link href="/brand-dashboard/customers">
                View All Customers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

