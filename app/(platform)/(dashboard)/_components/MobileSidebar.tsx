"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { useMobileSidebar } from "@/hooks/UseMobileSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = React.useState(false);
  const { isOpen, onOpen, onClose } = useMobileSidebar();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
}
