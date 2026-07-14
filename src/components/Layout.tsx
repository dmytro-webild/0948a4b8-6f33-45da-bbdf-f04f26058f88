import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "Contact", href: "/contact" },

];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Elevation"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3GTaMoXuYSTqX2LVBuutSAbAz5R/tmp/a-sophisticated-abstract-background-show-1783998686329-65fa3acf.png"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Elevation Media"
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Portfolio",
              href: "#",
            },
            {
              label: "SEO Guide",
              href: "#",
            },
          ],
        },
        {
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
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
