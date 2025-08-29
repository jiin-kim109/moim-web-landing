import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
      <main className="text-center max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Moim
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Real-time chat for your neighborhood
          </p>
        </div>

        {/* Hero Content */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Meet friends and neighbors<br />
            <span className="text-primary">in your city</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Location-based community chat. Connect with people who share your interests and hobbies nearby. 
            Join real-time conversations, and discover your local community with ease.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">Real-time Chat</h3>
            <p className="text-muted-foreground text-sm">Instant messaging with people nearby</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">Location-based</h3>
            <p className="text-muted-foreground text-sm">Connect with your local community</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">Shared Interests</h3>
            <p className="text-muted-foreground text-sm">Find people with similar hobbies and passions</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
          
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Terms of Service
          </Link>
        </div>
      </main>
    </div>
  );
}