import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Step data for the left-side stepper
const steps = [
  { number: 1, label: "Create Your Account", active: true },
  { number: 2, label: "Tell Us About You", active: false },
  { number: 3, label: "Set Up Your Workspace", active: false },
  { number: 4, label: "Choose Your Focus", active: false },
];

export const DesktopScreen = (): JSX.Element => {
  return (
    <div
      className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] flex flex-col gap-[69px]"
      data-model-id="1:109"
    >
      {/* Navbar */}
      <header className="w-full h-[83px] flex items-center bg-white">
        <div className="inline-flex ml-10 h-[35.85px] items-center gap-1">
          <div 
            className="w-[25.5px] h-[25.96px] rounded-full"
            style={{ 
              background: 'linear-gradient(185.79deg, rgba(79, 70, 229, 0.9) 4.61%, #38BDF8 58.82%, rgba(56, 189, 248, 0.9) 100.99%)',
              transform: 'rotate(28.76deg)'
            }}
          />
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[22.6px] tracking-[0] leading-[normal]">
            DIAG
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex ml-20 mt-[69px] w-[1200px] h-[812px] items-start justify-between">
        {/* Left stepper panel */}
        <section className="flex flex-col w-[385px] h-[462.5px] items-start gap-10 px-8 py-6">
          {/* Heading */}
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            <h1 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
              Let's get you set up in just 4 steps
            </h1>
            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
              We'll keep it short and simple, just what we need to personalize your experience.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-start self-stretch w-full">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col self-stretch w-full"
              >
                {/* Step row */}
                <div
                  className={`inline-flex items-center gap-2 flex-[0_0_auto] ${
                    step.active ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {/* Step circle */}
                  {step.active ? (
                    <div className="flex flex-col w-8 h-8 items-center justify-center gap-2 p-4 bg-indigo-600 rounded-full shrink-0">
                      <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[normal]">
                        {step.number}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col w-8 h-8 items-center justify-center gap-2 p-4 rounded-full border border-solid border-[#3a3a3a] shrink-0">
                      <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a] text-sm text-center tracking-[0] leading-[normal]">
                        {step.number}
                      </span>
                    </div>
                  )}

                  {/* Step label */}
                  <div className="flex flex-col w-[274px] items-start gap-2">
                    <span
                      className={`self-stretch [font-family:'Montserrat',Helvetica] font-medium text-sm tracking-[0] leading-[normal] ${
                        step.active ? "text-[#4f46e5cc]" : "text-[#3a3a3ae6]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>

                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="flex w-full h-[39.5px] px-4 py-2 items-center gap-2">
                    <div className="w-0 h-[23.5px] border-l border-[#4F46E5CC]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Right card panel */}
        <Card className="flex flex-col w-[757px] ml-10 min-h-[812px] items-center gap-10 px-[120px] py-10 bg-white rounded-3xl border-0 shadow-none">
          <CardContent className="flex flex-col items-start gap-4 self-stretch w-full p-0">
            {/* Back progress */}
            <div className="flex items-start justify-between self-stretch w-full">
              <button className="inline-flex items-center gap-1 cursor-pointer bg-transparent border-0">
                <img
                  className="w-6 h-6"
                  alt="Caret left"
                  src="/caretleft.svg"
                />
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Back
                </span>
              </button>
              <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a99] text-base text-right tracking-[0] leading-[normal]">
                1/4
              </span>
            </div>

            {/* Form content */}
            <div className="flex flex-col items-center gap-10 self-stretch w-full rounded-lg">
              <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
                {/* Title & subtitle */}
                <div className="flex flex-col items-center gap-2 self-stretch w-full">
                  <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
                    Verify Email address
                  </h2>
                  <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
                    A six digit verification code has been sent to your email address, enter it here to verify your account.
                  </p>
                </div>

                {/* OTP Inputs & Resend */}
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  {/* OTP boxes */}
                  <div className="flex items-start gap-4 self-stretch w-full">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex flex-col h-14 items-start gap-2 flex-1 grow"
                      >
                        <div className="h-14 border border-solid border-[#3a3a3a1a] flex items-center justify-center gap-2 p-4 self-stretch w-full rounded">
                          {/* Empty OTP slot */}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resend code text */}
                  <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[14px] text-right leading-[14px]">
                    <span className="font-medium text-[#3a3a3acc] tracking-[0] leading-[14px]">
                      Didn't get Code?{" "}
                    </span>
                    <span className="font-medium text-indigo-600 tracking-[0.06px] leading-[14px] cursor-pointer">
                      Resend code in 10 sec
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Verify button */}
              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <Button className="flex h-auto py-3 px-4 items-center justify-center gap-2 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
                  Verify
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
