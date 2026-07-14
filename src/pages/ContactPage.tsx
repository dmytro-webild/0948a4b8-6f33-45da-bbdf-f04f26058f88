import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactPage() {
  return (
    <>
      <div data-webild-section="ContactSplitForm"><ContactSplitForm
        tag="Contact Us"
        title="Let's Elevate Your Business"
        description="Ready to grow your practice or firm? Reach out directly at elevatedbuisnesses@gmail.com or fill out the form below to start the conversation."
        inputs={[{"name":"name","type":"text","placeholder":"Full Name","required":true},{"name":"email","type":"email","placeholder":"Email Address","required":true},{"name":"company","type":"text","placeholder":"Company Name","required":false}]}
        textarea={{"name":"message","placeholder":"How can we help you thrive?","rows":4,"required":true}}
        buttonText="Send Message"
        imageSrc="https://img.freepik.com/free-photo/two-business-partners-working-together-office_1303-22265.jpg"
        textAnimation="fade-blur"
      /></div>
    </>
  );
}
