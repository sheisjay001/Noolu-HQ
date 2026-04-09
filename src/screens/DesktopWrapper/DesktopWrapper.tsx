import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

// Step data for the left panel progress indicator
const steps = [
  { number: 1, label: "Create Your Account", active: true },
  { number: 2, label: "Tell Us About You", active: true },
  { number: 3, label: "Set Up Your Workspace", active: false },
  { number: 4, label: "Choose Your Focus", active: false },
];

// Team size options for the radio group
const teamSizeOptions = [
  { value: "just-me", label: "Just me" },
  { value: "2-10", label: "2-10 teammates" },
  { value: "11-50", label: "11-50 teammates" },
  { value: "50+", label: "50+ teammates" },
];

export const DesktopWrapper = (): JSX.Element => {
  const [teamSize, setTeamSize] = useState("just-me");

  return (
    <div
      className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] flex flex-col gap-[69px]"
      data-model-id="1:101"
    >
      {/* Navigation Header */}
      <header className="w-full h-[83px] flex items-center bg-white shadow-none">
        <div className="inline-flex mt-0 h-[35.03px] ml-10 w-[94.85px] items-center gap-1">
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

      {/* Main Content */}
      <main className="flex ml-20 mt-[69px] w-[1200px] h-[812px] items-start justify-between">
        
        {/* Left Panel Steps */}
        <aside className="flex flex-col w-[385px] h-[462.5px] items-start gap-10 px-8 py-6">
          {/* Title & Subtitle */}
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            <h1 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
              Let's get you set up in just 4 steps
            </h1>
            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
              We'll keep it short and simple, just what we need to personalize your experience.
            </p>
          </div>

          {/* Step List */}
          <div className="flex flex-col items-start self-stretch w-full">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col self-stretch w-full"
              >
                {/* Step Row */}
                <div
                  className={`inline-flex items-center gap-2 ${
                    step.active ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={`flex w-8 h-8 items-center justify-center p-4 rounded-full flex-shrink-0 ${
                      step.active
                        ? "bg-indigo-600"
                        : "border border-solid border-[#3a3a3a] bg-transparent"
                    }`}
                  >
                    <span
                      className={`[font-family:'Montserrat',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal] ${
                        step.active ? "text-white" : "text-[#3a3a3a]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Label */}
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
        </aside>

        {/* Right Panel Form Card */}
        <section className="flex flex-col w-[757px] ml-10 min-h-[812px] items-center gap-10 px-[120px] py-10 bg-white rounded-3xl">
          
          {/* Top bar: Back (hidden) & Step counter */}
          <div className="flex items-start justify-between self-stretch w-full">
            {/* Back button hidden (opacity-0) */}
            <div className="inline-flex items-center gap-1 opacity-0 pointer-events-none">
              <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                Back
              </span>
            </div>
            {/* Step counter */}
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a99] text-base text-right tracking-[0] leading-[normal]">
              2/4
            </span>
          </div>

          {/* Form Content */}
          <div className="flex flex-col items-start gap-10 self-stretch w-full">
            <div className="flex flex-col items-center gap-10 self-stretch w-full rounded-lg">
              <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
                
                {/* Form Heading */}
                <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
                  <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
                    Who's joining us?
                  </h2>
                  <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
                    We'd love to know your name and role so we can tailor the experience to how you work best, whether you're solo or with a team.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col items-start gap-6 self-stretch w-full">
                  
                  {/* Name Field */}
                  <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    <div className="flex items-center gap-2 self-stretch w-full">
                      <Label className="flex-1 [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
                        What should we call you?
                      </Label>
                    </div>
                    <Input
                      className="h-14 px-4 self-stretch w-full rounded border border-solid border-[#3a3a3a1a] [font-family:'Montserrat',Helvetica] font-normal"
                      placeholder="e.g. Orimadegun Promise"
                    />
                  </div>

                  {/* Role Field */}
                  <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    <div className="flex items-center gap-2 self-stretch w-full">
                      <Label className="flex-1 [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
                        What's your role?
                      </Label>
                    </div>
                    <Input
                      className="h-14 px-4 self-stretch w-full rounded border border-solid border-[#3a3a3a1a] [font-family:'Montserrat',Helvetica] font-medium"
                      placeholder="e.g. Product designer"
                    />
                  </div>

                  {/* Team Size Radio Group */}
                  <div className="flex flex-col items-start gap-4 self-stretch w-full">
                    <Label className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
                      Are you working solo or with a team?
                    </Label>
                    <RadioGroup
                      value={teamSize}
                      onValueChange={setTeamSize}
                      className="flex flex-col items-start gap-4"
                    >
                      {teamSizeOptions.map((option) => (
                        <div key={option.value} className="flex items-center gap-4">
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className="w-6 h-6 border-[#3a3a3a66] text-indigo-600"
                          />
                          <Label
                            htmlFor={option.value}
                            className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-sm tracking-[0.10px] leading-5 whitespace-nowrap cursor-pointer"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="flex flex-col items-start gap-2 self-stretch w-full">
                  <Button className="h-[48px] self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[14px] tracking-[0] leading-[normal]">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
