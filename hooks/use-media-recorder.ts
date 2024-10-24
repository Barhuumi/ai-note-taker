"use client"

import { useState, useCallback, useEffect } from "react"
import { useMediaRecorder as useReactMediaRecorder } from "react-media-recorder"

export function useMediaRecorder() {
  const [recordingTime, setRecordingTime] = useState("00:00")
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [seconds, setSeconds] = useState(0)

  const {
    status,
    startRecording: start,
    stopRecording: stop,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({ audio: true })

  const updateTime = useCallback(() => {
    setSeconds((prev) => {
      const newSeconds = prev + 1
      const minutes = Math.floor(newSeconds / 60)
      const remainingSeconds = newSeconds % 60
      setRecordingTime(
        `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`
      )
      return newSeconds
    })
  }, [])

  const startRecording = useCallback(async () => {
    setSeconds(0)
    setRecordingTime("00:00")
    const id = setInterval(updateTime, 1000)
    setIntervalId(id)
    await start()
  }, [start, updateTime])

  const stopRecording = useCallback(async () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    await stop()
  }, [intervalId, stop])

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
      clearBlobUrl()
    }
  }, [intervalId, clearBlobUrl])

  return {
    status,
    startRecording,
    stopRecording,
    recordingTime,
    audioBlob: mediaBlobUrl,
  }
}