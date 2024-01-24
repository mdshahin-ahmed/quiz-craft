import { Step, Stepper } from "@material-tailwind/react";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ReactNode } from "react";

type TStepperProps = {
  steps: {
    name: string;
    value: number;
    component: ReactNode;
  }[];
};

export function DefaultStepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);

  const dispatch = useAppDispatch();

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {/* <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(0))}
          className="px-8 w-fit"
        >
          Quiz list
        </Step>
        <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(1))}
          className="px-8 w-fit"
        >
          Add Quiz
        </Step> */}
        {steps.map((step) => (
          <Step
            placeholder={""}
            onClick={() => dispatch(setActiveStepper(step.value))}
            className="px-8 w-fit"
          >
            {step.name}
          </Step>
        ))}
      </Stepper>
      <div>{steps[activeStep].component}</div>
    </div>
  );
}
