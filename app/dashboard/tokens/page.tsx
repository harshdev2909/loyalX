import { ChevronDown, Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TokensPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Tokens</h2>
          <p className="text-muted-foreground">Manage and track all your loyalty tokens across different brands.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            Connect Brand
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tokens..." className="w-full pl-8" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>All Tokens</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Staked Tokens</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Available Tokens</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                Sort
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Value (High to Low)</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Value (Low to High)</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Name (A-Z)</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Recently Added</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

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
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Stake
            </Button>
            <Button variant="outline" size="sm">
              Swap
            </Button>
            <Button size="sm">Use</Button>
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
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Stake
            </Button>
            <Button variant="outline" size="sm">
              Swap
            </Button>
            <Button size="sm">Use</Button>
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
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Stake
            </Button>
            <Button variant="outline" size="sm">
              Swap
            </Button>
            <Button size="sm">Use</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BeautyBliss Tokens</CardTitle>
            <div className="h-4 w-4 rounded-full bg-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">620 BBT</div>
            <p className="text-xs text-muted-foreground">≈ $124.00</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>To Bronze tier</span>
                <span>1,000 BBT</span>
              </div>
              <Progress value={62} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Stake
            </Button>
            <Button variant="outline" size="sm">
              Swap
            </Button>
            <Button size="sm">Use</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">FitnessFlex Tokens</CardTitle>
            <div className="h-4 w-4 rounded-full bg-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">400 FFX</div>
            <p className="text-xs text-muted-foreground">≈ $80.00</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>To Bronze tier</span>
                <span>500 FFX</span>
              </div>
              <Progress value={80} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Stake
            </Button>
            <Button variant="outline" size="sm">
              Swap
            </Button>
            <Button size="sm">Use</Button>
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

      <Card>
        <CardHeader>
          <CardTitle>Token Transaction History</CardTitle>
          <CardDescription>A record of all your token transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Brand</TableHead>
                <TableHead>Transaction</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">FashionFit</TableCell>
                <TableCell>Purchase Reward</TableCell>
                <TableCell>+120 FFT</TableCell>
                <TableCell className="text-right">2023-06-22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GourmetGo</TableCell>
                <TableCell>Swap to TechTrove</TableCell>
                <TableCell>-200 GGT</TableCell>
                <TableCell className="text-right">2023-06-19</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">TechTrove</TableCell>
                <TableCell>Swap from GourmetGo</TableCell>
                <TableCell>+180 TTT</TableCell>
                <TableCell className="text-right">2023-06-19</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">FashionFit</TableCell>
                <TableCell>Staking Reward</TableCell>
                <TableCell>+45 FFT</TableCell>
                <TableCell className="text-right">2023-06-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">BeautyBliss</TableCell>
                <TableCell>Purchase Reward</TableCell>
                <TableCell>+80 BBT</TableCell>
                <TableCell className="text-right">2023-06-10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <div className="text-sm text-muted-foreground">Page 1 of 3</div>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

