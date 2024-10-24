"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from "date-fns"
import { Play, FileAudio } from "lucide-react"
import { Button } from "./ui/button"

const DUMMY_RECORDINGS = [
  {
    id: "1",
    title: "Physics Lecture - Quantum Mechanics",
    duration: "45:30",
    createdAt: new Date(2024, 2, 15),
  },
  {
    id: "2",
    title: "Team Meeting - Project Planning",
    duration: "32:15",
    createdAt: new Date(2024, 2, 14),
  },
]

export function RecordingsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Recordings</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {DUMMY_RECORDINGS.map((recording) => (
              <div
                key={recording.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <FileAudio className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{recording.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDistanceToNow(recording.createdAt, { addSuffix: true })}
                      {" · "}
                      {recording.duration}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}