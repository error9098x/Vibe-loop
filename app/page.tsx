'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Music, Play, Upload, Heart, Headphones, Users, Zap, Shield, Globe, ChevronRight, Star, TrendingUp } from "lucide-react";

// Define the structure for testimonial data for better organization
interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  name: string;
  title: string;
  gradientClass: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote: "VibeLoop changed how I share my music. No complicated sign-ups, just pure music sharing. Love it!",
    name: "Alex Chen",
    title: "Electronic Producer",
    gradientClass: "from-primary to-secondary",
  },
  {
    id: 2,
    stars: 5,
    quote: "Finally, a platform that gets it. Upload, share, discover - all without the hassle. Simply brilliant!",
    name: "Maria Rodriguez",
    title: "Singer-Songwriter",
    gradientClass: "from-secondary to-primary",
  },
  {
    id: 3,
    stars: 5,
    quote: "The community here is amazing. I've discovered so many talented artists and made real connections.",
    name: "Jordan Taylor",
    title: "Beat Maker",
    gradientClass: "from-pink-500 to-purple-500",
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Music className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
            </div>
            <span
              className="text-2xl font-bold transition-all group-hover:tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #0098A0 0%, #FF9800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              VibeLoop
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Explore Music
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="container flex flex-col items-center justify-center gap-8 py-20 text-center md:gap-10 md:py-32">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            <Zap className="mr-1 h-3 w-3" />
            100% Free • No Sign-up Required
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Where Your Music
            <span className="block mt-2">
              <span
                className="inline-block animate-gradient bg-gradient-to-r from-primary via-orange-500 to-secondary bg-300% bg-clip-text text-transparent"
              >
                Comes Alive
              </span>
            </span>
          </h1>

          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl lg:text-2xl animate-fade-in">
            Join thousands of music lovers sharing their favorite tracks. Upload, discover, and vibe to the rhythm of a global community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up">
            <Link href="/dashboard">
              <Button size="lg" className="group h-12 px-8 text-base">
                <Play className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Start Vibing Now
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                <Headphones className="h-5 w-5 mr-2" />
                Browse Music
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="font-semibold">10K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="font-semibold">50K+ Tracks Shared</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="font-semibold">100K+ Likes Given</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Everything You Need to
              <span
                className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Share Your Sound
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, powerful features designed for music lovers, by music lovers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Upload</h3>
                <p className="text-muted-foreground">
                  Share your tracks in seconds. Support for all major audio formats with lightning-fast uploads.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 transition-transform group-hover:scale-110">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Global Discovery</h3>
                <p className="text-muted-foreground">
                  Explore music from creators worldwide. Find your next favorite artist or genre.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 transition-transform group-hover:scale-110">
                  <Heart className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Show Love</h3>
                <p className="text-muted-foreground">
                  Like and support your favorite tracks. Build connections through music appreciation.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition-transform group-hover:scale-110">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Privacy First</h3>
                <p className="text-muted-foreground">
                  No account needed. Your uploads are secure and you control who sees them.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-transform group-hover:scale-110">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Trending Tracks</h3>
                <p className="text-muted-foreground">
                  Discover what's hot right now. See which tracks are gaining the most love.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 transition-transform group-hover:scale-110">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Stream instantly with our optimized player. No buffering, just pure music.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Loved by Music Creators Worldwide
            </h2>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">
              Join thousands who are already sharing their music journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Testimonial Cards */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${testimonial.gradientClass}`} />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-secondary/90 p-12 md:p-20">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Ready to Share Your Sound?
              </h2>
              <p className="mb-8 text-lg opacity-90 md:text-xl">
                Join our growing community of music lovers. No credit card, no sign-up, just music.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group h-12 px-8 text-base font-semibold"
                  >
                    <Music className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Start Sharing Now
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 border-white/20 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
                  >
                    Explore Tracks
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-6 w-6 text-primary" />
                <span
                  className="text-2xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0098A0 0%, #FF9800 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  VibeLoop
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-sm">
                The simplest way to share your music with the world. No barriers, just vibes.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Music className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/dashboard" className="hover:text-primary transition-colors">
                    Explore Music
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-primary transition-colors">
                    Upload Track
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-primary transition-colors">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
            <p>© 2024 VibeLoop. Built with ❤️ for music lovers everywhere</p>
          </div>
        </div>
      </footer>

    </div>
  );
}