export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, company, role, project, note } = await request.json();
    if ([name, email, company, role, project, note].some(value => typeof value !== 'string' || value.length > 3000) || !name.trim() || !company.trim() || !role.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please check your details and try again.' }, { status: 400 });
    }
    const accessKey = process.env.SURVEY_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) return Response.json({ error: 'Contact delivery is not configured.' }, { status: 503 });
    const delivery = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, subject: 'New Contact / Pilot Application', from_name: 'Bricks & Brains Website', name, email, company, role, project, message: note }),
    });
    const contentType = delivery.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const body = await delivery.text();
      const title = body.match(/<title[^>]*>([^<]{0,200})<\/title>/i)?.[1] || 'No page title';
      console.error('Web3Forms returned a non-JSON response:', delivery.status, contentType, title);
      return Response.json({ error: 'Form delivery is temporarily unavailable.' }, { status: 502 });
    }
    const result = await delivery.json();
    if (!delivery.ok || result.success !== true) return Response.json({ error: 'Could not deliver your request. Please try again.' }, { status: 502 });
    return Response.json({ success: true });
  } catch (error) {
    const cause = error instanceof Error ? error.cause : undefined;
    console.error('Contact delivery failed:', error instanceof Error ? error.message : 'Unknown error', cause instanceof Error ? cause.message : '');
    return Response.json({ error: 'Could not deliver your request. Please try again.' }, { status: 500 });
  }
}
