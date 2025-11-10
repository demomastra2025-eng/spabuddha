import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentResult from "./pages/PaymentResult";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import CertificateOffer from "./pages/CertificateOffer";
import SpaOffer from "./pages/SpaOffer";
import SpaRules from "./pages/SpaRules";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const AdminRoute = ({ children }: { children: React.ReactElement }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin" />
          Проверяем доступ...
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/create" element={<Layout><Create /></Layout>} />
          <Route path="/offer-certificate" element={<Layout><CertificateOffer /></Layout>} />
          <Route path="/spa-offer" element={<Layout><SpaOffer /></Layout>} />
          <Route path="/spa-rules" element={<Layout><SpaRules /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/payment/result" element={<Layout><PaymentResult /></Layout>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
