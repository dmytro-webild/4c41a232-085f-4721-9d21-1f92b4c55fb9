"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle, Database, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Insights",
          id: "insights",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Support",
          id: "contact",
        },
      ]}
      brandName="HealthyScan AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient",
      }}
      title="Scan, Analyze, Eat Healthier."
      description="Harness the power of AI to understand the nutritional value of your food instantly. Just point, scan, and optimize your diet."
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "AI Scanner App",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "Scanner View 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "Scanner View 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "Scanner View 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "Scanner View 5",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/futuristic-ai-food-scanning-interface-gl-1774664179054-346befb4.png",
          imageAlt: "Scanner View 6",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Real-time AI Scan",
          description: "Identify thousands of food types and packaged products instantly using your camera.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/a-person-pointing-a-smartphone-at-a-heal-1774664177123-b541788f.png",
          imageAlt: "Scan Feature",
        },
        {
          id: 2,
          title: "Nutritional Breakdown",
          description: "Detailed macros, calorie counts, and hidden health indicators revealed in seconds.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/iconic-representation-of-nutritional-bre-1774664177559-2f7468c6.png",
          imageAlt: "Analytics Feature",
        },
        {
          id: 3,
          title: "Healthy Advice",
          description: "Receive actionable suggestions on how to improve your current meal choices.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/clean-interface-showing-health-advice-br-1774664176599-d8451897.png",
          imageAlt: "Advice Feature",
        },
      ]}
      title="Smart Food Recognition"
      description="Advanced algorithms powered by massive databases provide instant health insights."
    />
  </div>

  <div id="insights" data-section="insights">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "98%",
          title: "Accuracy",
          description: "High-confidence recognition.",
          icon: CheckCircle,
        },
        {
          id: "m2",
          value: "500+",
          title: "Products",
          description: "Scanned daily.",
          icon: Zap,
        },
        {
          id: "m3",
          value: "10k+",
          title: "Database",
          description: "Food items supported.",
          icon: Database,
        },
      ]}
      title="Your Health Metrics"
      description="We track progress against your personalized wellness goals."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Fitness Coach",
          company: "FitLife",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/portrait-of-a-healthy-active-person-prof-1774664176419-6cddd641.png",
        },
        {
          id: "2",
          name: "David Chen",
          role: "Nutritionist",
          company: "WellLab",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/portrait-of-a-focused-nutrition-professi-1774664177546-c610c768.png",
        },
        {
          id: "3",
          name: "Alex Smith",
          role: "Parent",
          company: "FamilyHealth",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/portrait-of-a-busy-parent-modern-kitchen-1774664177425-44cd4d81.png",
        },
        {
          id: "4",
          name: "Jordan Lee",
          role: "Student",
          company: "EduNutrition",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/portrait-of-a-young-active-student-minim-1774664179148-320853a7.png",
        },
        {
          id: "5",
          name: "Elena Ross",
          role: "Chef",
          company: "CulinaryBio",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYRgfXjc22B8bQWjYpYNtyCsyM/portrait-of-a-healthy-active-person-prof-1774664176419-6cddd641.png",
        },
      ]}
      title="Trusted by Healthy Eaters"
      description="Hear what our users say about the HealthyScan AI experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How accurate is the scanner?",
          content: "Our AI is accurate for 98% of common food types and packaged products.",
        },
        {
          id: "f2",
          title: "Is my data private?",
          content: "Absolutely. We do not store your camera stream, only nutritional analysis.",
        },
        {
          id: "f3",
          title: "Can I use it offline?",
          content: "Scanning requires an internet connection for our real-time database lookups.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about HealthyScan AI."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to take control of your health?"
      buttons={[
        {
          text: "Get Started",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Insights",
              href: "#insights",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 HealthyScan AI"
      bottomRightText="Built for better living"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
