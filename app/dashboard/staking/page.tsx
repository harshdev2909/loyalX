import { Clock, CreditCard, LineChart, Lock, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StakingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Token Staking</h2>
        <p className="text-muted-foreground">Stake your loyalty tokens to earn rewards and unlock premium benefits.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staked Value</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$540.00</div>
            <p className="text-xs text-muted-foreground">43% of your portfolio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Earned</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32.50</div>
            <p className="text-xs text-muted-foreground">+5.2% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Stakes</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across 2 brands</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unlocked Benefits</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Premium perks active</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Stakes</TabsTrigger>
          <TabsTrigger value="available">Available to Stake</TabsTrigger>
          <TabsTrigger value="history">Staking History</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500" />
                    <CardTitle className="text-sm font-medium">FashionFit Stake</CardTitle>
                  </div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Silver Tier
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">500 FFT</div>
                <p className="text-xs text-muted-foreground">≈ $100.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Time remaining
                    </span>
                    <span>45 days</span>
                  </div>
                  <Progress value={50} />
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking period</span>
                    <span>90 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Reward rate</span>
                    <span>12% APY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rewards earned</span>
                    <span>15 FFT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Extend
                </Button>
                <Button variant="outline" size="sm">
                  Claim Rewards
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500" />
                    <CardTitle className="text-sm font-medium">TechTrove Stake</CardTitle>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Bronze Tier
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">800 TTT</div>
                <p className="text-xs text-muted-foreground">≈ $240.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Time remaining
                    </span>
                    <span>30 days</span>
                  </div>
                  <Progress value={25} />
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking period</span>
                    <span>120 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Reward rate</span>
                    <span>10% APY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rewards earned</span>
                    <span>20 TTT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Extend
                </Button>
                <Button variant="outline" size="sm">
                  Claim Rewards
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-orange-500" />
                    <CardTitle className="text-sm font-medium">GourmetGo Stake</CardTitle>
                  </div>
                  <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                    Bronze Tier
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,000 GGT</div>
                <p className="text-xs text-muted-foreground">≈ $200.00</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Time remaining
                    </span>
                    <span>60 days</span>
                  </div>
                  <Progress value={33} />
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking period</span>
                    <span>90 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Reward rate</span>
                    <span>8% APY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rewards earned</span>
                    <span>22 GGT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Extend
                </Button>
                <Button variant="outline" size="sm">
                  Claim Rewards
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-500" />
                    <CardTitle className="text-sm font-medium">FashionFit Tokens</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,950 FFT</div>
                <p className="text-xs text-muted-foreground">≈ $390.00 available to stake</p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking options</span>
                    <span>30, 60, 90 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Max reward rate</span>
                    <span>15% APY (90 days)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Min stake amount</span>
                    <span>100 FFT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Stake Tokens</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500" />
                    <CardTitle className="text-sm font-medium">TechTrove Tokens</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">480 TTT</div>
                <p className="text-xs text-muted-foreground">≈ $144.00 available to stake</p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking options</span>
                    <span>30, 60, 120 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Max reward rate</span>
                    <span>12% APY (120 days)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Min stake amount</span>
                    <span>200 TTT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Stake Tokens</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-pink-500" />
                    <CardTitle className="text-sm font-medium">BeautyBliss Tokens</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">620 BBT</div>
                <p className="text-xs text-muted-foreground">≈ $124.00 available to stake</p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Staking options</span>
                    <span>30, 90 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Max reward rate</span>
                    <span>10% APY (90 days)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Min stake amount</span>
                    <span>100 BBT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Stake Tokens</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Staking History</CardTitle>
              <CardDescription>Your past staking activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Brand</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Rewards</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">FashionFit</TableCell>
                    <TableCell>300 FFT</TableCell>
                    <TableCell>60 days</TableCell>
                    <TableCell>18 FFT</TableCell>
                    <TableCell>2023-03-15</TableCell>
                    <TableCell>2023-05-14</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TechTrove</TableCell>
                    <TableCell>500 TTT</TableCell>
                    <TableCell>90 days</TableCell>
                    <TableCell>45 TTT</TableCell>
                    <TableCell>2023-02-10</TableCell>
                    <TableCell>2023-05-11</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">GourmetGo</TableCell>
                    <TableCell>200 GGT</TableCell>
                    <TableCell>30 days</TableCell>
                    <TableCell>5 GGT</TableCell>
                    <TableCell>2023-04-05</TableCell>
                    <TableCell>2023-05-05</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BeautyBliss</TableCell>
                    <TableCell>400 BBT</TableCell>
                    <TableCell>60 days</TableCell>
                    <TableCell>20 BBT</TableCell>
                    <TableCell>2023-01-20</TableCell>
                    <TableCell>2023-03-21</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
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
      </Tabs>
    </div>
  )
}

