"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Key, Loader2, Save, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your brand settings and preferences.</p>
        </div>
      </motion.div>

      <Tabs defaultValue="brand" className="space-y-4">
        <TabsList>
          <TabsTrigger value="brand">Brand Info</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="brand" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Information</CardTitle>
              <CardDescription>Update your brand details and profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="brand-name">Brand Name</Label>
                <Input id="brand-name" defaultValue="FashionFit" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand-description">Description</Label>
                <Textarea
                  id="brand-description"
                  defaultValue="Premium fashion retailer specializing in athletic and casual wear."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="brand-email">Contact Email</Label>
                  <Input id="brand-email" type="email" defaultValue="contact@fashionfit.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand-website">Website</Label>
                  <Input id="brand-website" type="url" defaultValue="https://fashionfit.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand-logo">Brand Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">F</span>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Token Settings</CardTitle>
              <CardDescription>Configure your loyalty token settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="token-symbol">Token Symbol</Label>
                  <Input id="token-symbol" defaultValue="FFT" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="token-name">Token Name</Label>
                  <Input id="token-name" defaultValue="FashionFit Token" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-supply">Maximum Token Supply</Label>
                <Input id="token-supply" type="number" defaultValue="200000" />
                <p className="text-xs text-muted-foreground">The maximum number of tokens that can ever be minted</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-rate">Default Earning Rate</Label>
                <div className="flex items-center gap-2">
                  <Input id="token-rate" type="number" defaultValue="2" className="w-24" />
                  <span>FFT per</span>
                  <Input type="number" defaultValue="1" className="w-24" />
                  <span>USD spent</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for integrating with LoyalX</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Live API Key</Label>
                <div className="flex items-center gap-2">
                  <Input value="lx_live_*****************************" readOnly type="password" />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard("lx_live_api_key_would_be_here")}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Use this key for production environments</p>
              </div>

              <div className="space-y-2">
                <Label>Test API Key</Label>
                <div className="flex items-center gap-2">
                  <Input value="lx_test_*****************************" readOnly type="password" />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard("lx_test_api_key_would_be_here")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Use this key for testing and development</p>
              </div>

              <div className="space-y-2">
                <Label>Webhook Secret</Label>
                <div className="flex items-center gap-2">
                  <Input value="whsec_*****************************" readOnly type="password" />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard("whsec_webhook_secret_would_be_here")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Used to verify webhook requests from LoyalX</p>
              </div>

              <Separator />

              <div>
                <Button variant="outline" className="gap-1">
                  <Key className="h-4 w-4" />
                  Generate New API Keys
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Warning: Generating new keys will invalidate your existing keys
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Resources to help you integrate with the LoyalX API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to integrate LoyalX with your e-commerce platform or mobile app.
                </p>
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete reference for all API endpoints, request parameters, and response formats.
                </p>
                <Button variant="outline" size="sm">
                  View API Reference
                </Button>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">SDK Libraries</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Official client libraries for JavaScript, Python, Ruby, and more.
                </p>
                <Button variant="outline" size="sm">
                  View SDKs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-token-mints" className="flex-1">
                      Token minting events
                    </Label>
                    <Switch id="email-token-mints" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-token-redemptions" className="flex-1">
                      Token redemptions
                    </Label>
                    <Switch id="email-token-redemptions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-new-members" className="flex-1">
                      New member signups
                    </Label>
                    <Switch id="email-new-members" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-membership-upgrades" className="flex-1">
                      Membership upgrades
                    </Label>
                    <Switch id="email-membership-upgrades" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-reports" className="flex-1">
                      Weekly summary reports
                    </Label>
                    <Switch id="email-reports" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Dashboard Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dashboard-token-mints" className="flex-1">
                      Token minting events
                    </Label>
                    <Switch id="dashboard-token-mints" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dashboard-token-redemptions" className="flex-1">
                      Token redemptions
                    </Label>
                    <Switch id="dashboard-token-redemptions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dashboard-new-members" className="flex-1">
                      New member signups
                    </Label>
                    <Switch id="dashboard-new-members" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dashboard-membership-upgrades" className="flex-1">
                      Membership upgrades
                    </Label>
                    <Switch id="dashboard-membership-upgrades" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Webhook Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-token-mints" className="flex-1">
                      Token minting events
                    </Label>
                    <Switch id="webhook-token-mints" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-token-redemptions" className="flex-1">
                      Token redemptions
                    </Label>
                    <Switch id="webhook-token-redemptions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-new-members" className="flex-1">
                      New member signups
                    </Label>
                    <Switch id="webhook-new-members" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-membership-upgrades" className="flex-1">
                      Membership upgrades
                    </Label>
                    <Switch id="webhook-membership-upgrades" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your subscription and payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Current Plan</h3>
                    <p className="text-sm text-muted-foreground">Business Pro</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Price</span>
                    <span>$199/month</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Renewal Date</span>
                    <span>August 15, 2023</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Payment Method</span>
                    <span>Visa ending in 4242</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    Change Plan
                  </Button>
                  <Button variant="outline" size="sm">
                    Update Payment Method
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Plan Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Up to 10,000 active members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Unlimited token minting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Custom membership tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Billing History</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Invoice</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jul 15, 2023</TableCell>
                      <TableCell>Business Pro Plan - Monthly</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jun 15, 2023</TableCell>
                      <TableCell>Business Pro Plan - Monthly</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 15, 2023</TableCell>
                      <TableCell>Business Pro Plan - Monthly</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

