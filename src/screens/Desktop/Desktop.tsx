import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

// Step data for the left sidebar stepper
const steps = [
  { number: 1, label: "Create Your Account" },
  { number: 2, label: "Tell Us About You" },
  { number: 3, label: "Set Up Your Workspace" },
  { number: 4, label: "Choose Your Focus" },
];

export const Desktop = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const activeStep = 1;

  return (
    <div
      className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] flex flex-col gap-[69px]"
      data-model-id="1:27"
    >
      {/* Navbar */}
      <header className="w-full h-[83px] flex items-center bg-white shadow-none">
        <div className="inline-flex items-center gap-1 ml-10 h-[35.85px]">
          <div 
            className="w-[25.5px] h-[25.96px] rounded-full rotate-[28.76deg] bg-gradient-to-br from-[rgba(79,70,229,0.9)] via-[#38BDF8] to-[rgba(56,189,248,0.9)]"
          />
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[22.6px] tracking-[0] leading-[normal]">
            DIAG
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex ml-20 mt-[69px] w-[1200px] h-[812px] items-start justify-between">
        {/* Left: Stepper */}
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
                className="flex flex-col items-start self-stretch w-full"
              >
                {/* Step row */}
                <div
                  className={`inline-flex items-center gap-2 ${
                    step.number === activeStep ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {/* Step circle */}
                  <div
                    className={`flex w-8 h-8 items-center justify-center rounded-full flex-shrink-0 ${
                      step.number === activeStep
                        ? "bg-indigo-600"
                        : "border border-solid border-[#3a3a3a] bg-transparent"
                    }`}
                  >
                    <span
                      className={`[font-family:'Montserrat',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal] ${
                        step.number === activeStep ? "text-white" : "text-[#3a3a3a]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Step label */}
                  <div className="flex flex-col w-[274px] items-start gap-2">
                    <span
                      className={`self-stretch [font-family:'Montserrat',Helvetica] font-medium text-sm tracking-[0] leading-[normal] ${
                        step.number === activeStep
                          ? "text-[#4f46e5cc]"
                          : "text-[#3a3a3ae6]"
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

        {/* Right: Form card */}
        <Card className="flex flex-col w-[757px] ml-10 min-h-[812px] items-center gap-10 px-[120px] py-10 bg-white rounded-3xl border-0 shadow-none">
          <CardContent className="flex flex-col w-full p-0 gap-10">
            {/* Step counter */}
            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a99] text-base text-right tracking-[0] leading-[normal]">
              1/4
            </p>

            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <div className="flex flex-col items-start gap-4 self-stretch w-full">
                <div className="flex flex-col items-center gap-10 self-stretch w-full rounded-lg">
                  
                  {/* Form heading */}
                  <div className="flex flex-col items-start justify-center gap-10 self-stretch w-full">
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
                        Let's start with the basics
                      </h2>
                      <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
                        Enter your email and set a secure password. This helps us keep your account safe and ready for future logins.
                      </p>
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    
                    {/* Email field */}
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <Label
                        htmlFor="email"
                        className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5"
                      >
                        Email address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="h-14 px-4 self-stretch w-full rounded border border-solid border-[#3a3a3a1a] [font-family:'Montserrat',Helvetica] font-normal"
                      />
                    </div>

                    {/* Create password field */}
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <Label
                        htmlFor="password"
                        className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5"
                      >
                        Create password
                      </Label>
                      <div className="flex h-14 items-center justify-between px-4 self-stretch w-full rounded border border-solid border-[#3a3a3a1a]">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create your password"
                          className="flex-1 bg-transparent outline-none [font-family:'Montserrat',Helvetica] font-medium text-foundationgreygrey-100 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="flex-shrink-0 ml-2"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Eye"
                            src="/eye.svg"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Confirm password field */}
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <Label
                        htmlFor="confirm-password"
                        className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5"
                      >
                        Confirm password
                      </Label>
                      <div className="flex h-14 items-center justify-between px-4 self-stretch w-full rounded border border-solid border-[#3a3a3a1a]">
                        <input
                          id="confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="flex-1 bg-transparent outline-none [font-family:'Montserrat',Helvetica] font-medium text-foundationgreygrey-100 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="flex-shrink-0 ml-2"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Eye"
                            src="/eye.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    <Button className="h-auto flex items-center justify-center gap-2 px-4 py-3 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
                      Create Account
                    </Button>
                    <p className="self-stretch text-center [font-family:'Montserrat',Helvetica] font-medium text-[11px] leading-[16px] tracking-[0.5px]">
                      <span className="text-[#3a3a3ae6]">
                        Already have an account?{" "}
                      </span>
                      <span className="text-indigo-600 cursor-pointer hover:underline">
                        Login
                      </span>
                    </p>
                  </div>

                  {/* Terms */}
                  <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[10px] text-center leading-[14px] tracking-[0.4px]">
                    <span className="text-[#3a3a3a]">
                      By creating an account, I agree to MayK AI's{" "}
                    </span>
                    <span className="text-indigo-600 cursor-pointer hover:underline">
                      Terms of Use
                    </span>
                    <span className="text-[#3a3a3a]">{" "}and{" "}</span>
                    <span className="text-indigo-600 cursor-pointer hover:underline">
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* OR divider & Google button */}
            <div className="flex flex-col items-center justify-center gap-4 self-stretch w-full">
              {/* OR divider */}
              <div className="inline-flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-[#3a3a3a1a]"></div>
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-foundationgreygrey-200 text-sm leading-5 tracking-[0.1px] whitespace-nowrap">
                  OR
                </span>
                <div className="flex-1 h-px bg-[#3a3a3a1a]"></div>
              </div>

              {/* Continue with Google */}
              <Button
                variant="outline"
                className="h-auto flex items-center justify-center gap-2 p-4 self-stretch w-full rounded-lg border border-solid border-[#ebebeb] bg-white"
              >
                <img
                  className="w-6 h-6"
                  alt="Flat color icons"
                  src="/flat-color-icons-google.svg"
                />
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-foundationgreygrey-400 text-sm leading-5 tracking-[0.1px] whitespace-nowrap">
                  Continue with Google
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};