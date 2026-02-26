import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Portx",
  description: "Get in touch with Portx for creative design and development services.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <HeroSection />
      {/* Move any client-only interactive components (forms, maps) into nested client components with "use client" */}
    </PageLayout>
  );
}