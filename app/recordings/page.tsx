"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Square } from "lucide-react"
import { useMediaRecorder } from "@/hooks/use-media-recorder"
import { RecordingsList } from "@/components/recordings-list"
import { RecordingDialog } from "@/components/recording-dialog"

export default function RecordingsPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const { startRecording, stopRecording, recordingTime, audioBlob } = useMediaRecorder()

  const handleStartRecording = async () => {
    setIsRecording(true)
    await startRecording()
  }

  const handleStopRecording = async () => {
    setIsRecording(false)
    await stopRecording()
    setShowDialog(true)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Record New Session</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl font-mono">
                {recordingTime}
              </div>
              <div className="flex justify-center gap-4">
                {!isRecording ? (
                  <Button
                    size="lg"
                    onClick={handleStartRecording}
                    className="w-32"
                  >
                    <Mic className="mr-2 h-5 w-5" />
                    Record
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="destructive"
                    onClick={handleStopRecording}
                    className="w-32"
                  >
                    <Square className="mr-2 h-5 w-5" />
                    Stop
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <RecordingsList />

        <RecordingDialog 
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          audioBlob={audioBlob}
        />
      </div>
    </div>
  )
}