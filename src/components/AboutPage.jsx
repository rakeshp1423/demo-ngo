import React from 'react';

const About = () => {
  return (
    <div className="bg-[#f9f7f4] text-gray-800 min-h-screen">
      <header className="bg-[#5d473a] text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-serif tracking-wide">About MAMAT NGO</h1>
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        <Section title="Who We Are">
          <p>
            MAMAT is a grassroots NGO committed to transforming the lives of underserved communities through
            education, healthcare, empowerment, and sustainable development. Since 2015, we’ve worked to foster
            dignity, opportunity, and self-reliance at the grassroots level.
          </p>
        </Section>

        <Section title="Our Vision">
          <p>
            A society where every individual has access to equal opportunity, education, and a dignified life—regardless
            of their background.
          </p>
        </Section>

        <Section title="Our Mission">
          <p>
            To empower vulnerable communities through education, vocational training, healthcare access,
            and environmental stewardship, creating self-sustaining villages and empowered citizens.
          </p>
        </Section>

        <Section title="What We Do">
          <ul className="list-disc list-inside space-y-2">
            <li>Free education initiatives for underprivileged children</li>
            <li>Community health check-ups and awareness drives</li>
            <li>Vocational and skill training for youth and women</li>
            <li>Eco-friendly rural development and water conservation</li>
            <li>Disaster relief and long-term recovery programs</li>
          </ul>
        </Section>

        <Section title='Why "MAMAT"?'>
          <p>
            "MAMAT" represents nurturing, unconditional care—just like a mother’s. It reminds us of our duty to uplift
            with empathy, serve selflessly, and build communities on the foundation of love and support.
          </p>
        </Section>

        <Section title="Join Us">
          <p>
            Whether you’re a volunteer, a donor, or someone eager to make a difference, MAMAT welcomes you.
            Together, let’s build a brighter, more compassionate world.
          </p>
        </Section>
      </main>

      <footer className="bg-[#5d473a] text-white text-center py-4 text-sm">
        &copy; 2025 MAMAT NGO | Serving with compassion since 2015.
      </footer>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold font-serif border-b-2 border-[#c3a995] inline-block mb-4">
      {title}
    </h2>
    <div className="text-justify text-base leading-relaxed">{children}</div>
  </section>
);

export default About;
