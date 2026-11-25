'use client';

import { useState } from 'react';
import { questions } from './questions';

export default function SurveyForm() {
  const [answers, setAnswers] = useState<string[][]>(questions.map(() => []));
  const [other, setOther] = useState<string[]>(questions.map(() => ''));
  const [improvement, setImprovement] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  function select(index: number, value: string, multiple: boolean) {
    setAnswers(previous => previous.map((values, i) => i !== index ? values : multiple ? values.includes(value) ? values.filter(v => v !== value) : [...values, value] : [value]));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!answers[i].length || (answers[i].includes('__other__') && !other[i].trim())) return setError(`Please answer question ${i + 1}.`);
      if ('max' in q && answers[i].length > q.max) return setError(`Please select up to ${q.max} options for question ${i + 1}.`);
    }
    if (!consent) return setError('Please provide your consent before submitting.');
    setError(''); setBusy(true);
    try {
      const response = await fetch('/api/survey', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers: answers.map((values, i) => values.map(v => v === '__other__' ? other[i].trim() : v)), improvement, email: email.trim(), consent }) });
      if (!response.ok) throw new Error();
      setDone(true);
      window.scrollTo(0, 0);
    } catch { setError('We could not submit your response. Please try again.'); }
    finally { setBusy(false); }
  }

  return <main><section className="ib-sec ib-form-hero"><div className="ib-wrap" style={{ maxWidth: 850 }}>
    {done ? <div className="ib-success"><h1>Thank you for contributing</h1><p>Thank you for contributing to the 2026 Construction Supply Chain &amp; Site Logistics Survey. If you would like a copy of the aggregated industry summary once published, please message the person who shared this link with you or reach out to Bricks &amp; Brains on LinkedIn.</p><a href="/" className="ib-btn ib-btn-ghost">Back to home</a></div> : <>
      <span className="ib-eyebrow">Industry survey 2026</span>
      <h1 style={{ margin: '1rem 0' }}>Construction Supply Chain &amp; Site Logistics</h1>
      <p>We are conducting a short industry survey to understand how construction companies manage material deliveries, suppliers, and site logistics. Your responses will help identify common challenges and opportunities for improvement across active projects.</p>
      <p>Estimated time: 2–3 minutes. No company name or login required.</p>
      <p>Bricks &amp; Brains is organizing this survey for industry research. Responses are analyzed in aggregate and will not be used for sales outreach.</p>
      <form onSubmit={submit} className="ib-card-form" style={{ marginTop: '2rem' }}>
        {questions.map((q, i) => <fieldset key={q.title} className="survey-question"><legend>{i + 1}. {q.title} <span className="req">*</span></legend>
          {q.options.map(option => <label key={option} className="survey-option"><input type={q.type} name={`q${i}`} checked={answers[i].includes(option)} onChange={() => select(i, option, q.type === 'checkbox')} /> <span>{option}</span></label>)}
          {'other' in q && q.other && <><label className="survey-option"><input type={q.type} name={`q${i}`} checked={answers[i].includes('__other__')} onChange={() => select(i, '__other__', q.type === 'checkbox')} /> <span>Other</span></label>{answers[i].includes('__other__') && <div className="ib-field"><input aria-label={`Other answer for question ${i + 1}`} value={other[i]} onChange={e => setOther(prev => prev.map((v, n) => n === i ? e.target.value : v))} maxLength={500} /></div>}</>}
        </fieldset>)}
        <div className="ib-field"><label htmlFor="improvement" style={{ fontSize: '1rem', fontWeight: 600 }}>9. What is the one thing you would most like to improve in construction supply chain management? (Optional)</label><p>For example: real-time delivery tracking, gate scheduling, supplier reliability, or coordination between procurement and site teams.</p><textarea id="improvement" value={improvement} onChange={e => setImprovement(e.target.value)} maxLength={3000} /></div>
        <div className="ib-field" style={{ marginTop: "2rem" }}><label htmlFor="survey-email" style={{ fontSize: "1rem", fontWeight: 600 }}>If you are interested in taking part in a detailed survey, please provide your email address. Our team will coordinate with you.</label><input id="survey-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address (optional)" maxLength={254} /></div>
        <label className="survey-option" style={{ margin: "1.5rem 0" }}><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required /><span>I agree that Bricks &amp; Brains may use my survey responses to prepare and publish aggregated industry findings. My email address, if provided, will be used to contact me about the detailed survey and will not be published.</span></label>
        {error && <p className="ib-form-error" role="alert">{error}</p>}
        <button className="ib-btn ib-btn-primary" disabled={busy}>{busy ? 'Submitting…' : 'Submit survey →'}</button>
      </form>
    </>}
  </div></section></main>;
}
