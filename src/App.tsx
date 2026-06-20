import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { ScanToRedeem } from "@/pages/ScanToRedeem";
import { RedeemYourEP } from "@/pages/RedeemYourEP";
import { DownloadReady } from "@/pages/DownloadReady";
import { TokenStatus } from "@/pages/TokenStatus";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { Profile } from "@/pages/Profile";
import { ProfileSettings } from "@/pages/ProfileSettings";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { ArtistDashboard } from "@/pages/ArtistDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<AppShell />}>
        <Route path="/scan" element={<ScanToRedeem />} />
        <Route path="/redeem" element={<RedeemYourEP />} />
        <Route path="/download" element={<DownloadReady />} />
        <Route path="/token" element={<TokenStatus />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artist" element={<ArtistDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
