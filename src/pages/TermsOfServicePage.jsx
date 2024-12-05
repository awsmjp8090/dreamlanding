import React from 'react';

export function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Services</h2>
          <p className="text-gray-600">
            Dream Landing provides accommodation, and career guidance. We reserve the right to modify or discontinue any service without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Appointment Booking</h2>
          <p className="text-gray-600">
            When booking appointments through our platform:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>You must provide accurate and complete information</li>
            <li>You must give at least 24 hours notice for cancellations</li>
            <li>We reserve the right to cancel or reschedule appointments</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. User Responsibilities</h2>
          <p className="text-gray-600">
            You agree to use our services for lawful purposes only and in a way that does not infringe upon the rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            Dream Landing shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Contact Information</h2>
          <p className="text-gray-600">
            For any questions regarding these Terms of Service, please contact us at info@dreamlanding.co.uk.
          </p>
        </section>
      </div>
    </div>
  );
} 