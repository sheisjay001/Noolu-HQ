import { useState } from "react";

export const WorkspaceSetup = (): JSX.Element => {
  const [workspaceName, setWorkspaceName] = useState("");

  const steps = [
    { number: 1, label: "Create Your Account", active: true },
    { number: 2, label: "Tell Us About You", active: true },
    { number: 3, label: "Set Up Your Workspace", active: true },
    { number: 4, label: "Choose Your Focus", active: false },
  ];

  return (
    <div className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] flex flex-col gap-[69px]">
      <header className="w-[1280px] h-[83px] flex items-center bg-white">
        <div className="inline-flex mt-0 h-[35.03px] ml-10 w-[94.85px] relative items-center">
          <img
            className="relative w-[23.98px] h-[25.85px]"
            alt="Ellipse"
            src="/ellipse-1.svg"
          />
          <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3acc] text-[22.6px] tracking-[0] leading-[normal]">
            DIAG
          </div>
        </div>
      </header>

      <main className="flex ml-10 w-[1200px] h-[812px] relative items-start justify-between">
        <aside className="flex flex-col w-[385px] items-start gap-10 px-0 py-6 relative">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
              Let&apos;s get you set up in just 4 steps
            </p>
            <p className="relative self-stretch [font-family:'Montserrat-Light',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
              We&apos;ll keep it short and simple , just what we need to
              personalize your experience.
            </p>
          </div>

          <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            {steps.map((step, index) => (
              <div key={step.number}>
                <div
                  className={`inline-flex items-center gap-2 relative flex-[0_0_auto] ${
                    step.active ? "opacity-90" : "opacity-70"
                  }`}
                >
                  {step.active ? (
                    <div className="flex flex-col w-8 h-8 items-center justify-center gap-2 p-4 relative bg-indigo-600 rounded-[800px] aspect-[1]">
                      <div className="relative self-stretch mt-[-9.50px] mb-[-7.50px] ml-[-0.50px] mr-[-0.50px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[normal]">
                        {step.number}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col w-8 h-8 items-center justify-center gap-2 p-4 relative rounded-[800px] border border-solid border-[#3a3a3a] aspect-[1]">
                      <div className="relative self-stretch mt-[-9.50px] mb-[-7.50px] ml-[-0.50px] mr-[-0.50px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3a] text-sm text-center tracking-[0] leading-[normal]">
                        {step.number}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col w-[274px] items-start gap-2 relative">
                    <div
                      className={`relative self-stretch mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[normal] ${
                        step.active ? "text-[#4f46e5cc]" : "text-[#3a3a3ae6]"
                      }`}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="items-center px-4 py-2 flex gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-px h-[23.5px] ml-[-0.50px] bg-[#3a3a3a33]" />
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        <section className="flex flex-col w-[757px] h-[812px] items-center gap-10 px-[120px] py-10 relative bg-white rounded-3xl">
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-6 h-6 aspect-[1]">
                <img
                  className="absolute w-[73.45%] h-[85.94%] top-[14.06%] left-[26.55%]"
                  alt="Vector"
                  src="/caretleft.svg"
                />
              </div>
              <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3acc] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                Tell us about you
              </div>
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3a99] text-base text-right tracking-[0] leading-[normal]">
              3/4
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="flex flex-col items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-col items-start justify-center flex gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
                    Create your workspace
                  </h1>
                  <p className="relative self-stretch [font-family:'Montserrat-Light',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
                    Name your workspace and invite teammates (if you&apos;d
                    like). You can always add more later , we&apos;ll keep
                    things flexible.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <label
                        htmlFor="workspace-name"
                        className="relative flex-1 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5"
                      >
                        What&apos;s the name of your workspace?
                      </label>
                      <div
                        className="relative w-6 h-6 overflow-hidden aspect-[1] opacity-0"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex h-14 items-center gap-2 p-4 relative self-stretch w-full rounded border border-solid border-[#3a3a3a1a] focus-within:border-indigo-600 transition-colors">
                      <input
                        id="workspace-name"
                        type="text"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="eg., Nexa team"
                        className="relative w-full [font-family:'Montserrat-Medium',Helvetica] font-medium text-foundationgreygrey-100 text-[11px] tracking-[0.50px] leading-4 placeholder:text-foundationgreygrey-100 bg-transparent border-0 outline-none"
                        aria-label="Workspace name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <button
                  type="button"
                  className="flex h-10 items-center justify-center gap-2 p-4 relative self-stretch w-full bg-indigo-600 rounded hover:bg-indigo-700 active:bg-indigo-800 transition-colors cursor-pointer"
                  aria-label="Continue to next step"
                >
                  <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-foundationgreygrey-50 text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Continue
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
