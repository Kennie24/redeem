import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type FieldProps = {
  label: string;
  hint?: string;
  children: React.ReactNode;
};

function Field({ label, hint, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-xs">
      <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
        {label}
      </span>
      {children}
      {hint && (
        <span className="font-label-sm text-label-sm text-secondary/70">{hint}</span>
      )}
    </label>
  );
}

type RowProps = {
  icon: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

function ToggleRow({ icon, title, description, checked, onChange }: RowProps) {
  return (
    <div className="bento-card p-md rounded-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
        <Icon name={icon} className="text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body-lg text-body-lg font-bold text-on-surface">{title}</p>
        <p className="font-label-sm text-label-sm text-secondary">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

type SegmentProps<T extends string> = {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
};

function Segmented<T extends string>({ options, value, onChange }: SegmentProps<T>) {
  return (
    <div className="bg-surface-container-high p-1 rounded-full inline-flex gap-1 w-fit">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={
              active
                ? "px-md py-xs rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md transition-all"
                : "px-md py-xs rounded-full text-secondary hover:text-on-surface font-label-md text-label-md transition-all"
            }
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function ProfileSettings() {
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [autoDownload, setAutoDownload] = useState(true);
  const [hifi, setHifi] = useState(true);
  const [crossfade, setCrossfade] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [theme, setTheme] = useState<"dark" | "system" | "light">("dark");
  const [quality, setQuality] = useState<"auto" | "high" | "lossless">("lossless");

  return (
    <main className="pt-24 pb-32 px-container-margin max-w-3xl mx-auto">
      {/* Header */}
      <Reveal direction="down">
        <div className="flex items-center gap-md mb-xl">
          <Link
            to="/profile"
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container transition-colors"
            aria-label="Back to profile"
          >
            <Icon name="arrow_back" />
          </Link>
          <div>
            <h1 className="font-headline-lg text-headline-lg">Profile Settings</h1>
            <p className="font-body-md text-body-md text-secondary">
              Manage your account, audio, and notifications
            </p>
          </div>
        </div>
      </Reveal>

      {/* Account */}
      <Reveal>
        <section className="bento-card rounded-2xl p-xl mb-xl">
          <div className="flex items-center gap-md mb-lg">
            <Avatar className="w-20 h-20 border-2 border-outline-variant">
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-djXy4TTbns_Fp1xn1KZefkmBvGFi9H6UbrljVeYce1l0p00MMV9a4ZICbyo7JRz_BTjj_7DnlDNHzTToJK2rqVWdMtWXiDap6LvtLAI8FcFUQXQqkuBphXXmTGMh3Vs_HfuptvF7xFWLKB60--JdmpPn8SwwwW9VgTqwjPX2CiyVdJWzuDZjZIHuQkBXwhPybII2RhrO4C1pDsloHP9Uti8tQxs0vw2EIB-LsTAOWoDi5HekoELE0RxNbV5ZJx7lg20XOwU-te4"
                alt="Avatar"
              />
              <AvatarFallback>KR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-xs">
              <p className="font-headline-md text-headline-md">Profile Picture</p>
              <div className="flex gap-sm">
                <Button size="sm">
                  <Icon name="upload" className="text-[18px]" />
                  Upload
                </Button>
                <Button size="sm" variant="outline">
                  Remove
                </Button>
              </div>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-lg" stagger={0.05}>
            <StaggerItem>
              <Field label="Display Name">
                <Input defaultValue="Ken Reyes" placeholder="Your name" />
              </Field>
            </StaggerItem>
            <StaggerItem>
              <Field label="Username">
                <Input defaultValue="kenreyes" placeholder="@username" />
              </Field>
            </StaggerItem>
            <StaggerItem>
              <Field label="Email" hint="Used for account recovery">
                <Input
                  type="email"
                  defaultValue="kennethkenzie48@gmail.com"
                  placeholder="you@example.com"
                />
              </Field>
            </StaggerItem>
            <StaggerItem>
              <Field label="Country">
                <Input defaultValue="United States" placeholder="Country" />
              </Field>
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <Field label="Bio" hint="Up to 160 characters">
                <textarea
                  rows={3}
                  defaultValue="Late-night listener. Vinyl hunter. Always chasing the next drop."
                  className="w-full rounded-xl bg-[#282828] px-md py-sm text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </Field>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </Reveal>

      {/* Appearance */}
      <Reveal>
        <section className="mb-xl">
          <h2 className="font-label-md text-label-md text-on-surface px-xs mb-md uppercase tracking-widest">
            Appearance
          </h2>
          <div className="bento-card rounded-2xl p-md flex flex-col md:flex-row md:items-center md:justify-between gap-md">
            <div>
              <p className="font-body-lg text-body-lg font-bold">Theme</p>
              <p className="font-label-sm text-label-sm text-secondary">
                Sonic Spotify always uses the dark surface palette.
              </p>
            </div>
            <Segmented
              value={theme}
              onChange={setTheme}
              options={[
                { label: "Dark", value: "dark" },
                { label: "System", value: "system" },
                { label: "Light", value: "light" },
              ]}
            />
          </div>
        </section>
      </Reveal>

      {/* Audio */}
      <Reveal>
        <section className="mb-xl">
          <h2 className="font-label-md text-label-md text-on-surface px-xs mb-md uppercase tracking-widest">
            Audio & Downloads
          </h2>
          <div className="flex flex-col gap-sm">
            <div className="bento-card rounded-2xl p-md flex flex-col md:flex-row md:items-center md:justify-between gap-md">
              <div>
                <p className="font-body-lg text-body-lg font-bold">Streaming Quality</p>
                <p className="font-label-sm text-label-sm text-secondary">
                  Lossless requires Premium · Tier II
                </p>
              </div>
              <Segmented
                value={quality}
                onChange={setQuality}
                options={[
                  { label: "Auto", value: "auto" },
                  { label: "High", value: "high" },
                  { label: "Lossless", value: "lossless" },
                ]}
              />
            </div>

            <StaggerGroup className="flex flex-col gap-sm" stagger={0.06}>
              <StaggerItem>
                <ToggleRow
                  icon="high_quality"
                  title="Hi-Fi Streaming"
                  description="Stream up to 24-bit / 192 kHz FLAC when available"
                  checked={hifi}
                  onChange={setHifi}
                />
              </StaggerItem>
              <StaggerItem>
                <ToggleRow
                  icon="download_for_offline"
                  title="Auto-download Redeemed EPs"
                  description="Download new redemptions to this device automatically"
                  checked={autoDownload}
                  onChange={setAutoDownload}
                />
              </StaggerItem>
              <StaggerItem>
                <ToggleRow
                  icon="graphic_eq"
                  title="Crossfade Tracks"
                  description="Blend the end of one track into the next"
                  checked={crossfade}
                  onChange={setCrossfade}
                />
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>
      </Reveal>

      {/* Notifications */}
      <Reveal>
        <section className="mb-xl">
          <h2 className="font-label-md text-label-md text-on-surface px-xs mb-md uppercase tracking-widest">
            Notifications
          </h2>
          <StaggerGroup className="flex flex-col gap-sm" stagger={0.06}>
            <StaggerItem>
              <ToggleRow
                icon="notifications"
                title="Push Notifications"
                description="New drops, redemption alerts, and tour announcements"
                checked={pushNotif}
                onChange={setPushNotif}
              />
            </StaggerItem>
            <StaggerItem>
              <ToggleRow
                icon="mail"
                title="Email Updates"
                description="Weekly digest of artists you follow"
                checked={emailNotif}
                onChange={setEmailNotif}
              />
            </StaggerItem>
            <StaggerItem>
              <ToggleRow
                icon="campaign"
                title="Marketing & Offers"
                description="Limited-edition drops and merch promotions"
                checked={marketing}
                onChange={setMarketing}
              />
            </StaggerItem>
          </StaggerGroup>
        </section>
      </Reveal>

      {/* Security */}
      <Reveal>
        <section className="mb-xl">
          <h2 className="font-label-md text-label-md text-on-surface px-xs mb-md uppercase tracking-widest">
            Security
          </h2>
          <div className="flex flex-col gap-sm">
            <ToggleRow
              icon="lock"
              title="Two-Factor Authentication"
              description="Require a code from your authenticator app at sign-in"
              checked={twoFA}
              onChange={setTwoFA}
            />
            <Link
              to="#"
              className="bento-card p-md rounded-xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <Icon name="key" className="text-primary" />
                </div>
                <div>
                  <p className="font-body-lg text-body-lg font-bold">Change Password</p>
                  <p className="font-label-sm text-label-sm text-secondary">
                    Last changed 3 months ago
                  </p>
                </div>
              </div>
              <Icon
                name="chevron_right"
                className="text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              to="#"
              className="bento-card p-md rounded-xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <Icon name="devices" className="text-primary" />
                </div>
                <div>
                  <p className="font-body-lg text-body-lg font-bold">Active Sessions</p>
                  <p className="font-label-sm text-label-sm text-secondary">
                    3 devices currently signed in
                  </p>
                </div>
              </div>
              <Icon
                name="chevron_right"
                className="text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Danger zone */}
      <Reveal>
        <section className="rounded-2xl border border-error/30 bg-error-container/10 p-xl mb-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center shrink-0">
              <Icon name="warning" className="text-error" filled />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-error">Danger Zone</h3>
              <p className="font-body-md text-body-md text-secondary">
                Permanently delete your account, redemption history, and library.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm">
            <Button
              variant="outline"
              className="border-error/40 text-error hover:bg-error/10"
            >
              Export My Data
            </Button>
            <Button className="bg-error text-on-error hover:scale-[1.02]">
              Delete Account
            </Button>
          </div>
        </section>
      </Reveal>

      {/* Save bar */}
      <Reveal>
        <div className="sticky bottom-24 flex justify-end gap-sm bg-background/70 backdrop-blur-xl p-md rounded-2xl border border-outline-variant/30">
          <Button variant="ghost">Discard</Button>
          <Button>
            <Icon name="check" />
            Save Changes
          </Button>
        </div>
      </Reveal>
    </main>
  );
}
