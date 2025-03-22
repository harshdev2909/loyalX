"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpDown, ChevronDown, Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TokenDistributionPage() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Token Distribution</h2>
            <p className="text-muted-foreground">Manage and track all your loyalty tokens issued to customers.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Link href="/brand-dashboard/token-distribution/create">
              <Button className="gap-1">
                <Plus className="h-4 w-4" />
                Mint Tokens
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tokens</TabsTrigger>
          <TabsTrigger value="recent">Recently Issued</TabsTrigger>
          <TabsTrigger value="redeemed">Redeemed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by customer or transaction ID..." className="w-full pl-8" />
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
                  <DropdownMenuCheckboxItem>Redeemed Tokens</DropdownMenuCheckboxItem>
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
                  <DropdownMenuCheckboxItem checked>Date (Newest First)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Date (Oldest First)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Amount (High to Low)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Amount (Low to High)</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Customer Name (A-Z)</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Token Distribution History</CardTitle>
              <CardDescription>A record of all tokens issued to customers</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]" onClick={() => handleSort("customer")}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Customer
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("transaction")}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Transaction ID
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("amount")}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Amount
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("status")}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Status
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("date")}>
                      <div className="flex items-center gap-1 cursor-pointer">
                        Date
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sophia Anderson</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-22-001</TableCell>
                    <TableCell>120 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>2023-06-22</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Johnson</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-19-002</TableCell>
                    <TableCell>200 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>2023-06-19</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Emma Williams</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-15-003</TableCell>
                    <TableCell>80 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                        Staked
                      </span>
                    </TableCell>
                    <TableCell>2023-06-15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">David Brown</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-10-004</TableCell>
                    <TableCell>150 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-100">
                        Redeemed
                      </span>
                    </TableCell>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Olivia Davis</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-05-005</TableCell>
                    <TableCell>200 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>2023-06-05</TableCell>
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
                <div className="text-sm text-muted-foreground">Page 1 of 5</div>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Issued Tokens</CardTitle>
              <CardDescription>Tokens issued in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Customer</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sophia Anderson</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-22-001</TableCell>
                    <TableCell>120 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>2023-06-22</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Johnson</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-19-002</TableCell>
                    <TableCell>200 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Active
                      </span>
                    </TableCell>
                    <TableCell>2023-06-19</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Emma Williams</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-15-003</TableCell>
                    <TableCell>80 FFT</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                        Staked
                      </span>
                    </TableCell>
                    <TableCell>2023-06-15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="redeemed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Redeemed Tokens</CardTitle>
              <CardDescription>Tokens that have been redeemed by customers</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Customer</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Redemption Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">David Brown</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-06-10-004</TableCell>
                    <TableCell>150 FFT</TableCell>
                    <TableCell>Discount Coupon</TableCell>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">James Wilson</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-05-28-008</TableCell>
                    <TableCell>100 FFT</TableCell>
                    <TableCell>Free Product</TableCell>
                    <TableCell>2023-05-28</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sarah Miller</TableCell>
                    <TableCell className="font-mono text-xs">TXN-FFT-2023-05-15-012</TableCell>
                    <TableCell>75 FFT</TableCell>
                    <TableCell>Discount Coupon</TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

