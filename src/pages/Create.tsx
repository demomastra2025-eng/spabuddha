import { useState } from "react";
import { StepIndicator } from "@/components/create/StepIndicator";
import { StepBranch } from "@/components/create/StepBranch";
import { StepDetails } from "@/components/create/StepDetails";
import { StepDesign } from "@/components/create/StepDesign";
import { StepDelivery } from "@/components/create/StepDelivery";
import { StepPayment } from "@/components/create/StepPayment";

export interface CertificateData {
  // Step 1
  branch: string;
  type: "gift" | "procedure";
  amount: number;
  
  // Step 2
  senderName: string;
  recipientName: string;
  message: string;
  validUntil: Date | undefined;
  phone: string;
  email: string;
  
  // Step 3
  templateId: number;
  backgroundColor: string;
  fontFamily: string;
  
  // Step 4
  deliveryMethod: "email" | "whatsapp" | "download";
  deliveryContact: string;
}

const Create = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [certificateData, setCertificateData] = useState<CertificateData>({
    branch: "",
    type: "gift",
    amount: 5000,
    senderName: "",
    recipientName: "",
    message: "",
    validUntil: undefined,
    phone: "",
    email: "",
    templateId: 1,
    backgroundColor: "#EADFD5",
    fontFamily: "Playfair Display",
    deliveryMethod: "email",
    deliveryContact: "",
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
