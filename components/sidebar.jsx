"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Sidebar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-full w-full flex-col", className)}
    {...props} />
))
Sidebar.displayName = "Sidebar"

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-full w-full flex-col", className)}
    {...props} />
))
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-2", className)} {...props} />
))
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-3 py-1 text-sm font-medium text-muted-foreground", className)}
    {...props} />
))
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuButton = React.forwardRef(({ className, isActive, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return (
    <Comp>
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
          className
        )}
        {...props} />
    </Comp>
  );
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pl-6 pt-1", className)} {...props} />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef(({ className, isActive, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return (
    <Comp>
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
          className
        )}
        {...props} />
    </Comp>
  );
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

const SidebarRail = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute inset-y-0 right-0 w-px bg-border", className)}
    {...props} />
))
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex h-full flex-col", className)} {...props} />
))
SidebarInset.displayName = "SidebarInset"

const SidebarTrigger = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return (
    <Comp>
      <button
        ref={ref}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}>
        <ChevronDown className="h-4 w-4" />
        <span className="sr-only">Toggle sidebar</span>
      </button>
    </Comp>
  );
})
SidebarTrigger.displayName = "SidebarTrigger"

export {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarInset,
  SidebarTrigger,
}

