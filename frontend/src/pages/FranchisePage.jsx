import Button from "../components/AnimatedButton";
import SectionHeading from "../components/SectionHeading";

const FranchisePage = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <span className="text-[#ED206F] font-bold tracking-widest uppercase text-xs block mb-4">
          Now Franchising Across India
        </span>
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
          Modern. Urban. PiRo.
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Global Inspiration, Indian Expression.  
          A new-age dining brand built in India, designed to scale globally.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading
          title="A New-Age Dining Experience"
          subtitle="Why PiRo Exists"
        />
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
          PiRo Kitchens is redefining modern dining — not by Indianising global dishes,
          but by building an Indian-born brand designed to go global.
          We create spaces where people eat well, pause, and feel connected —
          across premium diners and high-efficiency tech-park kiosks.
        </p>
      </section>

      {/* WHY MARKET */}
      <section className="bg-[#FAFAFA] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Why the Market is Ready"
            subtitle="Consumer Trends"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "Growing demand for premium yet accessible restaurants",
              "Tech-park kiosks becoming essential dining touchpoints",
              "Instagram-first audiences seeking shareable spaces",
              "Tier 2 & 3 cities ready for new-age hospitality formats",
            ].map((text, i) => (
              <div key={i} className="bg-white p-6 shadow-sm border">
                <p className="font-semibold text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD PHILOSOPHY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading
          title="Our Food Philosophy"
          subtitle="Built for Scale"
        />

        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          <ul className="space-y-4 text-lg">
            <li>• Crowd-pleasing, comfort-driven menu</li>
            <li>• Global favourites infused with Indian flavours</li>
            <li>• Easy-to-train kitchen processes</li>
            <li>• High delivery aggregation potential</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Rice bowls, pasta, pizza, burgers, sandwiches — designed to win on
            taste, margin, and repeatability.  
            This is food that scales without compromising quality.
          </p>
        </div>
      </section>

      {/* BUSINESS SNAPSHOT */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Franchise Business Snapshot"
            subtitle="Quick Overview"
            light
          />

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <p><strong>Format:</strong> Premium Diner / Event Café / Kiosk</p>
              <p><strong>Area Required:</strong> 1000–2000 sq.ft (Diner), 400–600 sq.ft (Kiosk)</p>
              <p><strong>Investment:</strong> ₹60–80L (Diner), ₹40–55L (Kiosk)</p>
            </div>
            <div>
              <p><strong>Payback Period:</strong> 36–48 Months</p>
              <p><strong>Setup Time:</strong> 25–45 Days</p>
              <p><strong>Breakeven:</strong> 6–8 Months</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FRANCHISE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeading
          title="Why Franchise with PiRo"
          subtitle="FOCO Model"
        />

        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
          <ul className="space-y-3">
            <li>• Unique, modern format</li>
            <li>• Multi-revenue model: dine-in, delivery, events</li>
            <li>• Strong visual brand & customer connect</li>
            <li>• Low operating overheads</li>
          </ul>
          <ul className="space-y-3">
            <li>• SOP-driven scalable kitchens</li>
            <li>• Centralised vendor & supply chain</li>
            <li>• 10+ years founding team experience</li>
            <li>• Regular training & launch support</li>
          </ul>
        </div>
      </section>

      {/* IDEAL FRANCHISEE */}
      <section className="bg-[#FAFAFA] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            title="Ideal Franchise Partner"
            subtitle="Who We Are Looking For"
          />

          <p className="text-lg text-gray-700 leading-relaxed">
            We seek partners who are passionate about food, hospitality, and
            long-term brand building — who understand local markets and value
            transparent collaboration with a committed founding team.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ED206F] text-white py-24 px-6 text-center">
        <h2 className="font-montserrat font-bold text-4xl mb-6">
          Own a PiRo. Create a space your city talks about.
        </h2>
        <p className="mb-10 text-lg">
          +91 90712 32501 · franchise@pirokitchens.com
        </p>
        <Button className="bg-gray-800 text-[#ED206F] hover:bg-black hover:text-white">
          Download Franchise Deck
        </Button>
      </section>
    </div>
  );
};

export default FranchisePage;
