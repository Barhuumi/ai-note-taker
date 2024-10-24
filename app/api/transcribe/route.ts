import { NextResponse } from 'next/server';
import { transcribeAudio, generateSummary } from '@/lib/openai';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      );
    }

    const transcript = await transcribeAudio(audioFile);
    const summary = await generateSummary(transcript);

    return NextResponse.json({ transcript, summary });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Failed to process audio' },
      { status: 500 }
    );
  }
}