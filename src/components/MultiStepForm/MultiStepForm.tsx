import React, { useState } from "react"
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
  const [step, setStep] = useState(0)
  const { setCurrentStep } = useFormStore()

  const handleFormBtnClick = (action: string) => {
    if (action === "next") {
      if (step < formConfig.length - 1) {
        setStep(step + 1)
        setCurrentStep(step + 1)
      }
    } else if (action === "previous") {
      if (step > 0) {
        setStep(step - 1)
        setCurrentStep(step - 1)
      }
    }
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', width: '100%', height: '100%', gap: '2rem' }}>
      <div>
        {formConfig.map((stepData, index) => {
          return (
            <>
              <div key={index} style={{ display: 'grid', background: step === index ? '#e6e6e6' : '#FFFFFF', padding: '2rem', gridTemplateRows: '11fr 1fr', gridTemplateColumns: '1fr' }}>
                <div>
                  <stepData.section />
                  <div style={{ display: step === index ? 'flex' : 'none', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={() => handleFormBtnClick("previous")}>Previous</button>
                    <button onClick={() => handleFormBtnClick("next")}>Next</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div style={{ background: "#efefef", padding: '2rem' }}>
        <h3>On this page</h3>
        <ul>
          {formConfig.map((stepData, index) => (
            <li key={index} style={{ marginBottom: '1rem' }} onClick={() => setStep(index)}>
              {/* <button onClick={() => setStep(index)}></button> */}
              {step === index ? <strong>{stepData.stepName}</strong> : stepData.stepName}
            </li>
          ))}
        </ul>
        <h3>Progress</h3>
        <progress value={formConfig[step].progressValue} max="100"></progress>
      </div>
    </div>
  )
}