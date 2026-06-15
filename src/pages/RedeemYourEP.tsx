import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

const tracks = [
  { n: 1, title: "Neon Pulse", artist: "Cyber Echoes", time: "3:42", locked: false },
  { n: 2, title: "Digital Rain", artist: "Cyber Echoes", time: "4:15", locked: false },
  { n: 3, title: "Subsurface Drift", artist: "Redeem to unlock full tracklist", time: "3:58", locked: true },
  { n: 4, title: "Holographic Skies", artist: "Redeem to unlock full tracklist", time: "4:02", locked: true },
];

export function RedeemYourEP() {
  const [open, setOpen] = useState(false);

  return (
    <main className="pt-24 pb-32 px-container-margin md:px-xl max-w-7xl mx-auto">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-end gap-xl mb-xl">
        <Reveal direction="scale" duration={0.8} className="w-full md:w-[320px] flex-shrink-0">
          <div className="relative group aspect-square">
            <img
              className="w-full h-full object-cover rounded-lg album-shadow group-hover:brightness-110 transition-all duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChqVpeUCEFs5U7WuEaY64Tg7gQTzHxHYGBIR_YhsRc_ZhKVx5O5_yip_OweNC0jPzTpJ6X9fKbk0bf4srrI6ij6PcWFdkZy4zHo_SlNLZMXLkLBsD6RRe9eqQUDdIFl1PSbssKB0lq5ndbplCdRmGLruSZgczH6dhDdDdcdxqGLqW7XnsPzcSLbodcWzjANZyDAx1u5rYqkaplsLAPwNmxyrI5Z_tbCq4klIwJ5taoKzbT09KaWge-Mbybr6yt-0S3J9pe1VlxwKs"
              alt="Album cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <Icon name="play_circle" className="text-primary text-[64px]" filled />
            </div>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.15} className="flex-1">
          <div className="flex flex-col gap-sm">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
              Exclusive EP
            </span>
            <h2 className="font-display-lg text-display-lg md:text-[72px] leading-none mb-xs">
              Synthetic Horizons
            </h2>
            <div className="flex items-center gap-sm flex-wrap">
              <span className="font-label-md text-label-md text-primary">Cyber Echoes</span>
              <span className="text-secondary">•</span>
              <span className="font-label-md text-label-md text-secondary">2024</span>
              <span className="text-secondary">•</span>
              <span className="font-label-md text-label-md text-secondary">
                6 Songs, 22 min 14 sec
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Tracklist */}
      <section className="mt-xl">
        <Reveal>
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[40px_1fr_auto] gap-md px-md py-sm border-b border-outline-variant text-secondary font-label-md text-label-md mb-md">
            <div className="hidden md:block">#</div>
            <div>Title</div>
            <div className="flex justify-end">
              <Icon name="schedule" />
            </div>
          </div>
        </Reveal>
        <StaggerGroup className="flex flex-col gap-xs" stagger={0.06}>
          {tracks.map((t) => (
            <StaggerItem key={t.n}>
              <div
                className={
                  t.locked
                    ? "grid grid-cols-[1fr_auto] md:grid-cols-[40px_1fr_auto] gap-md px-md py-md rounded-lg opacity-50 select-none items-center"
                    : "group grid grid-cols-[1fr_auto] md:grid-cols-[40px_1fr_auto] gap-md px-md py-md rounded-lg hover:bg-surface-container transition-colors items-center"
                }
              >
                <div className="hidden md:block font-body-md text-body-md text-secondary">{t.n}</div>
                <div className="flex flex-col">
                  <span className="font-body-lg text-body-lg text-on-surface flex items-center gap-xs">
                    {t.title}
                    {t.locked && <Icon name="lock" className="text-sm" filled />}
                  </span>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-on-surface">
                    {t.artist}
                  </span>
                </div>
                <div className="flex items-center gap-lg justify-end">
                  {!t.locked && (
                    <Icon
                      name="favorite"
                      className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary"
                    />
                  )}
                  <span className="font-body-md text-body-md text-secondary">{t.time}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Redeem Bento */}
      <section className="mt-xl grid grid-cols-1 md:grid-cols-12 gap-lg">
        <Reveal direction="left" className="md:col-span-7">
          <div className="bg-surface-container rounded-xl p-xl flex flex-col justify-center relative overflow-hidden group h-full">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon name="confirmation_number" className="text-[200px]" />
            </div>
            <h3 className="font-headline-lg text-headline-lg mb-md">Got a redemption code?</h3>
            <p className="font-body-lg text-body-lg text-secondary mb-lg max-w-md">
              Enter your 12-digit secret code found on your physical vinyl or digital pass to unlock
              high-fidelity FLAC downloads and exclusive bonus tracks.
            </p>
            <div className="flex flex-col sm:flex-row gap-md items-center">
              <Input placeholder="XXXX-XXXX-XXXX" className="sm:w-80" />
              <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
                Unlock Content
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="md:col-span-5">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-xl flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-md">
                <Icon name="star" className="text-on-primary" filled />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                Exclusive Perk
              </h3>
              <p className="font-body-md text-body-md">
                Redeeming this EP grants you early access to the Synthetic Horizons world tour
                tickets and limited edition merch drops.
              </p>
            </div>
            <a href="#" className="mt-lg font-label-md text-label-md text-primary flex items-center gap-xs hover:underline">
              Learn more <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Success Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-lg">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-surface-container-high w-full max-w-md p-xl rounded-2xl border border-outline-variant text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-lg">
              <Icon name="check_circle" className="text-primary text-[48px]" filled />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-sm">Content Unlocked!</h2>
            <p className="font-body-md text-body-md text-secondary mb-xl">
              Your library has been updated with Synthetic Horizons. You can now stream and
              download all tracks in high resolution.
            </p>
            <div className="flex flex-col gap-md">
              <Button onClick={() => setOpen(false)}>Start Listening</Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Download Files
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
