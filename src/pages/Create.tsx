import { useState } from "react";
import { StepIndicator } from "@/components/create/StepIndicator";
import { StepBranch } from "@/components/create/StepBranch";
import { StepDetails } from "@/components/create/StepDetails";
import { StepDesign } from "@/components/create/StepDesign";
import { StepDelivery } from "@/components/create/StepDelivery";
import { StepPayment } from "@/components/create/StepPayment";
import { addMonths } from "date-fns";
import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [certificateData, setCertificateData] = useState<CertificateData>(() => {
    const purchaseDate = new Date();
    const defaultValidityDate = addMonths(purchaseDate, DEFAULT_VALIDITY_MONTHS);
    return {
      branch: "",
      type: "gift",
      amount: 50000,
      selectedServices: [],
      purchaseDate,
      senderName: "",
      recipientName: "",
      message: "",
      validUntil: defaultValidityDate,
      phone: "",
      email: "",
      templateId: null,
      templateBackgroundUrl: null,
      templateFontFamily: null,
      templateTextColor: null,
      templateName: null,
      deliveryMethod: "email",
      deliveryContact: "",
    };
  });

  const updateData = (data: Partial<CertificateData>) => {
    setCertificateData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepBranch data={certificateData} updateData={updateData} onNext={nextStep} />;
      case 2:
        return <StepDetails data={certificateData} updateData={updateData} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <StepDesign data={certificateData} updateData={updateData} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <StepDelivery data={certificateData} updateData={updateData} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <StepPayment data={certificateData} onPrev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <StepIndicator currentStep={currentStep} totalSteps={5} />
        <div className="mt-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Create;
