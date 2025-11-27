import { useEffect, useMemo, useState } from "react";
import { addMonths } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StepIndicator } from "@/components/create/StepIndicator";
import { StepBranch } from "@/components/create/StepBranch";
import { StepDetails } from "@/components/create/StepDetails";
import { StepDesign } from "@/components/create/StepDesign";
import { StepDelivery } from "@/components/create/StepDelivery";
import { StepPayment } from "@/components/create/StepPayment";
import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";
import { type CompanyOption } from "@/hooks/useCompanies";

interface CertificateAdminWizardProps {
  companies: CompanyOption[];
  onCreated: () => void;
}

const adminSteps = ["Филиал", "Данные", "Дизайн", "Доставка", "Создание"];

const buildInitialData = (branchId?: string): CertificateData => {
  const purchaseDate = new Date();
  const defaultValidityDate = addMonths(purchaseDate, DEFAULT_VALIDITY_MONTHS);
  return {
    branch: branchId ?? "",
    type: "gift",
    amount: 0,
    selectedServices: [],
    selectedGood: null,
    purchaseDate,
    senderName: "",
    recipientName: "",
    message: "",
    validUntil: defaultValidityDate,
    phone: "",
    email: "",
    templateId: null,
    templateBackgroundUrl: null,
    templateTextColor: null,
    templateName: null,
    deliveryMethod: "email",
    deliveryContact: "",
  };
};

export function CertificateAdminWizard({ companies, onCreated }: CertificateAdminWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [certificateData, setCertificateData] = useState<CertificateData>(() =>
    buildInitialData(companies[0]?.id),
  );

  const availableCompanies = useMemo(() => companies, [companies]);

  useEffect(() => {
    if (certificateData.branch || availableCompanies.length === 0) return;
    setCertificateData((prev) => ({ ...prev, branch: availableCompanies[0].id }));
  }, [availableCompanies, certificateData.branch]);

  const updateData = (data: Partial<CertificateData>) => {
    setCertificateData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, adminSteps.length));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFlow = () => {
    setCertificateData(buildInitialData(availableCompanies[0]?.id));
    setCurrentStep(1);
  };

  const handleCreated = () => {
    onCreated();
    resetFlow();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepBranch
            data={certificateData}
            updateData={updateData}
            onNext={nextStep}
            companiesOverride={availableCompanies}
          />
        );
      case 2:
        return (
          <StepDetails
            data={certificateData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <StepDesign
            data={certificateData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <StepDelivery
            data={certificateData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return <StepPayment data={certificateData} onPrev={prevStep} mode="admin" onCreated={handleCreated} />;
      default:
        return null;
    }
  };

  return (
    <Card className="border border-border/60 shadow-sm">
      <CardHeader className="space-y-2">
        <CardTitle>Создание сертификата (админ)</CardTitle>
        <CardDescription>
          Проходите тот же сценарий, что видит клиент на сайте. Оплата пропускается — сертификат создаётся сразу.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <StepIndicator currentStep={currentStep} totalSteps={adminSteps.length} steps={adminSteps} />
        <div>{renderStep()}</div>
      </CardContent>
    </Card>
  );
}
