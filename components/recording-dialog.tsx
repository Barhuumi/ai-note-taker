"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

interface RecordingDialogProps {
  isOpen: boolean
  onClose: () => void
  audioBlob: string | null
}

export function RecordingDialog({ isOpen, onClose, audioBlob }: RecordingDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcript, setTranscript] = useState<string>("")
  const [summary, setSummary] = useState<string>("")
  const { toast } = useToast()

  const processRecording = async () => {
    if (!audioBlob) return

    try {
      setIsProcessing(true)

      // Convert blob URL to File object
      const response = await fetch(audioBlob)
      const blob = await response.blob()
      const file = new File([blob], "recording.webm", { type: "audio/webm" })

      const formData = new FormData()
      formData.append("audio", file)

      const result = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      })

      if (!result.ok) throw new Error("Failed to process recording")

      const data = await result.json()
      setTranscript(data.transcript)
      setSummary(data.summary)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the recording. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Recording Results</DialogTitle>
        </DialogHeader>
        
        {!transcript && !summary ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {isProcessing ? (
              <>
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-muted-foreground">Processing your recording...</p>
              </>
            ) : (
              <Button onClick={processRecording}>Process Recording</Button>
            )}
          </div>
        ) : (
          <Tabs defaultValue="transcript" className="h-full">
            <TabsList>
              <TabsTrigger value="transcript">Full Transcript</TabsTrigger>
              <TabsTrigger value="summary">Summary</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript" className="h-[calc(100%-2rem)]">
              <ScrollArea className="h-full border rounded-md p-4">
                <div className="whitespace-pre-wrap">{transcript}</div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="summary" className="h-[calc(100%-2rem)]">
              <ScrollArea className="h-full border rounded-md p-4">
                <div className="whitespace-pre-wrap">{summary}</div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  )
}