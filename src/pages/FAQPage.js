import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import './FAQPage.css';

const faqs = [
  {
    category: 'Reservations & Booking',
    questions: [
      {
        q: 'How do I make a reservation?',
        a: 'You can book online through our accommodations page, call us at (705) 636-5000, or email us at info@mysretreat.com. We recommend booking early, especially for summer weekends and holidays.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 14+ days before arrival receive a full refund minus a $25 processing fee. Cancellations within 14 days are non-refundable, but we offer credit toward a future stay (valid 1 year).',
      },
      {
        q: 'Do you offer long-term or seasonal stays?',
        a: 'Yes! We offer seasonal RV site rentals from May through October. Contact us directly for seasonal rates and availability.',
      },
    ],
  },
  {
    category: 'Check-In & Arrival',
    questions: [
      {
        q: 'What time is check-in and check-out?',
        a: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request (subject to availability).',
      },
      {
        q: 'What do I need to bring?',
        a: 'For tent/RV camping: bedding, camping gear, food, and personal items. Cottages include linens and kitchenware. We recommend bringing bug spray, sunscreen, and outdoor clothing suitable for the season.',
      },
      {
        q: 'Is there a minimum stay requirement?',
        a: 'Sometimes there is a 2-night minimum requirement, which will be reflected on our booking portal. Requirements vary by season and accommodation type.',
      },
    ],
  },
  {
    category: 'Site Amenities & Services',
    questions: [
      {
        q: 'Do RV sites have full hookups?',
        a: 'Yes! Our 65 RV sites offer full hookups including water, sewer, and 30/50 amp electrical service. Each site also includes a picnic table and fire pit.',
      },
      {
        q: 'Is WiFi available?',
        a: 'WiFi is available in cottages and around the office area. Tent and RV sites have limited or no WiFi to encourage disconnecting and enjoying nature.',
      },
      {
        q: 'Are there showers and bathrooms?',
        a: 'Yes, we have modern shower and bathroom facilities located centrally throughout the campground. Cottages have private bathrooms.',
      },
      {
        q: 'Can I rent equipment (kayaks, canoes, bikes)?',
        a: 'Yes! We offer kayak and canoe rentals. Contact the office for availability and rates. We recommend reserving equipment in advance during peak season.',
      },
    ],
  },
  {
    category: 'Rules & Policies',
    questions: [
      {
        q: 'Are pets allowed?',
        a: 'Yes! Pets are welcome at designated pet-friendly sites. Pets must be leashed at all times, and owners are responsible for cleanup. Some restrictions apply (breed/size limits may apply).',
      },
      {
        q: 'Is there a quiet time?',
        a: 'Quiet hours are 11:00 PM - 8:00 AM. We ask all guests to be respectful of fellow campers and keep noise to a minimum during these hours.',
      },
      {
        q: 'Can I have a campfire?',
        a: 'Absolutely! Campfires are encouraged. Firewood is available for purchase at the office. Fires must be contained in designated fire pits and fully extinguished before leaving your site.',
      },
      {
        q: 'How many people are allowed per site?',
        a: 'Tent sites accommodate up to 6 people. RV sites accommodate up to 4. Cottages vary (2-6 people). Additional guests may incur extra fees.',
      },
    ],
  },
  {
    category: 'Activities & Recreation',
    questions: [
      {
        q: 'What activities are available?',
        a: 'Swimming at our private lakefront beach, kayaking, canoeing, fishing, hiking trails, campfire gatherings, stargazing, and wildlife watching. We are also close to Algonquin Park for day trips.',
      },
      {
        q: 'Do I need a fishing license?',
        a: 'Yes, a valid Ontario fishing license is required for anyone over 18. Licenses can be purchased online or at local retailers in Kearney.',
      },
      {
        q: 'Is the beach supervised?',
        a: 'No, swimming is at your own risk. We do not have lifeguards on duty. Children should be supervised at all times.',
      },
    ],
  },
  {
    category: 'Location & Directions',
    questions: [
      {
        q: 'Where are you located?',
        a: 'Located in Kearney, Ontario, just off Highway 518. About 30 minutes south of Algonquin Park and 3 hours north of Toronto.',
      },
      {
        q: 'Is there cell phone reception?',
        a: 'The site has cell service, but it may be spotty depending on your provider. We recommend letting family know you may have limited connectivity during your stay.',
      },
      {
        q: 'Are there stores or restaurants nearby?',
        a: 'Kearney has a general store, gas station, and a few restaurants within 10 minutes. For larger groceries, Huntsville is about 45 minutes away.',
      },
    ],
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onToggle}>
      <span>{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="faq-icon"
      >
        <FaChevronDown />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="faq-answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQPage = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHero
        image="faq-hero.jpg"
        label="Help Center"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about camping at MYS Retreat."
      />

      <section className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <p className="section-body">
              Have a question? We've got answers! If you don't see what you're looking for below,
              feel free to <a href="/contact">contact us</a> directly.
            </p>
          </div>

          {faqs.map((category, catIndex) => (
            <div key={category.category} className="faq-category">
              <h2 className="faq-category__title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq, qIndex) => (
                  <FAQItem
                    key={qIndex}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openItem === `${catIndex}-${qIndex}`}
                    onToggle={() => toggleItem(catIndex, qIndex)}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Quick Common Questions */}
          <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid #e5e7eb' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ maxWidth: 700, margin: '0 auto' }}
            >
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <p className="section-label">Quick Answers</p>
                <h2 className="section-heading">
                  Common <span className="accent">Questions</span>
                </h2>
              </div>
              {[
                { q: 'What are the check-in and check-out times?', a: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in may be available upon request.' },
                { q: 'Are pets allowed?', a: 'Yes! We are a pet-friendly campground. Pets must be kept on a leash and cleaned up after at all times.' },
                { q: 'Is there WiFi available?', a: 'WiFi is available in our cottages and around the office area. The campground and RV sites have limited cellular coverage — embrace the disconnect!' },
                { q: 'What amenities are on-site?', a: 'We have a private lakefront beach, fish cleaning station, playground, laundry facilities, hiking trails, and a general store.' },
                { q: 'Can I have a campfire?', a: 'Campfires are allowed at designated fire pits when there is no fire ban in effect. Firewood is available for purchase at the office.' },
                { q: 'How do I get there?', a: 'We are located at 2900 Highway 518, Kearney, Ontario. About 2.5 hours north of Toronto via Highway 11.' },
              ].map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openItem === `quick-${i}`}
                  onToggle={() => {
                    const key = `quick-${i}`;
                    setOpenItem(openItem === key ? null : key);
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="faq-cta" style={{ marginTop: 'var(--space-xl)' }}>
            <h3 className="faq-cta__title">Still have questions?</h3>
            <p className="faq-cta__text">
              We're here to help! Contact us by phone, email, or stop by the office during your visit.
            </p>
            <a href="/contact" className="btn btn--primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default FAQPage;
