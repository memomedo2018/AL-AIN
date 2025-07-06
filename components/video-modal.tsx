"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#336666] to-[#2a5555]">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-2">AFLS Environmental Story</h3>
              <p className="text-gray-200">15 Years of Environmental Excellence</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
