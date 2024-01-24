import { Step, Stepper } from "@material-tailwind/react";
import React from "react";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        <Step
          placeholder={""}
          onClick={() => setActiveStep(0)}
          className="px-8 w-fit"
        >
          Quiz list
        </Step>
        <Step
          placeholder={""}
          onClick={() => setActiveStep(1)}
          className="px-8 w-fit"
        >
          Add Quiz
        </Step>
      </Stepper>
    </div>
  );
}
