import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Elevation Media  Media"
      title="Establish Your Presence & Grow."
      description="We build high-converting, beautiful websites that turn visitors into loyal customers. Let Elevation Media  Media take your online presence to new heights."
      primaryButton={{
        text: "Start Growing",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3GTaMoXuYSTqX2LVBuutSAbAz5R/tmp/a-premium-abstract-futuristic-mountain-l-1783998630458-840bb021.png"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCards
      tag="Our Expertise"
      title="More Than Just A Pretty Website"
      description="We focus on real results. Our strategy-first approach ensures your site serves as a powerful engine for lead generation and business growth."
      items={[
        {
          title: "Mobile Responsive Design",
          description: "Ensure your business looks incredible on every screen, from iPhones to desktops.",
          imageSrc: "http://img.b2bpic.net/free-photo/structure-social-media-with-colored-icons_1134-73.jpg",
        },
        {
          title: "SEO Strategy & Growth",
          description: "Get found by customers searching for the exact services you provide.",
          imageSrc: "http://img.b2bpic.net/free-photo/arrange-white-letters-as-seo_1384-118.jpg",
        },
        {
          title: "High-Converting Funnels",
          description: "We turn visitors into leads with strategic layouts and clear calls to action.",
          imageSrc: "http://img.b2bpic.net/free-photo/filter-icon-front-side-with-white-background_187299-39851.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Why Elevation Media ?"
      title="We Help Local Businesses Thrive"
      description="From medical practices to law firms, we understand the nuances that make a website work for local businesses. We don't just build sites—we help businesses establish credibility, attract more customers, and generate more leads."
      primaryButton={{
        text: "Work With Us",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/manager-who-keeps-track-sales-figures-phone-screen-moon-light_482257-32838.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Our Services"
      title="Comprehensive Web Solutions"
      description="Premium services designed to elevate your brand to the next level."
      items={[
        {
          title: "Website Design",
          description: "Beautiful, high-end UI design tailored to your specific brand.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/various-business-card-templates_23-2147725095.jpg",
        },
        {
          title: "SEO Consulting",
          description: "Rank higher on Google and outpace your local competition.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pills-gridline_23-2148530902.jpg",
        },
        {
          title: "E-Commerce Setup",
          description: "Sell your products online with a modern, fast checkout experience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-coworkers-analyzing-business-charts-infographics-data-laptop-software-people-doing-teamwork-collaboration-create-paper-reviews-professional-report-close-up_482257-48646.jpg",
        },
        {
          title: "Brand Identity",
          description: "Develop a cohesive look and feel that resonates with customers.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/communication-social-media-icons-personal-computer_23-2150781060.jpg",
        },
        {
          title: "Content Strategy",
          description: "Professional content that builds authority and converts visitors.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-arrangement_23-2149964955.jpg",
        },
        {
          title: "UX/UI Development",
          description: "Intuitive interfaces that make purchasing effortless for your customers.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-office-with-notebook_23-2149749865.jpg",
        },
        {
          title: "Growth Analytics",
          description: "Understand your customers better with actionable performance data.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-desk-concept-with-copy-space_23-2148459697.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Proven Results"
      title="Driving Real Business Impact"
      description="Our data-driven strategies produce consistent growth for our clients."
      metrics={[
        {
          value: "45%",
          title: "Average Increase in Leads",
          features: [
            "Optimized funnels",
            "Faster load speeds",
          ],
        },
        {
          value: "82%",
          title: "Improvement in SEO Ranking",
          features: [
            "Targeted local keywords",
            "Content authority",
          ],
        },
        {
          value: "3x",
          title: "Return on Web Investment",
          features: [
            "Higher conversion rates",
            "Reduced bounce rates",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Social Proof"
      title="Loved By Local Leaders"
      description="See why business owners across various industries trust Elevation Media  Media."
      testimonials={[
        {
          name: "Dr. Sarah Miller",
          role: "Clinic Director",
          company: "Miller Medical",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-with-medical-report_23-2148168362.jpg",
        },
        {
          name: "James enderson",
          role: "Senior Partner",
          company: "Henderson Law",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-employees-working-together_1098-2104.jpg",
        },
        {
          name: "Lisa Ray",
          role: "Owner",
          company: "Ray Real Estate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",
        },
        {
          name: "Mark Stevens",
          role: "Owner",
          company: "Stevens Fitness",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-with-arms-crossed-kitchen_107420-12356.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "Creative Director",
          company: "Art Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-queer-person-work_23-2150617713.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="FAQ"
      title="Frequently Asked Questions"
      description="Common questions about how we help businesses grow."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "How long does a website take to build?",
              answer: "Typically 1-3 weeks depending on project scope.",
            },
            {
              question: "Do you handle maintenance?",
              answer: "Yes, we offer ongoing maintenance and growth services.",
            },
          ],
        },
        {
          name: "Process",
          items: [
            {
              question: "How do we get started?",
              answer: "Schedule a discovery call to discuss your business goals.",
            },
            {
              question: "What industries do you work with?",
              answer: "We serve law firms, clinics, gyms, salons, and more.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Elevate your business today. Contact our team for a free consultation and let's discuss how we can help you grow."
      primaryButton={{
        text: "Schedule Consultation",
        href: "#",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:hello@elevationmedia.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
