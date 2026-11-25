import type { Metadata } from 'next';
import SurveyForm from './survey-form';

export const metadata: Metadata = {
  title: 'Construction Supply Chain & Site Logistics Survey 2026 | Bricks & Brains',
  description: 'Share your experience of construction material deliveries, suppliers and site logistics.',
  alternates: { canonical: '/survey' },
};

export default function SurveyPage() {
  return <SurveyForm />;
}
