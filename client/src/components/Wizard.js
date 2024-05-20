import React, { useState } from 'react';
import SummaryStep from './SummaryStep';
import GithubStep from './GithubStep';
import JiraStep from './JiraStep';
import WelcomeStep from './WelcomeStep';
// import './Wizard.css'; // Your CSS for transitions

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [jiraAccessToken, setJiraAccessToken] = useState('');
  const [githubAccessToken, setGithubAccessToken] = useState('');

  const nextStep = (payload) => {
    setStep(step + 1);
  };

  const handleJiraScreenNextClick = (accessToken) => {
    setJiraAccessToken(accessToken);
    setStep(step + 1);
  };

  const handleGithubScreenNextClick = (accessToken) => {
    setGithubAccessToken(accessToken);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="wizard">
      {step === 1 && (
        <div
          in={step === 1}
          timeout={300}
          classNames="wizard-transition"
          unmountOnExit>
          <WelcomeStep onNextClick={nextStep} />
        </div>
      )}

      {step === 2 && (
        <div classNames="wizard-transition">
          <JiraStep
            onNextClick={handleJiraScreenNextClick}
            prevStep={prevStep}
          />
        </div>
      )}

      {step === 3 && (
        <div classNames="wizard-transition">
          <GithubStep onNextClick={handleGithubScreenNextClick} />
        </div>
      )}

      {step === 4 && (
        <div classNames="wizard-transition">
          <SummaryStep />
        </div>
      )}
    </div>
  );
};

export default Wizard;
