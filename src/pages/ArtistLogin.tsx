import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { artistApi } from "@/lib/artistApi";

export function ArtistLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await artistApi.login(email, password, remember);
      navigate("/artist");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Sign in failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212] text-on-background">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-[#121212]/80 px-container-margin backdrop-blur-xl">
        <Link to="/artist/login" className="flex items-center gap-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
            <Icon name="graphic_eq" filled />
          </span>
          <div className="leading-none">
            <span className="block font-headline-md text-headline-md font-black tracking-tighter text-primary">SoundRedeem</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">For Artists</span>
          </div>
        </Link>
        <Link to="/login" className="font-label-md text-label-md text-secondary transition-colors hover:text-primary">
          LISTENER LOGIN
        </Link>
      </header>

      <main className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-xl px-container-margin pb-xl pt-24 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <span className="font-label-md text-label-md uppercase tracking-[0.24em] text-primary">Artist workspace</span>
          <h1 className="mt-md max-w-xl font-display-lg text-[64px] font-black leading-[0.95] tracking-[-0.05em]">
            Your music.<br />Your audience.<br /><span className="text-primary">Your control.</span>
          </h1>
          <p className="mt-lg max-w-lg font-body-lg text-body-lg text-secondary">
            Upload releases, publish 30-second previews, track redemptions, and manage your earnings from one workspace.
          </p>
          <div className="mt-xl grid max-w-lg grid-cols-3 gap-gutter">
            {[
              ["audio_file", "Upload", "Singles & albums"],
              ["play_circle", "Preview", "30-second samples"],
              ["monitoring", "Analyze", "Real-time insights"],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-md">
                <Icon name={icon} className="mb-sm text-primary" />
                <p className="font-body-md text-body-md font-bold">{title}</p>
                <p className="mt-xs font-label-sm text-label-sm text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md rounded-2xl border border-outline-variant/20 bg-surface-container p-xl spotify-shadow"
        >
          <div className="mb-xl">
            <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Icon name="person" className="text-[28px]" filled />
            </div>
            <h2 className="font-headline-lg text-headline-lg font-black">Artist sign in</h2>
            <p className="mt-xs font-body-md text-body-md text-secondary">Welcome back. Continue to your artist workspace.</p>
          </div>

          <form onSubmit={submit} className="space-y-md">
            <label className="block space-y-xs">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">Email address</span>
              <div className="flex h-14 items-center gap-sm rounded-xl border border-transparent bg-surface-container-high px-md transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                <Icon name="mail" className="text-[20px] text-secondary" />
                <input required value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" placeholder="artist@example.com" className="min-w-0 flex-1 bg-transparent text-body-lg text-on-surface outline-none placeholder:text-outline" />
              </div>
            </label>

            <label className="block space-y-xs">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">Password</span>
              <div className="flex h-14 items-center gap-sm rounded-xl border border-transparent bg-surface-container-high px-md transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                <Icon name="lock" className="text-[20px] text-secondary" />
                <input required value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" className="min-w-0 flex-1 bg-transparent text-body-lg text-on-surface outline-none placeholder:text-outline" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"} className="text-secondary transition-colors hover:text-primary">
                  <Icon name={showPassword ? "visibility_off" : "visibility"} className="text-[20px]" />
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between py-xs">
              <label className="flex cursor-pointer items-center gap-sm font-body-md text-body-md text-secondary">
                <button type="button" role="checkbox" aria-checked={remember} onClick={() => setRemember((value) => !value)} className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${remember ? "border-primary-container bg-primary-container text-on-primary-container" : "border-outline bg-transparent"}`}>
                  {remember && <Icon name="check" className="text-[15px]" />}
                </button>
                Remember me
              </label>
              <a href="#" className="font-label-md text-label-md text-primary hover:underline">Forgot password?</a>
            </div>

            {error && <div role="alert" className="flex items-start gap-sm rounded-xl border border-error/30 bg-error-container/20 p-md text-error"><Icon name="error" /><span className="text-body-md">{error}</span></div>}

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? <><Icon name="progress_activity" className="animate-spin" />Signing in…</> : <>Sign in to workspace <Icon name="arrow_forward" /></>}
            </Button>
          </form>

          <div className="my-lg flex items-center gap-md">
            <div className="h-px flex-1 bg-outline-variant/30" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">or</span>
            <div className="h-px flex-1 bg-outline-variant/30" />
          </div>

          <button type="button" className="flex h-12 w-full items-center justify-center gap-sm rounded-full border border-outline-variant text-body-md font-bold transition-colors hover:bg-surface-container-high">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-black text-[#4285F4]">G</span>
            Continue with Google
          </button>

          <p className="mt-xl text-center font-body-md text-body-md text-secondary">
            Not an artist yet? <a href="#" className="font-bold text-primary hover:underline">Apply for artist access</a>
          </p>
        </motion.section>
      </main>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute -bottom-48 right-0 h-[460px] w-[460px] rounded-full bg-primary-container/5 blur-[120px]" />
      </div>
    </div>
  );
}
