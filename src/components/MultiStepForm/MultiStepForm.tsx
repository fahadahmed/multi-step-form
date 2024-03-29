import React from "react"
import { useFormStore } from "../stores/useFormStore"

type FormConfigType = {
  stepName: string
  progressValue: number
  section: React.FC

}
export type MultiStepFormProps = {
  formConfig: FormConfigType[]
}

// 1. Get the formConfig data as props from the parent component
//         2. Create a state variable to store the current step
//         3. Create a function to handle the next step
//         4. Create a function to handle the previous step
//         5. Create a function to handle the form submission
//         6. Render the form steps based on the current step
//         7. Add a button to navigate to the next step
//         8. Add a button to navigate to the previous step
//         9. Add a button to submit the form
export default function MultiStepForm({ formConfig }: Readonly<MultiStepFormProps>) {
  const { currentStep, setCurrentStep } = useFormStore()

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', width: '100%', height: '100%', gap: '2rem' }}>
      <div>
        {formConfig.map((stepData, index) => {
          return (
            <div
              key={index}
              style={{
                background: currentStep === index ? '#e6e6e6' : '#FFFFFF',
                padding: '2rem'
              }}
            >
              <stepData.section />
            </div>
          )
        })}
      </div>
      <div style={{ background: "#efefef", padding: '2rem' }}>
        <h3>On this page</h3>
        <ul>
          {formConfig.map((stepData, index) => (
            <li key={index} style={{ marginBottom: '1rem' }} onClick={() => setCurrentStep(index)}>
              {/* <button onClick={() => setStep(index)}></button> */}
              {currentStep === index ? <strong>{stepData.stepName}</strong> : stepData.stepName}
            </li>
          ))}
        </ul>
        <h3>Progress</h3>
        <progress value={formConfig[currentStep].progressValue} max="100"></progress>
      </div>
    </div>
  )
}