import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { CountryPhoneInput } from "@/components/CountryPhoneInput";

type Method = "phone" | "email";

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function Login() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<Method>("phone");
  const [value, setValue] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (value.trim()) navigate("/scan");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212] text-on-background">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-[#121212]/80 px-gutter backdrop-blur-xl">
        <Link to="/login" className="flex items-center gap-base">
          <Icon name="music_note" className="text-primary text-headline-md" filled />
          <span className="font-headline-md text-headline-md font-black tracking-tight text-primary">SoundRedeem</span>
        </Link>
        <Link to="/signup" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors">SIGN UP</Link>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-container-margin pb-xl pt-24"
      >
        <div className="mb-xl text-center">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">Log in or sign up</h1>
          <p className="mt-xs font-body-md text-body-md text-secondary">Access your redemptions and high-fidelity library.</p>
        </div>

        <div className="mb-lg flex border-b border-surface-container-highest" role="tablist">
          {(["phone", "email"] as Method[]).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={method === tab}
              onClick={() => { setMethod(tab); setValue(""); }}
              className={`flex-1 border-b-2 py-md font-label-md text-label-md transition-all ${
                method === tab ? "border-primary text-white" : "border-transparent text-secondary"
              }`}
            >
              {tab === "phone" ? "Phone number" : "Email"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mb-xl space-y-lg">
          <motion.div key={method} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}>
            <label className="mb-xs ml-base block font-label-md text-label-md text-on-surface-variant">
              {method === "phone" ? "Phone number" : "Email address"}
            </label>
            {method === "phone" ? (
              <CountryPhoneInput value={value} onChange={setValue} required />
            ) : (
              <input
                required
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="w-full rounded-lg border border-transparent bg-surface-container-high px-md py-md font-body-lg text-body-lg outline-none transition-all placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="email@example.com"
                type="email"
                autoComplete="email"
              />
            )}
          </motion.div>

          <button className="w-full rounded-full bg-primary-container py-md font-body-lg text-body-lg font-bold text-[#191414] shadow-lg transition-all hover:bg-[#1ed760] hover:scale-[1.02] active:scale-95">
            Continue
          </button>
        </form>

        <div className="mb-xl flex items-center gap-md">
          <div className="h-px flex-grow bg-surface-container-highest" />
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">or</span>
          <div className="h-px flex-grow bg-surface-container-highest" />
        </div>

        <div className="space-y-md">
          <button type="button" className="flex w-full items-center justify-center gap-md rounded-full border border-outline-variant py-md font-body-lg text-body-lg font-bold transition-colors hover:bg-surface-container-low">
            <GoogleIcon /> Continue with Google
          </button>
          <button type="button" className="flex w-full items-center justify-center gap-md rounded-full border border-outline-variant py-md font-body-lg text-body-lg font-bold transition-colors hover:bg-surface-container-low">
            <Icon name="ios" className="text-2xl" filled /> Continue with Apple
          </button>
        </div>

        <div className="mt-auto pt-xl text-center">
          <p className="px-md font-body-md text-body-md text-on-surface-variant">
            By continuing, you agree to SoundRedeem&apos;s <a className="font-bold text-on-surface hover:underline" href="#">Terms of Service</a> and <a className="font-bold text-on-surface hover:underline" href="#">Privacy Policy</a>.
          </p>
          <p className="mt-lg font-body-md text-body-md text-secondary">
            New to SoundRedeem? <Link to="/signup" className="font-bold text-primary hover:underline">Create an account</Link>
          </p>
        </div>
      </motion.main>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[100px]" />
      </div>
    </div>
  );
}
