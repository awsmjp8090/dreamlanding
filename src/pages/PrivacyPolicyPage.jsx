import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when using our services or contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your appointments and requests</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website or servicing you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at info@faithfulproperties.co.uk.
          </p>
        </section>
      </div>
    </div>
  );
} 