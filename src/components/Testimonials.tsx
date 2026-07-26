import { Quote, MessageSquareDashed, PlusCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-border-dark/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            Endorsements
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Client &amp; Peer Recommendations
          </h3>
          <p className="mt-4 text-sm text-text-muted">
            Belief in transparency and integrity. Instead of displaying fabricated testimonials, this section showcases verified project endorsements as they are received.
          </p>
        </div>

        {/* Empty State Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl border border-dashed border-border-dark/80 bg-card-bg/5 p-8 flex flex-col justify-between min-h-[180px]">
            <div>
              <Quote className="h-6 w-6 text-border-dark mb-4" />
              <p className="text-xs italic text-text-muted/60 leading-relaxed">
                &ldquo;Endorsement details are currently undergoing verification. This placeholder will be updated with dynamic references from clients of local web deployments (like Vijeshwari Devi Kulja Motors).&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-border-dark/20 flex items-center justify-center text-[10px] font-bold text-text-muted">
                VD
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted/80">Local Business Client</span>
                <span className="block text-[10px] text-text-muted/50">Kulja Motors, Solan</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl border border-dashed border-border-dark/80 bg-card-bg/5 p-8 flex flex-col justify-between min-h-[180px]">
            <div>
              <Quote className="h-6 w-6 text-border-dark mb-4" />
              <p className="text-xs italic text-text-muted/60 leading-relaxed">
                &ldquo;Review pending from fellow open-source developers and early beta testers of SmartDollar Labs AI wealth advisor.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-border-dark/20 flex items-center justify-center text-[10px] font-bold text-text-muted">
                SD
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted/80">Beta Software Tester</span>
                <span className="block text-[10px] text-text-muted/50">SmartDollar Labs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit review callout */}
        <div className="mt-10 rounded-xl border border-border-dark bg-card-bg/20 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquareDashed className="h-5 w-5 text-accent-blue" />
            <div>
              <h5 className="font-display text-xs font-bold text-white">Have we collaborated on a project?</h5>
              <p className="text-[10px] text-text-muted mt-0.5">I would appreciate your feedback on our communication, engineering output, or code quality.</p>
            </div>
          </div>
          <a
            href="mailto:diwanshu200419@gmail.com?subject=Portfolio%20Recommendation"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-dark bg-card-bg/40 px-4 py-2 text-xs font-bold text-text-muted transition-colors hover:border-text-white hover:text-white"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Submit Recommendation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
