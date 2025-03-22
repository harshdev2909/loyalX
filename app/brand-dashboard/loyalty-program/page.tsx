"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Download, Filter, Plus, Search, Tag, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function LoyaltyProgramPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Loyalty Program</h2>
            <p className="text-muted-foreground">Manage your loyalty program, memberships, and promotions.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/brand-dashboard/loyalty-program/create">
              <Button className="gap-1">
                <Plus className="h-4 w-4" />
                Create Campaign
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="memberships" className="space-y-4">
        <TabsList>
          <TabsTrigger value="memberships">Memberships</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="memberships" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search memberships..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Gold Membership</CardTitle>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">Gold</Badge>
                </div>
                <CardDescription>Premium tier membership</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Active Members</span>
                  <span className="font-medium">250</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Token Requirement</span>
                  <span className="font-medium">4,000 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Direct Purchase Price</span>
                  <span className="font-medium">$199</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Created</span>
                  <span className="font-medium">Jan 15, 2023</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Silver Membership</CardTitle>
                  <Badge className="bg-slate-400 hover:bg-slate-500">Silver</Badge>
                </div>
                <CardDescription>Mid-tier membership</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Active Members</span>
                  <span className="font-medium">450</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Token Requirement</span>
                  <span className="font-medium">2,000 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Direct Purchase Price</span>
                  <span className="font-medium">$99</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Created</span>
                  <span className="font-medium">Jan 15, 2023</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Bronze Membership</CardTitle>
                  <Badge className="bg-amber-700 hover:bg-amber-800">Bronze</Badge>
                </div>
                <CardDescription>Entry-level membership</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Active Members</span>
                  <span className="font-medium">550</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Token Requirement</span>
                  <span className="font-medium">1,000 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Direct Purchase Price</span>
                  <span className="font-medium">$49</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Created</span>
                  <span className="font-medium">Jan 15, 2023</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Create New Membership</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-muted p-3">
                  <Trophy className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Create a new membership tier</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/brand-dashboard/loyalty-program/create-membership">Create Membership</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="promotions" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search promotions..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="gap-1">
                <Calendar className="h-4 w-4" />
                Date Range
              </Button>
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Promotions</CardTitle>
              <CardDescription>Currently running promotional campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Summer Sale Bonus</TableCell>
                    <TableCell>Token Multiplier</TableCell>
                    <TableCell>Jun 1, 2023</TableCell>
                    <TableCell>Aug 31, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                    </TableCell>
                    <TableCell>342</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Membership Upgrade Discount</TableCell>
                    <TableCell>Tier Promotion</TableCell>
                    <TableCell>Jul 15, 2023</TableCell>
                    <TableCell>Sep 15, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                    </TableCell>
                    <TableCell>128</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Referral Bonus</TableCell>
                    <TableCell>Referral</TableCell>
                    <TableCell>Jan 1, 2023</TableCell>
                    <TableCell>Dec 31, 2023</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                    </TableCell>
                    <TableCell>215</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Spring Collection Preview</TableCell>
                    <TableCell>Early Access</TableCell>
                    <TableCell>Mar 1, 2023</TableCell>
                    <TableCell>Mar 15, 2023</TableCell>
                    <TableCell>
                      <Badge variant="outline">Ended</Badge>
                    </TableCell>
                    <TableCell>189</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <div className="text-sm text-muted-foreground">Page 1 of 1</div>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search rewards..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Link href="/brand-dashboard/loyalty-program/create-reward">
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  Add Reward
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">10% Discount</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>Store-wide discount</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Token Cost</span>
                  <span className="font-medium">100 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Redemptions</span>
                  <span className="font-medium">1,245</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Available For</span>
                  <span className="font-medium">All Members</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Free Shipping</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>Free shipping on any order</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Token Cost</span>
                  <span className="font-medium">50 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Redemptions</span>
                  <span className="font-medium">2,187</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Available For</span>
                  <span className="font-medium">All Members</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Early Access</CardTitle>
                  <Badge className="bg-purple-500 hover:bg-purple-600">Exclusive</Badge>
                </div>
                <CardDescription>Early access to new collections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Token Cost</span>
                  <span className="font-medium">200 FFT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Redemptions</span>
                  <span className="font-medium">568</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Available For</span>
                  <span className="font-medium">Silver & Gold</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>

            <Card className="border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Create New Reward</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-muted p-3">
                  <Tag className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Add a new reward option</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/brand-dashboard/loyalty-program/create-reward">Create Reward</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

