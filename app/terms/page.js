import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-primary hover:text-primary/80 transition-colors">
            <h1 className="text-4xl font-bold">Moim</h1>
          </Link>
          <h2 className="text-3xl font-semibold mb-4">Terms of Use</h2>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By downloading, installing, or using the Moim application ("App"), you agree to be bound by these Terms of Use ("Terms"). 
              If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">2. Description of Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moim is a location-based real-time chat application that allows users to connect with people in their local area, 
              participate in community discussions, and organize hangouts and meetups.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">3. User Conduct</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the App in compliance with all applicable laws and regulations</li>
              <li>Respect other users and maintain a friendly community environment</li>
              <li>Not share inappropriate, offensive, or harmful content</li>
              <li>Not impersonate others or create fake accounts</li>
              <li>Protect your account credentials and personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">4. Privacy and Location Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moim uses location data to provide location-based chat services. By using the App, you consent to the collection 
              and use of your location information as described in our Privacy Policy. You can control location sharing through 
              your device settings.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">5. Content and Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Users retain ownership of the content they post. By posting content, you grant Moim a license to use, display, 
              and distribute your content within the App. Moim respects intellectual property rights and will respond to 
              valid copyright claims.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">6. Termination</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to terminate or suspend your account at any time for violation of these Terms or for any 
              other reason at our sole discretion. You may also delete your account at any time through the App settings.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">7. Disclaimer of Warranties</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the App will be 
              error-free or continuously available.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">8. Changes to Terms</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update these Terms from time to time. We will notify users of significant changes through the App 
              or other appropriate means.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">9. Contact Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at support@moim.app
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
