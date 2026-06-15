import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-lg py-md bg-background/70 backdrop-blur-xl">
      <Link to="/scan" className="flex items-center gap-sm hover:opacity-90 transition-opacity">
        <Icon name="graphic_eq" className="text-primary text-headline-md" filled />
        <span className="font-headline-md text-headline-md font-black text-primary tracking-tighter">
          SoundRedeem
        </span>
      </Link>
      <div className="flex items-center gap-md">
        <button className="text-on-surface hover:opacity-80 transition-opacity" aria-label="Info">
          <Icon name="info" />
        </button>
        <Link
          to="/profile"
          aria-label="Open profile"
          className="w-9 h-9 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high hover:ring-2 hover:ring-primary/40 transition-all"
        >
          <img
            alt="User"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-djXy4TTbns_Fp1xn1KZefkmBvGFi9H6UbrljVeYce1l0p00MMV9a4ZICbyo7JRz_BTjj_7DnlDNHzTToJK2rqVWdMtWXiDap6LvtLAI8FcFUQXQqkuBphXXmTGMh3Vs_HfuptvF7xFWLKB60--JdmpPn8SwwwW9VgTqwjPX2CiyVdJWzuDZjZIHuQkBXwhPybII2RhrO4C1pDsloHP9Uti8tQxs0vw2EIB-LsTAOWoDi5HekoELE0RxNbV5ZJx7lg20XOwU-te4"
          />
        </Link>
      </div>
    </header>
  );
}
