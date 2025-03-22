import Link from "next/link"
import { ArrowRight, ArrowUpRight, CreditCard, LineChart, Plus, Repeat, Trophy, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, Alex! Here's an overview of your loyalty rewards.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/tokens">
            <Button variant="outline" className="gap-1">
              <Wallet className="h-4 w-4" />
              View All Tokens
            </Button>
          </Link>
          <Link href="/dashboard/swap">
            <Button className="gap-1">
              <Repeat className="h-4 w-4" />
              Swap Tokens
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Token Value</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,248.42</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Staked Tokens</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$540.00</div>
            <p className="text-xs text-muted-foreground">43% of your portfolio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Membership Level</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Silver</div>
            <p className="text-xs text-muted-foreground">75% to Gold level</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brands Connected</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="tokens" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tokens">My Tokens</TabsTrigger>
          <TabsTrigger value="memberships">Memberships</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="tokens" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">FashionFit Tokens</CardTitle>
                <div className="h-4 w-4 rounded-full bg-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,450 FFT</div>
                <p className="text-xs text-muted-foreground">≈ $490.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>To Gold tier</span>
                    <span>4,000 FFT</span>
                  </div>
                  <Progress value={61} />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full gap-1 text-xs">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">TechTrove Tokens</CardTitle>
                <div className="h-4 w-4 rounded-full bg-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,280 TTT</div>
                <p className="text-xs text-muted-foreground">≈ $384.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>To Silver tier</span>
                    <span>2,000 TTT</span>
                  </div>
                  <Progress value={64} />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full gap-1 text-xs">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">GourmetGo Tokens</CardTitle>
                <div className="h-4 w-4 rounded-full bg-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">850 GGT</div>
                <p className="text-xs text-muted-foreground">≈ $170.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>To Bronze tier</span>
                    <span>1,000 GGT</span>
                  </div>
                  <Progress value={85} />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full gap-1 text-xs">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Connect New Brand</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-muted p-3">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Add a new brand to earn more tokens</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Connect Brand
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard/tokens">
              <Button variant="outline" className="gap-1">
                View All Tokens
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="memberships" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Silver Membership</h3>
                    <p className="text-blue-100">FashionFit</p>
                  </div>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">10% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Early access to new collections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Free shipping on orders over $50</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-muted-foreground">Valid until: 12/2024</span>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-700 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bronze Membership</h3>
                    <p className="text-green-100">TechTrove</p>
                  </div>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">5% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Extended warranty on electronics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Member-only tech support</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-muted-foreground">Valid until: 10/2024</span>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Discover Memberships</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-muted p-3">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Explore exclusive membership options</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse Memberships
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard/memberships">
              <Button variant="outline" className="gap-1">
                View All Memberships
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent transactions and rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Wallet className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Earned 120 FFT</p>
                    <p className="text-xs text-muted-foreground">FashionFit purchase - $240</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">+120 FFT</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Repeat className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Swapped Tokens</p>
                    <p className="text-xs text-muted-foreground">200 GGT → 180 TTT</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Swap</p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <Trophy className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Membership Upgrade</p>
                    <p className="text-xs text-muted-foreground">FashionFit: Bronze → Silver</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Upgrade</p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <CreditCard className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Staked Tokens</p>
                    <p className="text-xs text-muted-foreground">500 TTT for 3 months</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Stake</p>
                    <p className="text-xs text-muted-foreground">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                View All Activity
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

