import React, { useState } from 'react';
import SummaryStep from './SummaryStep';
import GithubStep from './GithubStep';
import JiraStep from './JiraStep';
import WelcomeStep from './WelcomeStep';
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  Box,
  StepTitle,
  StepDescription,
  StepIcon,
  StepNumber,
  StepSeparator,
  useSteps,
} from '@chakra-ui/react';

const steps = [
  { title: 'Welcome' },
  { title: 'Jira setup' },
  { title: 'Github setup', description: '(optional)' },
  { title: 'Summary' },
];

const Wizard = () => {
  const [step, setStep] = useState(2);
  const [jiraAccessToken, setJiraAccessToken] = useState('');
  const [githubAccessToken, setGithubAccessToken] = useState('');
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

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
      {step === 0 && (
        <div
          in={step === 1}
          timeout={300}
          classNames="wizard-transition"
          unmountOnExit>
          <WelcomeStep onNextClick={nextStep} />
        </div>
      )}

      {step === 1 && (
        <div classNames="wizard-transition">
          <JiraStep
            onNextClick={handleJiraScreenNextClick}
            prevStep={prevStep}
          />
        </div>
      )}

      {step === 2 && (
        <div classNames="wizard-transition">
          <GithubStep onNextClick={handleGithubScreenNextClick} />
        </div>
      )}

      {step === 3 && (
        <div classNames="wizard-transition">
          <SummaryStep />
        </div>
      )}

      <Stepper index={step} style={{ color: 'black', marginTop: '16px' }}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Wizard;
