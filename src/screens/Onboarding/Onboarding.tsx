import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

// --- Constants ---
const STEPS = [
  { number: 1, label: "Create Your Account" },
  { number: 2, label: "Tell Us About You" },
  { number: 3, label: "Set Up Your Workspace" },
  { number: 4, label: "Choose Your Focus" },
];

const TEAM_SIZE_OPTIONS = [
  { value: "just-me", label: "Just me" },
  { value: "2-10", label: "2-10 teammates" },
  { value: "11-50", label: "11-50 teammates" },
  { value: "50+", label: "50+ teammates" },
];

const FOCUS_OPTIONS = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product Management" },
  { value: "marketing", label: "Marketing" },
  { value: "data", label: "Data & Analytics" },
  { value: "other", label: "Other" },
];

const OTP_LENGTH = 6;
const RESEND_TIMEOUT = 10;

// --- Validation Logic ---
const validate = {
  email: (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address.",
  password: (v: string) =>
    v.length >= 8 ? "" : "Password must be at least 8 characters.",
  confirmPassword: (p: string, c: string) =>
    p === c ? "" : "Passwords do not match.",
  name: (v: string) => (v.trim().length > 0 ? "" : "Please enter your name."),
  role: (v: string) => (v.trim().length > 0 ? "" : "Please enter your role."),
};

// Helper component for errors
const FieldError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <span className="text-red-500 text-xs mt-1">{message}</span>;
};

// --- Sub-components ---

// 1. Left Stepper Panel
function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <aside className="hidden md:flex flex-col w-[385px] h-[462.5px] items-start gap-10 px-8 py-6 shrink-0">
      <div className="flex flex-col items-start gap-4 self-stretch w-full">
        <h1 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-2xl md:text-[32px] tracking-[0] leading-[normal]">
          Let's get you set up in just 4 steps
        </h1>
        <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
          We'll keep it short and simple, just what we need to personalize your experience.
        </p>
      </div>

      <div className="flex flex-col items-start self-stretch w-full">
        {STEPS.map((step, index) => {
          const isActiveOrPast = activeStep >= step.number;
          return (
            <div key={step.number} className="flex flex-col self-stretch w-full">
              <div className={`inline-flex items-center gap-2 ${isActiveOrPast ? "opacity-100" : "opacity-70"}`}>
                <div
                  className={`flex w-8 h-8 items-center justify-center p-4 rounded-full flex-shrink-0 ${
                    isActiveOrPast ? "bg-indigo-600 border-indigo-600" : "border border-solid border-[#3a3a3a] bg-transparent"
                  }`}
                >
                  <span className={`[font-family:'Montserrat',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal] ${isActiveOrPast ? "text-white" : "text-[#3a3a3a]"}`}>
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col w-[274px] items-start gap-2">
                  <span className={`self-stretch [font-family:'Montserrat',Helvetica] font-medium text-sm tracking-[0] leading-[normal] ${isActiveOrPast ? "text-[#4f46e5cc]" : "text-[#3a3a3ae6]"}`}>
                    {step.label}
                  </span>
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div className="flex w-full h-[39.5px] px-4 py-2 items-center gap-2">
                  <div className="w-0 h-[23.5px] border-l border-[#4F46E5CC]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

// 2. Step 1: Account Creation
function Step1({ onNext, initialData }: any) {
  const [email, setEmail] = useState(initialData.email || "");
  const [password, setPassword] = useState(initialData.password || "");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "", confirm: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailErr = validate.email(email);
    const passErr = validate.password(password);
    const confErr = validate.confirmPassword(password, confirmPassword);

    setErrors({ email: emailErr, password: passErr, confirm: confErr });
    setSubmitted(true);

    if (!emailErr && !passErr && !confErr) {
      onNext({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col items-start gap-10 self-stretch w-full">
      <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
        <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-[32px] tracking-[0] leading-[normal]">
          Let's start with the basics
        </h2>
        <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
          Enter your email and set a secure password. This helps us keep your account safe and ready for future logins.
        </p>
      </div>

      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        {/* Email */}
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <Label htmlFor="email" className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (submitted) setErrors(prev => ({ ...prev, email: validate.email(e.target.value) })); }}
            placeholder="Your email address"
            className={`h-14 px-4 self-stretch w-full rounded border border-solid ${errors.email ? "border-red-400" : "border-[#3a3a3a1a]"} [font-family:'Montserrat',Helvetica] font-normal`}
          />
          <FieldError message={errors.email} />
        </div>

        {/* Password */}
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <Label htmlFor="password" className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
            Create password
          </Label>
          <div className={`flex h-14 items-center justify-between px-4 self-stretch w-full rounded border border-solid ${errors.password ? "border-red-400" : "border-[#3a3a3a1a]"}`}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); if (submitted) setErrors(prev => ({ ...prev, password: validate.password(e.target.value) })); }}
              placeholder="Create your password"
              className="flex-1 bg-transparent outline-none [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a] text-sm tracking-[0.50px] leading-4"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="flex-shrink-0 ml-2 opacity-60 hover:opacity-100 transition-opacity">
              <img className="w-6 h-6" alt="Toggle password" src="/eye.svg" />
            </button>
          </div>
          <FieldError message={errors.password} />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <Label htmlFor="confirm-password" className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
            Confirm password
          </Label>
          <div className={`flex h-14 items-center justify-between px-4 self-stretch w-full rounded border border-solid ${errors.confirm ? "border-red-400" : "border-[#3a3a3a1a]"}`}>
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value); if (submitted) setErrors(prev => ({ ...prev, confirm: validate.confirmPassword(password, e.target.value) })); }}
              placeholder="Confirm your password"
              className="flex-1 bg-transparent outline-none [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a] text-sm tracking-[0.50px] leading-4"
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="flex-shrink-0 ml-2 opacity-60 hover:opacity-100 transition-opacity">
              <img className="w-6 h-6" alt="Toggle password" src="/eye.svg" />
            </button>
          </div>
          <FieldError message={errors.confirm} />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 self-stretch w-full">
        <Button type="submit" className="h-auto flex items-center justify-center gap-2 px-4 py-3 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
          Create Account
        </Button>
        <p className="self-stretch text-center [font-family:'Montserrat',Helvetica] font-medium text-[11px] leading-[16px] tracking-[0.5px]">
          <span className="text-[#3a3a3ae6]">Already have an account? </span>
          <span className="text-indigo-600 cursor-pointer hover:underline">Login</span>
        </p>
      </div>

      <p className="self-stretch text-center [font-family:'Montserrat',Helvetica] font-normal text-[10px] leading-[14px] tracking-[0.4px] -mt-4">
        <span className="text-[#3a3a3a]">By creating an account, I agree to MayK AI's </span>
        <span className="text-indigo-600 cursor-pointer hover:underline">Terms of Use</span>
        <span className="text-[#3a3a3a]"> and </span>
        <span className="text-indigo-600 cursor-pointer hover:underline">Privacy Policy</span>
      </p>

      <div className="flex flex-col items-center justify-center gap-4 self-stretch w-full">
        <div className="inline-flex items-center gap-4 w-full justify-center">
          <div className="flex-1 h-px bg-[#3a3a3a1a]"></div>
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a66] text-sm leading-5 tracking-[0.1px]">OR</span>
          <div className="flex-1 h-px bg-[#3a3a3a1a]"></div>
        </div>
        <Button type="button" variant="outline" className="h-auto flex items-center justify-center gap-2 p-4 self-stretch w-full rounded-lg border border-solid border-[#ebebeb] bg-white hover:bg-gray-50">
          <img className="w-6 h-6" alt="Google" src="/flat-color-icons-google.svg" />
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a99] text-sm leading-5 tracking-[0.1px]">Continue with Google</span>
        </Button>
      </div>
    </form>
  );
}

// 3. Step 2: OTP Verification
interface Step2Props {
  email: string;
  onNext: () => void;
  onBack: () => void;
}

function Step2({ email, onNext, onBack }: Step2Props) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [resendCountdown, setResendCountdown] = useState(RESEND_TIMEOUT);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendCountdown <= 0) {
      setCanResend(true);
      return;
    }
    const t = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCountdown]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    setError("");
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((c, i) => { next[i] = c; });
    setOtp(next);
    const lastFilled = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[lastFilled]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setCanResend(false);
    setResendCountdown(RESEND_TIMEOUT);
    setOtp(Array(OTP_LENGTH).fill(""));
    setError("");
    inputRefs.current[0]?.focus();
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < OTP_LENGTH) {
      setError("Please enter all 6 digits of the verification code.");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleVerify} noValidate className="flex flex-col items-center gap-10 self-stretch w-full">
      <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
        <div className="flex flex-col items-center gap-2 self-stretch w-full">
          <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-2xl md:text-[32px] tracking-[0] leading-[normal]">
            Verify Email address
          </h2>
          <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
            A six digit verification code has been sent to <span className="font-medium text-indigo-600">{email || "your email address"}</span>. Enter it here to verify your account.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          <div className="flex items-start gap-3 self-stretch w-full" onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <div key={i} className="flex flex-col h-14 items-start gap-2 flex-1">
                <Input
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`h-14 w-full border border-solid ${error ? "border-red-400" : digit ? "border-indigo-400" : "border-[#3a3a3a1a]"} flex items-center justify-center text-center text-xl`}
                />
              </div>
            ))}
          </div>
          <FieldError message={error} />

          <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[14px] text-right leading-4">
            <span className="font-medium text-[#3a3a3acc] tracking-[0]">Didn't get Code? </span>
            {canResend ? (
              <button type="button" onClick={handleResend} className="font-medium text-indigo-600 tracking-[0.06px] cursor-pointer hover:underline bg-transparent border-0 p-0">
                Resend code
              </button>
            ) : (
              <span className="font-medium text-indigo-600 tracking-[0.06px]">Resend code in {resendCountdown} sec</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 self-stretch w-full">
        <Button type="submit" className="flex h-10 items-center justify-center gap-2 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
          Verify
        </Button>
      </div>
    </form>
  );
}

// 4. Step 3: Tell Us About You
interface Step3Props {
  onNext: (data: { name: string; role: string; teamSize: string }) => void;
  onBack: () => void;
  initialData: { name: string; role: string; teamSize: string };
}

function Step3({ onNext, onBack, initialData }: Step3Props) {
  const [name, setName] = useState(initialData.name);
  const [role, setRole] = useState(initialData.role);
  const [teamSize, setTeamSize] = useState(initialData.teamSize || "just-me");
  const [errors, setErrors] = useState({ name: "", role: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validate.name(name);
    const roleErr = validate.role(role);
    setErrors({ name: nameErr, role: roleErr });
    setSubmitted(true);

    if (!nameErr && !roleErr) {
      onNext({ name, role, teamSize });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col items-start gap-10 self-stretch w-full">
      <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
          <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-2xl md:text-[32px] tracking-[0] leading-[normal]">
            Who's joining us?
          </h2>
          <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
            We'd love to know your name and role so we can tailor the experience to how you work best, whether you're solo or with a team.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch w-full">
          {/* Name */}
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <Label className="flex-1 [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
              What should we call you?
            </Label>
            <Input
              value={name}
              onChange={(e) => { setName(e.target.value); if (submitted) setErrors(prev => ({ ...prev, name: validate.name(e.target.value) })); }}
              className={`h-14 px-4 self-stretch w-full rounded border border-solid ${errors.name ? "border-red-400" : "border-[#3a3a3a1a]"} [font-family:'Montserrat',Helvetica] font-medium`}
              placeholder="e.g. Orimadegun Promise"
            />
            <FieldError message={errors.name} />
          </div>

          {/* Role */}
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <Label className="flex-1 [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
              What's your role?
            </Label>
            <Input
              value={role}
              onChange={(e) => { setRole(e.target.value); if (submitted) setErrors(prev => ({ ...prev, role: validate.role(e.target.value) })); }}
              className={`h-14 px-4 self-stretch w-full rounded border border-solid ${errors.role ? "border-red-400" : "border-[#3a3a3a1a]"} [font-family:'Montserrat',Helvetica] font-medium`}
              placeholder="e.g. Product designer"
            />
            <FieldError message={errors.role} />
          </div>

          {/* Team Size */}
          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            <Label className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-sm tracking-[0.10px] leading-5">
              Are you working solo or with a team?
            </Label>
            <RadioGroup value={teamSize} onValueChange={setTeamSize} className="flex flex-col items-start gap-4">
              {TEAM_SIZE_OPTIONS.map((option) => (
                <div key={option.value} className="flex items-center gap-4">
                  <RadioGroupItem value={option.value} id={`ts-${option.value}`} className="w-6 h-6 border-[#3a3a3a66] text-indigo-600" />
                  <Label htmlFor={`ts-${option.value}`} className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-sm tracking-[0.10px] leading-5 whitespace-nowrap cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <Button type="submit" className="h-10 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold">
            Continue
          </Button>
        </div>
      </div>
    </form>
  );
}

// 5. Step 4: Choose your Focus
interface Step4Props {
  onNext: (data: { focus: string }) => void;
  onBack: () => void;
  initialData: { focus: string };
}

function Step4({ onNext, onBack, initialData }: Step4Props) {
  const [focus, setFocus] = useState(initialData.focus);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!focus) {
      setError("Please select a focus area to continue.");
      return;
    }
    onNext({ focus });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col items-start gap-10 self-stretch w-full">
      <div className="flex flex-col items-center gap-10 self-stretch w-full rounded-lg">
        <div className="flex flex-col items-start justify-center gap-10 self-stretch w-full">
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-2xl md:text-[32px] tracking-[0] leading-[normal]">
              Choose your focus
            </h2>
            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm tracking-[0] leading-[normal]">
              Select the area you primarily work in. This helps us surface the most relevant tools and insights for you right from the start.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 self-stretch w-full">
            {FOCUS_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => { setFocus(option.value); setError(""); }}
                className={`flex items-center justify-center p-4 rounded-lg border border-solid text-left transition-all [font-family:'Montserrat',Helvetica] font-medium text-sm tracking-[0] ${
                  focus === option.value
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-white border-[#3a3a3a1a] text-[#3a3a3ae6] hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {error && <FieldError message={error} />}
        </div>
        
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <Button type="submit" className="h-10 self-stretch w-full bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
            Get Started
          </Button>
        </div>
      </div>
    </form>
  );
}

// 6. Success Screen
function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 self-stretch w-full py-10 text-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20L16 26L30 12" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a] text-[28px] md:text-[32px] leading-[normal]">
          You're all set, {name.split(" ")[0]}!
        </h2>
        <p className="[font-family:'Montserrat',Helvetica] font-light text-[#3a3a3acc] text-sm leading-[normal] mx-auto">
          Your workspace is ready. Welcome to DIAG. Let's build something great together.
        </p>
      </div>
      <Button className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 rounded text-white [font-family:'Montserrat',Helvetica] font-bold text-[11px] leading-[100%] tracking-[0]">
        Go to Dashboard
      </Button>
    </div>
  );
}

// --- Root Component ---
export const Onboarding = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const [accountData, setAccountData] = useState({ email: "", password: "" });
  const [profileData, setProfileData] = useState({ name: "", role: "", teamSize: "just-me" });
  const [focusData, setFocusData] = useState({ focus: "" });

  const handleStep1 = (data: { email: string; password: string }) => {
    setAccountData(data);
    setCurrentStep(2);
  };

  const handleStep2 = () => setCurrentStep(3);

  const handleStep3 = (data: { name: string; role: string; teamSize: string }) => {
    setProfileData(data);
    setCurrentStep(4);
  };

  const handleStep4 = (data: { focus: string }) => {
    setFocusData(data);
    setIsComplete(true);
  };

  const handleBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const showBack = currentStep > 1 && !isComplete;
  
  // Map internal currentStep to sidebar step labels
  const activeSidebarStep = isComplete 
    ? 5 
    : currentStep === 1 || currentStep === 2 
      ? 1 
      : currentStep === 3 
        ? 2 
        : 4;

  const stepCount = activeSidebarStep > 4 ? 4 : activeSidebarStep;

  return (
    <div className="bg-gray-50 w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full h-[83px] flex items-center bg-white shadow-sm shrink-0">
        <div className="inline-flex items-center gap-1 ml-6 md:ml-10 h-[35.03px]">
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
      <main className="flex flex-col md:flex-row gap-8 md:gap-0 md:ml-20 md:pt-[69px] w-[1200px] h-[812px] md:items-start md:justify-between">
        
        {/* Left Stepper */}
        <Stepper activeStep={activeSidebarStep} />

        {/* Mobile stepper (compact pill strip) */}
        <div className="flex md:hidden items-center justify-center gap-2">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className={`h-1.5 rounded-full transition-all ${
                activeSidebarStep >= step.number
                  ? "bg-indigo-600 w-8"
                  : "bg-[#3a3a3a33] w-4"
              }`}
            />
          ))}
        </div>

        {/* Right Form Card */}
        <Card className="flex flex-col w-full md:w-[757px] md:ml-10 items-center gap-10 px-6 sm:px-12 md:px-[120px] py-10 bg-white rounded-3xl border-0 shadow-none">
          <CardContent className="flex flex-col w-full p-0 gap-10">
            
            {/* Top Bar (Back Button / Step Counter) */}
            {!isComplete && (
              <div className="flex items-center justify-between self-stretch w-full">
                {showBack ? (
                  <button type="button" onClick={handleBack} className="inline-flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 hover:opacity-80 transition-opacity">
                    <img className="w-6 h-6" alt="Back" src="/caretleft.svg" />
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Back
                    </span>
                  </button>
                ) : (
                  <div /> /* Empty div for flex spacing when hidden */
                )}
                
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3a99] text-base text-right tracking-[0] leading-[normal]">
                  {stepCount}/4
                </span>
              </div>
            )}

            {/* Step Content Router */}
            {isComplete ? (
              <SuccessScreen name={profileData.name} />
            ) : currentStep === 1 ? (
              <Step1 onNext={handleStep1} initialData={accountData} />
            ) : currentStep === 2 ? (
              <Step2 email={accountData.email} onNext={handleStep2} onBack={handleBack} />
            ) : currentStep === 3 ? (
              <Step3 onNext={handleStep3} onBack={handleBack} initialData={profileData} />
            ) : currentStep === 4 ? (
              <Step4 onNext={handleStep4} onBack={handleBack} initialData={focusData} />
            ) : null}

          </CardContent>
        </Card>
      </main>
    </div>
  );
};
