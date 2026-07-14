import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import GridLinesBackground from "@/components/ui/GridLinesBackground";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <GridLinesBackground position="fixed" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavbarCentered
          logo="Elevated"
          navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
          ctaButton={{ text: "Get Started", href: "/contact" }}
        />

        <main className="flex-grow pt-24 pb-16">
          <ContactSplitForm
            tag="Contact Us"
            title="Let's elevate your business together."
            description="Ready to take the next step? Fill out the form below or reach out to us directly at elevatedbuisnesses@gmail.com. Our team is ready to help you achieve your goals."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "company", type: "text", placeholder: "Company Name", required: false }
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your project...", required: true, rows: 5 }}
            buttonText="Send Message"
            textAnimation="fade-blur"
            imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          />
        </main>

        <FooterSimple
          brand="Elevated Businesses"
          copyright="© 2024 Elevated Businesses. All rights reserved."
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Direct Contact",
              items: [
                { label: "elevatedbuisnesses@gmail.com", href: "mailto:elevatedbuisnesses@gmail.com" }
              ]
            }
          ]}
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
          ]}
        />
      </div>
    </div>
  );
}