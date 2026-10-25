import type { Metadata } from 'next';
import { Phone, Building, Home, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Redevelopment Society in Santa Cruz Mumbai - Redevelopment Services',
  description: 'Looking for Private Redevelopment Society in Santa Cruz Mumbai? We offer expert redevelopment consultancy services for housing societies and property owners. Call us: 9004810239.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Private Redevelopment Society in Santa Cruz Mumbai
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Are you looking for a <span className="font-semibold text-blue-600">Private Redevelopment Society in Santa Cruz Mumbai</span>? 
            Redevelopment offers property owners and housing societies an excellent opportunity to upgrade ageing buildings, 
            modernize residential spaces, and maximize the potential of your existing property.
          </p>
          <a
            href="tel:+919004810239"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            <Phone size={20} />
            Call for Enquiry: 9004810239
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Redevelopment Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "For Housing Societies", desc: "Expert guidance for cooperative housing society redevelopment." },
              { icon: Home, title: "For Property Owners", desc: "Feasibility and potential assessment for private building redevelopment." },
              { icon: Users, title: "Consultancy", desc: "Supporting residents, managing committees, and developers through the process." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto prose prose-blue lg:prose-lg">
          <h2 className="text-3xl font-bold mb-6">Society Redevelopment in Santacruz, Mumbai</h2>
          <p>Santacruz is an established residential area in Mumbai, with a mix of older residential buildings, housing societies, and private properties. Redevelopment is essential to address maintenance concerns and improve living facilities.</p>
          
          <h2 className="text-3xl font-bold mb-6">Housing Society Redevelopment in Santacruz West & East</h2>
          <p>Whether your property is in Santacruz West or East, we provide tailored redevelopment consultancy. Every project has unique requirements, from structural assessments to legal documentation and developer selection.</p>
          
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mt-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Key Considerations</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Existing building condition and documentation</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Society member consent and interest protection</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Developer experience and financial capacity</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} /> Regulatory compliance and permissions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is redevelopment possible in Santacruz East and Santacruz West?", a: "Yes, redevelopment is possible for eligible properties in both areas, depending on title, condition, and regulations." },
              { q: "How can I enquire about society redevelopment in Santacruz?", a: "For enquiries about private building or cooperative housing society redevelopment, call 9004810239." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
