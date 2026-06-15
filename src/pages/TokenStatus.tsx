import { Icon } from "@/components/Icon";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

const recommended = [
  {
    title: "Cyber Synth",
    artist: "Digital Drift",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCal__rmJC6rH62tAtPXBhHWj0BqHK5N77copHmQO2GPo3Z9ZsucqeKO3t6QjkMzeRA2lm6x9wrdHXN643adSUSRiHA22mxrlAqQ3IOJn-gDzQGzXbQWQ0QssD255XkJ7M6ImwW-1dnZdBHatsHn5n5No4O6f2IvJULdBp8uS6x3sDESSGijebKVKueF100dM5i09YxyNOAjFWmyXYGe4XGaJ7UdvNY1E0A_h0UPKHnOeNLWjP_lcvU9TsrAFyQ8rIT4SJfKyjFnac",
  },
  {
    title: "Liquid Rhythms",
    artist: "Flow State",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt_-sTtFeR6r6xH5xRemZpReuuMF39oyTtWil36RNL_NZRQqUvglDVqGuapXyb-DY5aUMcrjlC4ex3jEeQ0kxmkzaWUBpZ7ZByDODh9-4WEgKd29po8VJeQPciQZ8xMyCHrvoUz1_3wq4ozBvxSo_Hr9UhS5KG7_T8PCRIPLtpXDU05kHRYeYuP2tD3xYzLD8trQz2obauulg1zELcYeTHvqxCWTkToOHX7pexR5I8DiPLzB3jNQ_UPHCyZ0UlLyhHBvBfsQY0oIQ",
  },
  {
    title: "Subterranean",
    artist: "Bass Theory",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAPhAU3ufy4jmWhXubAFevI9zzzJNKCd7vfd337ycgUkpbfBRQPeIEHsM2v_bJmXJ9xKPRTOt3q3BP7DWlZpgUV4K-hcm0cGW8Nf7iL7QEdGp1nnbda3pmKtseCvJ2553DZpWkTvFFbacAsu1QrJNjv4mLDlgZcuR1ygt54OQ6tAd_nvssG7JqUAGHSh15UWclCvsvi5fQV2Vn2G8oWtb1WRPFzLuSITC7K3DCZpk9nkezWvQXzDnkpB4SZlgJIgtXNmrJ9Yd-qFU",
  },
  {
    title: "After Hours",
    artist: "The Collective",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA73c2TfvADgzSKAWq1xfkw_EZMsD1o3TDwuTkCA2Pb3hE5OG4nt_w0bo-i6ExYBbl8eut7d5fqGv6hkn_Xl_pT2aiJSSM-LPH9BvWojFXUMPv7tyAGitvvVnmXNT72yVq5UjCyWCK_fkDlsX89Cc1Ds8K-p3FuGhPMEwq2-iNEhIUskUhqnbxwiBjjgHsb544Htkuk_uRs2319lXXwSRNFRowUCPnq7bo6rohbleGEDD1BlmxvbHjcxMzOtnXUWfPAGBvIjCSTpHc",
  },
  {
    title: "Midnight Mix",
    artist: "Main Stage",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg-8NCXLlzR4irK3de5--mQrP8oW5zY3cn3bYqGXm5sHHWH7BVhlfrILYaThB-Wt_ouP8pznfSK8qhWZFO_-1m4-9eCBuXcRMMZ1NYXs9du0SfE10Jvr48k9bilSeVcjiw7u4P5u_sq-mbHVuWT4EMgu2dzbupzYkf-7MUNfbU_ww8aR4cOUG01MXkZyR5l8EjvGp_mIiHxEwKWzyyRWNDO1L3zTzW5rH7m6gEjhySg2FKC822C8JfdHj2eAdeqxppCHU8PSAJ-q8",
  },
];

export function TokenStatus() {
  return (
    <>
      <main className="flex flex-col items-center justify-center px-container-margin pt-32 pb-xl">
        <div className="max-w-md w-full text-center space-y-xl">
          <Reveal direction="scale" duration={0.85}>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-surface-container-low w-48 h-48 rounded-xl flex flex-col items-center justify-center border border-outline-variant token-card-glow mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <Icon name="lock" className="text-secondary text-7xl mb-4" filled />
                <div className="px-md py-xs bg-surface-container-highest rounded-full border border-outline-variant">
                  <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                    ID: TX-9921-A
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-sm">
              <h1 className="font-headline-lg text-headline-lg text-on-background">
                Download Already Redeemed
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-sm mx-auto">
                This token has already been claimed by another user or is no longer available for
                download.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-md pt-lg">
              <button className="bg-primary-container text-on-primary-container font-headline-md text-headline-md py-md px-xl rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-200">
                Check New Releases
              </button>
              <button className="border border-outline text-on-surface font-headline-md text-headline-md py-md px-xl rounded-full font-bold hover:bg-surface-container-high active:scale-95 transition-all duration-200">
                Support
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="pt-xl">
              <a
                href="#"
                className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center justify-center gap-xs"
              >
                View Redemption History <Icon name="arrow_forward" className="text-sm" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <section className="w-full bg-surface-container-lowest px-container-margin py-xl border-t border-outline-variant/10 mb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-headline-md text-headline-md mb-lg">Recommended for You</h2>
          </Reveal>
          <StaggerGroup
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-gutter"
            stagger={0.08}
          >
            {recommended.map((r) => (
              <StaggerItem key={r.title} direction="up">
                <div className="group bg-surface-container-low p-md rounded-xl hover:bg-surface-container-high transition-all cursor-pointer">
                  <div className="aspect-square w-full rounded-lg bg-surface-container-highest mb-md overflow-hidden relative">
                    <img
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={r.img}
                    />
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center shadow-xl">
                        <Icon name="play_arrow" className="text-on-primary-container" filled />
                      </div>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md font-bold truncate">{r.title}</p>
                  <p className="font-label-sm text-label-sm text-secondary truncate">{r.artist}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
