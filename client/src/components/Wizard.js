import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
// import './Wizard.css'; // Your CSS for transitions

const Wizard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="wizard">
      <CSSTransition
        in={step === 1}
        timeout={300}
        classNames="wizard-transition"
        unmountOnExit>
        <Step1 nextStep={nextStep} />
      </CSSTransition>

      <CSSTransition
        in={step === 2}
        timeout={300}
        classNames="wizard-transition"
        unmountOnExit>
        <Step2 nextStep={nextStep} prevStep={prevStep} />
      </CSSTransition>

      <CSSTransition
        in={step === 3}
        timeout={300}
        classNames="wizard-transition"
        unmountOnExit>
        <Step3 prevStep={prevStep} />
      </CSSTransition>
    </div>
  );
};

export default Wizard;
