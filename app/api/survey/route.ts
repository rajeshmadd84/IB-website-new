import { questions } from '@/app/survey/questions';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { answers, improvement, email, consent } = await request.json();
    if (consent !== true || !Array.isArray(answers) || answers.length !== questions.length || typeof improvement !== 'string' || improvement.length > 3000 || typeof email !== 'string' || email.length > 254 || (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return Response.json({ error: 'Invalid response' }, { status: 400 });
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const values = answers[i];
      const max = 'max' in q ? q.max : q.type === 'radio' ? 1 : q.options.length + ('other' in q && q.other ? 1 : 0);
      if (!Array.isArray(values) || !values.length || values.length > max || new Set(values).size !== values.length || values.some((v: unknown) => typeof v !== 'string' || !v.trim() || v.length > 500 || (!('other' in q && q.other) && !(q.options as readonly string[]).includes(v)))) return Response.json({ error: 'Invalid response' }, { status: 400 });
    }
    const accessKey = process.env.SURVEY_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) return Response.json({ error: 'Survey delivery is not configured' }, { status: 503 });
    const payload: Record<string, string> = {
      access_key: accessKey,
      subject: '2026 Construction Supply Chain & Site Logistics Survey',
      from_name: 'Bricks & Brains Survey',
      'Optional email': email || 'Not provided',
      'Improvement suggestion': improvement || 'Not provided',
      Consent: 'Agreed to use responses for aggregated industry findings and optional detailed-survey contact.',
    };
    questions.forEach((question, i) => { payload[`${i + 1}. ${question.title}`] = answers[i].join('; '); });
    const delivery = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await delivery.json();
    if (!delivery.ok || result.success !== true) return Response.json({ error: 'Could not deliver response' }, { status: 502 });
    return Response.json({ success: true });
  } catch (error) {
    const cause = error instanceof Error ? error.cause : undefined;
    console.error('Survey delivery failed:', error instanceof Error ? error.message : 'Unknown error', cause instanceof Error ? cause.message : '');
    return Response.json({ error: 'Could not deliver response' }, { status: 500 });
  }
}
