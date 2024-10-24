import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, BookOpen, BrainCircuit } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Transform Your Learning with AI-Powered Notes
        </h1>
        <p className="text-xl text-muted-foreground">
          Record lectures and meetings, get instant transcripts, summaries, flashcards, and quizzes.
          Learn smarter, not harder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/recordings">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
          <div className="p-6 border rounded-lg">
            <Mic className="w-12 h-12 mb-4 mx-auto text-primary" />
            <h3 className="text-lg font-semibold mb-2">Smart Recording</h3>
            <p className="text-muted-foreground">Record lectures and meetings with automatic transcription and summarization</p>
          </div>
          <div className="p-6 border rounded-lg">
            <BookOpen className="w-12 h-12 mb-4 mx-auto text-primary" />
            <h3 className="text-lg font-semibold mb-2">Flashcards</h3>
            <p className="text-muted-foreground">AI-generated flashcards to help you review and retain key concepts</p>
          </div>
          <div className="p-6 border rounded-lg">
            <BrainCircuit className="w-12 h-12 mb-4 mx-auto text-primary" />
            <h3 className="text-lg font-semibold mb-2">Smart Quizzes</h3>
            <p className="text-muted-foreground">Test your knowledge with automatically generated quizzes based on your notes</p>
          </div>
        </div>
      </div>
    </div>
  )
}