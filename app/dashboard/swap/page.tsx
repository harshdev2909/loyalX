import { ArrowDown, ArrowRight, Info, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SwapPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Token Swap</h2>
        <p className="text-muted-foreground">Exchange your loyalty tokens between different brands.</p>
      </div>

      <Tabs defaultValue="swap" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="history">Swap History</TabsTrigger>
        </TabsList>
        <TabsContent value="swap" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Swap Tokens</CardTitle>
                <CardDescription>Exchange your tokens between different loyalty programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>From</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="fashionfit">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashionfit">FashionFit (FFT)</SelectItem>
                        <SelectItem value="techtrove">TechTrove (TTT)</SelectItem>
                        <SelectItem value="gourmetgo">GourmetGo (GGT)</SelectItem>
                        <SelectItem value="beautybliss">BeautyBliss (BBT)</SelectItem>
                        <SelectItem value="fitnessflex">FitnessFlex (FFX)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="number" placeholder="0.00" className="w-full" />
                  </div>
                  <div className="text-xs text-muted-foreground">Available: 2,450 FFT</div>
                </div>

                <div className="flex items-center justify-center">
                  <Button variant="ghost" size="icon" className="rounded-full bg-muted">
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>To</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="techtrove">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashionfit">FashionFit (FFT)</SelectItem>
                        <SelectItem value="techtrove">TechTrove (TTT)</SelectItem>
                        <SelectItem value="gourmetgo">GourmetGo (GGT)</SelectItem>
                        <SelectItem value="beautybliss">BeautyBliss (BBT)</SelectItem>
                        <SelectItem value="fitnessflex">FitnessFlex (FFX)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="number" placeholder="0.00" className="w-full" readOnly value="225" />
                  </div>
                </div>

                <div className="rounded-lg border p-3 bg-muted/50">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <span>Exchange Rate</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-3.5 w-3.5 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Current exchange rate between tokens</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>1 FFT = 0.9 TTT</span>
                      <RefreshCw className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span>Swap Fee</span>
                    <span>2.5%</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>You Receive</span>
                    <span>225 TTT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Swap Tokens</Button>
              </CardFooter>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Tokens</CardTitle>
                  <CardDescription>Available tokens for swapping</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-blue-500" />
                        <span>FashionFit (FFT)</span>
                      </div>
                      <span className="font-medium">2,450</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500" />
                        <span>TechTrove (TTT)</span>
                      </div>
                      <span className="font-medium">1,280</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-orange-500" />
                        <span>GourmetGo (GGT)</span>
                      </div>
                      <span className="font-medium">850</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-pink-500" />
                        <span>BeautyBliss (BBT)</span>
                      </div>
                      <span className="font-medium">620</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-purple-500" />
                        <span>FitnessFlex (FFX)</span>
                      </div>
                      <span className="font-medium">400</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exchange Rates</CardTitle>
                  <CardDescription>Current token exchange rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          FFT <ArrowRight className="h-3 w-3" /> TTT
                        </span>
                      </div>
                      <span>1 = 0.9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          FFT <ArrowRight className="h-3 w-3" /> GGT
                        </span>
                      </div>
                      <span>1 = 1.2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          TTT <ArrowRight className="h-3 w-3" /> GGT
                        </span>
                      </div>
                      <span>1 = 1.3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          BBT <ArrowRight className="h-3 w-3" /> FFT
                        </span>
                      </div>
                      <span>1 = 0.8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>
                          FFX <ArrowRight className="h-3 w-3" /> TTT
                        </span>
                      </div>
                      <span>1 = 0.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Swap History</CardTitle>
              <CardDescription>Your recent token swap transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-06-19</TableCell>
                    <TableCell>200 GGT</TableCell>
                    <TableCell>180 TTT</TableCell>
                    <TableCell>1 = 0.9</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-05</TableCell>
                    <TableCell>500 FFT</TableCell>
                    <TableCell>600 GGT</TableCell>
                    <TableCell>1 = 1.2</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-05-28</TableCell>
                    <TableCell>300 BBT</TableCell>
                    <TableCell>240 FFT</TableCell>
                    <TableCell>1 = 0.8</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell>150 TTT</TableCell>
                    <TableCell>195 GGT</TableCell>
                    <TableCell>1 = 1.3</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-05-02</TableCell>
                    <TableCell>400 FFX</TableCell>
                    <TableCell>280 TTT</TableCell>
                    <TableCell>1 = 0.7</TableCell>
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
                <div className="text-sm text-muted-foreground">Page 1 of 2</div>
                <Button variant="outline" size="sm">
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

