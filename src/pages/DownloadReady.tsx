import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export function DownloadReady() {
  const [state, setState] = useState<"idle" | "preparing" | "starting">("idle");

  const onDownload = () => {
    setState("preparing");
    setTimeout(() => {
      setState("starting");
      setTimeout(() => setState("idle"), 2000);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-32 pb-40 px-container-margin flex flex-col items-center justify-center relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-md w-full text-center z-10">
        <Reveal direction="scale" duration={0.85}>
          <div className="relative group mx-auto mb-lg w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-lg overflow-hidden spotify-shadow bg-surface-container-lowest">
              <img
                alt="Album Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8wFFs96QJCfSsmqos5egYEjX3oMYI_cZqoKqIeEpfAACjQl1mXGRaEtpWepQlxQXIXjH2Jx0OJxuTqCO8GbUCcEmmxVUMzWvet5Q5sDbiSnDyLp2Nc9MrHg-VNUAbWa2O8nLtvJqWKwIexzM0SMIkmPArAV3-NEKt0BmQg_9cjUBstPhV-L1MJlQRZCeCC97cai6ph04pNyMU5hp2O8cKGh3xMMGdXUJZhDByUIYaOmPwNMr4I76Kn5n-PxhAaHPSm1rjb0Az1Xw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-container text-on-primary-container p-3 rounded-full spotify-shadow border-4 border-background flex items-center justify-center">
              <Icon name="check_circle" className="text-[32px]" filled />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="space-y-sm mb-xl">
            <h1 className="font-headline-lg text-headline-lg font-black tracking-tight text-on-background">
              Ready for Download
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xs mx-auto">
              Your high-fidelity EP archive is prepared and verified. Total size: 48.2 MB.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="flex flex-col gap-md items-center">
            <button
              onClick={onDownload}
              disabled={state !== "idle"}
              className="w-full py-4 px-xl bg-primary-container text-on-primary-container rounded-full text-body-lg font-bold flex items-center justify-center gap-sm hover:scale-[1.02] active:scale-95 transition-all spotify-shadow disabled:opacity-80"
            >
              {state === "idle" && (
                <>
                  <Icon name="download" />
                  Download EP (ZIP)
                </>
              )}
              {state === "preparing" && (
                <>
                  <Icon name="sync" className="animate-spin" />
                  Preparing Archive...
                </>
              )}
              {state === "starting" && (
                <>
                  <Icon name="check" />
                  Starting Download
                </>
              )}
            </button>
            <button className="text-secondary font-label-md hover:text-on-surface transition-colors uppercase tracking-widest text-[11px] font-black">
              View Tracklist
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <footer className="mt-24 max-w-sm text-center">
          <div className="flex items-center justify-center gap-xs text-outline mb-xs">
            <Icon name="verified_user" className="text-[16px]" />
            <span className="font-label-sm text-label-sm uppercase tracking-tighter">Secure Link</span>
          </div>
          <p className="font-body-md text-label-sm text-secondary leading-relaxed px-md">
            This download link is encrypted and intended for your account only. Do not share this
            URL. Assets are scanned for security.
          </p>
        </footer>
      </Reveal>
    </main>
  );
}
