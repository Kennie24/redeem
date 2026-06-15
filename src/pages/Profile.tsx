import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { label: "REDEEMED", value: "27", icon: "confirmation_number" },
  { label: "LIBRARY", value: "184", icon: "library_music" },
  { label: "FOLLOWING", value: "42", icon: "person_add" },
];

const recent = [
  {
    title: "Synthetic Horizons",
    artist: "Cyber Echoes",
    date: "Redeemed today",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChqVpeUCEFs5U7WuEaY64Tg7gQTzHxHYGBIR_YhsRc_ZhKVx5O5_yip_OweNC0jPzTpJ6X9fKbk0bf4srrI6ij6PcWFdkZy4zHo_SlNLZMXLkLBsD6RRe9eqQUDdIFl1PSbssKB0lq5ndbplCdRmGLruSZgczH6dhDdDdcdxqGLqW7XnsPzcSLbodcWzjANZyDAx1u5rYqkaplsLAPwNmxyrI5Z_tbCq4klIwJ5taoKzbT09KaWge-Mbybr6yt-0S3J9pe1VlxwKs",
  },
  {
    title: "Liquid Rhythms",
    artist: "Flow State",
    date: "Redeemed 2 days ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt_-sTtFeR6r6xH5xRemZpReuuMF39oyTtWil36RNL_NZRQqUvglDVqGuapXyb-DY5aUMcrjlC4ex3jEeQ0kxmkzaWUBpZ7ZByDODh9-4WEgKd29po8VJeQPciQZ8xMyCHrvoUz1_3wq4ozBvxSo_Hr9UhS5KG7_T8PCRIPLtpXDU05kHRYeYuP2tD3xYzLD8trQz2obauulg1zELcYeTHvqxCWTkToOHX7pexR5I8DiPLzB3jNQ_UPHCyZ0UlLyhHBvBfsQY0oIQ",
  },
  {
    title: "Subterranean",
    artist: "Bass Theory",
    date: "Redeemed last week",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAPhAU3ufy4jmWhXubAFevI9zzzJNKCd7vfd337ycgUkpbfBRQPeIEHsM2v_bJmXJ9xKPRTOt3q3BP7DWlZpgUV4K-hcm0cGW8Nf7iL7QEdGp1nnbda3pmKtseCvJ2553DZpWkTvFFbacAsu1QrJNjv4mLDlgZcuR1ygt54OQ6tAd_nvssG7JqUAGHSh15UWclCvsvi5fQV2Vn2G8oWtb1WRPFzLuSITC7K3DCZpk9nkezWvQXzDnkpB4SZlgJIgtXNmrJ9Yd-qFU",
  },
];

const badges = [
  { name: "Early Adopter", icon: "rocket_launch", earned: true },
  { name: "Vinyl Hunter", icon: "album", earned: true },
  { name: "First Drop", icon: "celebration", earned: true },
  { name: "Sound Curator", icon: "queue_music", earned: true },
  { name: "Top Listener", icon: "headphones", earned: false },
  { name: "Crate Digger", icon: "interests", earned: false },
];

export function Profile() {
  return (
    <main className="pt-24 pb-32 px-container-margin max-w-6xl mx-auto">
      {/* Header / Hero */}
      <section className="relative mb-xl overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative p-xl flex flex-col md:flex-row items-center md:items-end gap-xl">
          <Reveal direction="scale" duration={0.8}>
            <div className="relative">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background spotify-shadow">
                <AvatarImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-djXy4TTbns_Fp1xn1KZefkmBvGFi9H6UbrljVeYce1l0p00MMV9a4ZICbyo7JRz_BTjj_7DnlDNHzTToJK2rqVWdMtWXiDap6LvtLAI8FcFUQXQqkuBphXXmTGMh3Vs_HfuptvF7xFWLKB60--JdmpPn8SwwwW9VgTqwjPX2CiyVdJWzuDZjZIHuQkBXwhPybII2RhrO4C1pDsloHP9Uti8tQxs0vw2EIB-LsTAOWoDi5HekoELE0RxNbV5ZJx7lg20XOwU-te4"
                  alt="Ken Reyes"
                />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary-container w-9 h-9 rounded-full flex items-center justify-center border-4 border-background">
                <Icon name="verified" filled />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="flex-1 text-center md:text-left">
            <div className="flex flex-col gap-sm">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
                Premium Member · Tier II
              </span>
              <h1 className="font-display-lg text-display-lg leading-none">Ken Reyes</h1>
              <p className="font-body-lg text-body-lg text-secondary">
                @kenreyes · Joined March 2024
              </p>
              <div className="flex flex-wrap gap-sm justify-center md:justify-start mt-md">
                <Button asChild>
                  <Link to="/profile/settings">
                    <Icon name="edit" />
                    Edit Profile
                  </Link>
                </Button>
                <Button variant="outline">
                  <Icon name="share" />
                  Share
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <StaggerGroup className="grid grid-cols-3 gap-gutter mb-xl" stagger={0.1}>
        {stats.map((s) => (
          <StaggerItem key={s.label} direction="up">
            <div className="bento-card p-md rounded-xl flex flex-col gap-xs items-start">
              <div className="flex items-center gap-xs text-secondary">
                <Icon name={s.icon} className="text-[18px]" />
                <span className="font-label-md text-label-md">{s.label}</span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface">{s.value}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Membership Card */}
      <Reveal direction="up" duration={0.8}>
        <section className="relative mb-xl rounded-2xl bg-gradient-to-br from-primary-container via-primary to-primary-fixed-dim p-xl text-on-primary overflow-hidden">
          <div className="absolute -right-16 -bottom-16 opacity-20">
            <Icon name="graphic_eq" className="text-[260px]" filled />
          </div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-widest opacity-80">
                SoundRedeem Premium
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-xs">Premium · Tier II</h3>
              <p className="font-body-md text-body-md opacity-80 mt-xs">
                Next billing date · July 14, 2026
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-xs">
              <span className="font-display-lg text-[40px] leading-none">$9.99</span>
              <span className="font-label-md text-label-md uppercase tracking-widest opacity-80">
                / month
              </span>
              <Button variant="outline" className="mt-sm bg-background/20 border-on-primary/40 text-on-primary hover:bg-background/30">
                Manage Plan
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Recent Redemptions */}
      <section className="mb-xl">
        <Reveal>
          <div className="flex justify-between items-center px-xs mb-md">
            <h4 className="font-label-md text-label-md text-on-surface">RECENT REDEMPTIONS</h4>
            <Link
              to="/redeem"
              className="text-primary font-label-md text-label-md hover:underline"
            >
              View All
            </Link>
          </div>
        </Reveal>
        <StaggerGroup className="space-y-sm" stagger={0.08}>
          {recent.map((r) => (
            <StaggerItem key={r.title} direction="left">
              <div className="bento-card p-sm rounded-xl flex items-center gap-md">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-body-lg text-body-lg text-on-surface font-bold truncate">
                    {r.title}
                  </p>
                  <p className="font-label-sm text-label-sm text-secondary truncate">
                    {r.artist} · {r.date}
                  </p>
                </div>
                <button className="text-secondary hover:text-primary transition-colors p-xs">
                  <Icon name="play_circle" filled />
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Badges */}
      <section className="mb-xl">
        <Reveal>
          <h4 className="font-label-md text-label-md text-on-surface px-xs mb-md">
            ACHIEVEMENTS
          </h4>
        </Reveal>
        <StaggerGroup
          className="grid grid-cols-3 md:grid-cols-6 gap-gutter"
          stagger={0.06}
        >
          {badges.map((b) => (
            <StaggerItem key={b.name} direction="up">
              <div
                className={
                  b.earned
                    ? "bento-card p-md rounded-xl flex flex-col items-center text-center gap-xs"
                    : "bento-card p-md rounded-xl flex flex-col items-center text-center gap-xs opacity-40"
                }
              >
                <div
                  className={
                    b.earned
                      ? "w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center"
                      : "w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center"
                  }
                >
                  <Icon
                    name={b.icon}
                    className={b.earned ? "text-primary" : "text-secondary"}
                    filled={b.earned}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface">{b.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Quick actions */}
      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <Link
            to="/profile/settings"
            className="bento-card p-md rounded-xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                <Icon name="settings" className="text-primary" />
              </div>
              <div>
                <p className="font-body-lg text-body-lg font-bold">Profile Settings</p>
                <p className="font-label-sm text-label-sm text-secondary">
                  Account, notifications, audio
                </p>
              </div>
            </div>
            <Icon
              name="chevron_right"
              className="text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all"
            />
          </Link>
          <button className="bento-card p-md rounded-xl flex items-center justify-between group text-left">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-lg bg-error-container/30 flex items-center justify-center">
                <Icon name="logout" className="text-error" />
              </div>
              <div>
                <p className="font-body-lg text-body-lg font-bold">Sign Out</p>
                <p className="font-label-sm text-label-sm text-secondary">
                  End this session
                </p>
              </div>
            </div>
            <Icon
              name="chevron_right"
              className="text-secondary group-hover:text-error group-hover:translate-x-1 transition-all"
            />
          </button>
        </section>
      </Reveal>
    </main>
  );
}
