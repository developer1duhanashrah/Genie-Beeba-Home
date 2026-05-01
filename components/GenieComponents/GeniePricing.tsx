import { tiers, sections } from '@/lib/data/staticPricing';
import { CheckIcon, XIcon, SquareCheckBig } from 'lucide-react';
import Image from 'next/image';

function Check() {
  return <SquareCheckBig className="mx-auto h-5 w-5 md:h-6 md:w-6 text-[#00c39c] stroke-[2.5]" aria-hidden="true" />;
}

function Cross() {
  return <XIcon className="mx-auto h-5 w-5 md:h-6 md:w-6 text-red-500 stroke-[2.5]" aria-hidden="true" />;
}




export default function GeniePricing() {
  const rows = sections.flatMap((section) => section.features);

  return (
    <section className="px-25">
     

      <div className="px-25 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10  px-6 py-16  sm:px-8 lg:px-10">
          {/* Left filled wave (matches curved teal area) */}
          <div className="relative mx-auto text-center pb-12">
           
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-white ">
              <span className="text-[#67d2ff]">Genie Inbound Pricing</span>
              <span className="text-white"> - Feature Comparison Table</span>
            </h1>
          </div>

          <div className="relative mx-auto overflow-hidden rounded-sm  border border-white/10 ">
            {/* Desktop / large: table layout */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <div className="grid md:grid-cols-[minmax(160px,1fr)_repeat(3,minmax(120px,1fr))] lg:grid-cols-[minmax(260px,1fr)_repeat(3,minmax(190px,1fr))] gap-5 text-sm font-bold uppercase tracking-[0.24em] text-black">
              <div className="bg-[#00c39c] px-6 py-4 text-left">Feature / Capability</div>
              {tiers.map((tier) => (
                <div key={tier.id} className="relative border-l border-white/10 bg-[#00c39c] px-6 py-4 text-center">
                  {tier.mostPopular && (
                    <div className="absolute -top-3 left-1/2 flex -translate-x-1/2">
                     
                    </div>
                  )}
                  <div className="text-base tracking-[0.24em]">{tier.name}</div>
                </div>
              ))}
              </div>
            </div>

            {/* Mobile: stacked tier cards grouped by section */}
            <div className="md:hidden px-2">
              {tiers.map((tier) => (
                <div key={tier.id} className="mb-4 rounded-lg border border-white/8 bg-[#071918] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-white">{tier.name}</div>
                    <div className="text-sm text-white">{tier.price}{tier.unit}</div>
                  </div>
                  <div className="space-y-3">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <div className="mb-2 text-xs font-semibold uppercase text-[#9decdc]">{section.name}</div>
                        <div className="space-y-2">
                          {section.features.map((feature) => {
                            const value = feature.tiers[tier.name as keyof typeof feature.tiers];
                            return (
                              <div key={feature.name} className="flex items-center justify-between">
                                <div className="text-sm text-white/90 max-w-[65%] truncate">{feature.name}</div>
                                <div className="ml-3">
                                  {typeof value === 'boolean' ? (
                                    value ? <Check /> : <Cross />
                                  ) : (
                                    <span className="text-sm font-semibold text-white">{value}</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block divide-y divide-white/10 px-4 py-4 sm:px-6">
              {rows.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid md:grid-cols-[minmax(160px,1fr)_repeat(3,minmax(120px,1fr))] lg:grid-cols-[minmax(260px,1fr)_repeat(3,minmax(190px,1fr))] items-center gap-2 py-4 text-sm sm:gap-4 `}
                >
                  <div className="font-medium text-white">{feature.name}</div>
                  {tiers.map((tier) => {
                    const value = feature.tiers[tier.name as keyof typeof feature.tiers];
                    return (
                      <div key={tier.id} className="flex justify-center border-l border-white/10 px-2">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check />
                          ) : (
                            <Cross />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-white">{value}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] lg:grid-cols-[minmax(260px,1fr)_repeat(3,minmax(190px,1fr))] border-t border-white/10 px-4 py-6 text-sm font-black uppercase tracking-[0.24em] sm:px-6">
              <div className="text-left text-[#baf3e7]">Price / Month</div>
              {tiers.map((tier) => (
                <div key={tier.id} className="border-l border-white/10 px-2 text-white text-center flex justify-center">
                  <div className="text-xl">{tier.price}/</div>
                  <div className="mt-1 text-white">{tier.unit.replace('/', '')}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 text-center text-sm font-semibold uppercase tracking-[0.24em] ">
            Additional Minutes will be charged separately.
          </div>
        </div>
        </div>
    </div>
      </section>

  );
}
