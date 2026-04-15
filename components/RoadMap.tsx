import Image from "next/image";


export default function RoadMap() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10 pb-16 pt-8 sm:pb-24 sm:pt-10 ">
            <div
                            aria-hidden="true"
                            className="absolute  inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,155,142,0.2),rgba(0,0,0,1)_62%)]"
                        />
            
                        <div className="relative mx-auto max-w-6xl mb-10">
                            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] text-white/75 backdrop-blur">
                                    <span className="h-2 w-2 rounded-full bg-[#2de4cf]" />
                                    Your Autonomous Digital Operators
                                </div>
                                <h2 className="mt-6 text-balance text-[2.15rem] font-medium leading-[1.12] text-white sm:text-[3.2rem]">
                                    Meet the team that
                                    <br />
                                    never clocks out
                                </h2>

                                <div>
                            <span className="inline-flex items-center mt-5 p-1 text-xs text-white/70">
                            Deploying agentic AI should feel simple. We handle the setup and the hard parts, so your business gets a system that runs smoothly. This is not self service. It is built for you, and supported after launch.
                            </span>
                        </div>
                            </div>
             
                           
                        </div>
                       
          <div className="w-full">
            <Image
              src="/curve.png"
              alt="Roadmap"
              width={1170}
              height={1170}
                            className="w-full h-auto object-contain object-center drop-shadow-[0_22px_40px_rgba(0,0,0,0.65)]"
            />
          </div>
        </section>
    );
}
