import { ArrowRight, BadgeCheck, Crown, Plus, ShoppingBag, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MembershipsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Memberships</h2>
        <p className="text-muted-foreground">Manage your NFT-based membership cards and exclusive benefits.</p>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">My Memberships</TabsTrigger>
          <TabsTrigger value="available">Available Memberships</TabsTrigger>
          <TabsTrigger value="benefits">My Benefits</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
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
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">10% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Early access to new collections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Exclusive member events</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-muted-foreground">Valid until: 12/2024</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Transfer
                    </Button>
                    <Button size="sm">View</Button>
                  </div>
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
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">5% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Extended warranty on electronics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Member-only tech support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Free battery replacements</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 px-6 py-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-muted-foreground">Valid until: 10/2024</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Transfer
                    </Button>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Add New Membership</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-muted p-3">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Explore and add new brand memberships</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse Memberships
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Gold Membership</h3>
                    <p className="text-yellow-100">FashionFit</p>
                  </div>
                  <Crown className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">20% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Early access to limited editions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Free shipping worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Personal shopping assistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Exclusive VIP events</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted p-2 text-sm">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Requires 4,000 FFT tokens or purchase for $199</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade Membership</Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Silver Membership</h3>
                    <p className="text-green-100">TechTrove</p>
                  </div>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">10% discount on all purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Priority customer service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Free device setup and training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Extended return period (60 days)</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted p-2 text-sm">
                  <Star className="h-4 w-4 text-green-600" />
                  <span>Requires 2,000 TTT tokens or purchase for $99</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade Membership</Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bronze Membership</h3>
                    <p className="text-orange-100">GourmetGo</p>
                  </div>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">5% discount on all orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Free delivery on orders over $30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Weekly special menu access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Birthday reward (free dessert)</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted p-2 text-sm">
                  <Star className="h-4 w-4 text-orange-500" />
                  <span>Requires 1,000 GGT tokens or purchase for $49</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Membership</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="benefits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Active Benefits</CardTitle>
              <CardDescription>All your current membership benefits across brands</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Benefit</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Membership Level</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">10% discount on all purchases</TableCell>
                    <TableCell>FashionFit</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>12/2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Use</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Early access to new collections</TableCell>
                    <TableCell>FashionFit</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>12/2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Use</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Free shipping on orders over $50</TableCell>
                    <TableCell>FashionFit</TableCell>
                    <TableCell>Silver</TableCell>
                    <TableCell>12/2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Use</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">5% discount on all purchases</TableCell>
                    <TableCell>TechTrove</TableCell>
                    <TableCell>Bronze</TableCell>
                    <TableCell>10/2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Use</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Extended warranty on electronics</TableCell>
                    <TableCell>TechTrove</TableCell>
                    <TableCell>Bronze</TableCell>
                    <TableCell>10/2024</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Use</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                View All Benefits
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

