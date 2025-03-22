"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Check, ChevronsUpDown, Loader2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const customers = [
  { value: "sophia-anderson", label: "Sophia Anderson" },
  { value: "michael-johnson", label: "Michael Johnson" },
  { value: "emma-williams", label: "Emma Williams" },
  { value: "david-brown", label: "David Brown" },
  { value: "olivia-davis", label: "Olivia Davis" },
  { value: "james-wilson", label: "James Wilson" },
  { value: "sarah-miller", label: "Sarah Miller" },
]

export default function CreateTokenPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [distributionType, setDistributionType] = useState("single")
  const [open, setOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate token minting process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/brand-dashboard/token-distribution")
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Mint Tokens</h2>
            <p className="text-muted-foreground">Issue new loyalty tokens to your customers.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Token Distribution</CardTitle>
            <CardDescription>Create a new token distribution for your customers</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Distribution Type</Label>
                <RadioGroup
                  defaultValue="single"
                  value={distributionType}
                  onValueChange={setDistributionType}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="single" />
                    <Label htmlFor="single" className="cursor-pointer">
                      Single Customer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bulk" id="bulk" />
                    <Label htmlFor="bulk" className="cursor-pointer">
                      Bulk Distribution
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rule" id="rule" />
                    <Label htmlFor="rule" className="cursor-pointer">
                      Rule-based Distribution
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {distributionType === "single" && (
                <div className="space-y-2">
                  <Label>Select Customer</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                        {selectedCustomer
                          ? customers.find((customer) => customer.value === selectedCustomer)?.label
                          : "Select customer..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0">
                      <Command>
                        <CommandInput placeholder="Search customer..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No customer found.</CommandEmpty>
                          <CommandGroup>
                            {customers.map((customer) => (
                              <CommandItem
                                key={customer.value}
                                value={customer.value}
                                onSelect={(currentValue) => {
                                  setSelectedCustomer(currentValue === selectedCustomer ? "" : currentValue)
                                  setOpen(false)
                                }}
                              >
                                {customer.label}
                                <Check
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    selectedCustomer === customer.value ? "opacity-100" : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              {distributionType === "bulk" && (
                <div className="space-y-2">
                  <Label>Upload Customer List</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop a CSV file or click to browse</p>
                    <Button variant="outline" size="sm">
                      Upload CSV
                    </Button>
                  </div>
                </div>
              )}

              {distributionType === "rule" && (
                <div className="space-y-2">
                  <Label>Distribution Rule</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Minimum purchase amount" type="number" />
                      <span>USD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Reward</span>
                      <Input placeholder="Token amount" type="number" className="w-24" />
                      <span>FFT per</span>
                      <Input placeholder="USD spent" type="number" className="w-24" />
                      <span>USD</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="amount">Token Amount</Label>
                <Input id="amount" type="number" placeholder="Enter amount of tokens" required />
                <p className="text-xs text-muted-foreground">Enter the number of FFT tokens to distribute</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason</Label>
                <Textarea id="reason" placeholder="Purchase reward, loyalty bonus, etc." className="min-h-[80px]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiration">Expiration (Optional)</Label>
                <Input id="expiration" type="date" />
                <p className="text-xs text-muted-foreground">Leave blank for tokens that never expire</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : (
                "Mint Tokens"
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Token Information</CardTitle>
              <CardDescription>Details about your loyalty token</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Token Symbol</span>
                <span>FFT</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Token Name</span>
                <span>FashionFit Token</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Supply</span>
                <span>125,430 / 200,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tokens in Circulation</span>
                <span>125,430 FFT</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Token Standard</span>
                <span>ERC-20</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribution Preview</CardTitle>
              <CardDescription>Preview of your token distribution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Distribution Type</span>
                  <span className="capitalize">{distributionType}</span>
                </div>
                {selectedCustomer && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Recipient</span>
                    <span>{customers.find((c) => c.value === selectedCustomer)?.label}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transaction Fee</span>
                  <span>0 FFT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Gas Fee</span>
                  <span>Covered by LoyalX</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  Tokens will be minted and distributed immediately after confirmation. This action cannot be undone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

