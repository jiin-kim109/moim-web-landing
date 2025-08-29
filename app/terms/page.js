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
          <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-gray max-w-none space-y-8">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Moim</h3>
            <p className="text-muted-foreground leading-relaxed">
              By creating an account and using Moim, you agree to comply with these Terms of Service. 
              Please read them carefully before proceeding.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Community Standards</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moim is committed to providing a safe, respectful, and inclusive environment for all users. 
              We have zero tolerance for the following:
            </p>
            <ul className="ml-6 space-y-2 text-muted-foreground">
              <li>• Harassment, bullying, or threats against other users</li>
              <li>• Hate speech, discrimination, or content targeting individuals based on race, religion, gender, sexual orientation, or other protected characteristics</li>
              <li>• Sexually explicit, violent, or graphic content</li>
              <li>• Spam, scams, or fraudulent activities</li>
              <li>• Sharing of personal information without consent</li>
              <li>• Illegal activities or content that violates local laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Content Moderation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We actively monitor and moderate content on our platform. Users who violate these terms 
              will face immediate consequences including warnings, temporary suspensions, or permanent bans. 
              We reserve the right to remove any content or terminate any account that violates these standards.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Reporting Violations</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you encounter objectionable content or abusive behavior, please report it immediately. 
              We take all reports seriously and will investigate promptly. Users are encouraged to 
              block and report problematic accounts.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">User Responsibilities</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of Moim, you agree to:
            </p>
            <ul className="ml-6 space-y-2 text-muted-foreground">
              <li>• Treat all community members with respect and kindness</li>
              <li>• Report inappropriate behavior when you see it</li>
              <li>• Keep your account secure and not share login credentials</li>
              <li>• Provide accurate information in your profile</li>
              <li>• Respect the privacy and boundaries of other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Privacy Policy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. We collect and use your information only as described in our 
              Privacy Policy. We do not sell your personal data to third parties and implement strong 
              security measures to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Enforcement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Violations of these terms may result in immediate action including content removal, 
              account restrictions, or permanent bans without prior notice. We reserve the right to 
              modify these terms at any time, and continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these terms or need to report a violation, 
              please contact our support team through the app or email us at support@moimchat.com.
            </p>
          </section>
        </div>

        {/* Agreement Notice */}
        <div className="mt-12 p-6 bg-accent/20 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Important:</strong> By using Moim, you acknowledge that you have read and agree to these Terms of Service and understand that Moim has zero tolerance for objectionable content and abusive users. You agree to follow the community standards and report any violations you encounter.
          </p>
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