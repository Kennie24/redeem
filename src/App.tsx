import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { ScanToRedeem } from "@/pages/ScanToRedeem";
import { RedeemYourEP } from "@/pages/RedeemYourEP";
import { DownloadReady } from "@/pages/DownloadReady";
import { TokenStatus } from "@/pages/TokenStatus";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { Profile } from "@/pages/Profile";
import { ProfileSettings } from "@/pages/ProfileSettings";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/scan" replace />} />
        <Route path="/scan" element={<ScanToRedeem />} />
        <Route path="/redeem" element={<RedeemYourEP />} />
        <Route path="/download" element={<DownloadReady />} />
        <Route path="/token" element={<TokenStatus />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
        <Route path="*" element={<Navigate to="/scan" replace />} />
      </Route>
    </Routes>
  );
}
