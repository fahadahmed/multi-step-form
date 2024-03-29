import React from "react"
import { useFormStore } from "../stores/useFormStore"
import "./MultiStepForm.css"

type FormConfigType = {
  stepName: string
  progressValue: number
  section: React.FC

}
export type MultiStepFormProps = {
  formConfig: FormConfigType[]
}

export default function MultiStepForm({ formConfig }: Readonly<MultiStepFormProps>) {
  const { currentStep, setCurrentStep } = useFormStore()

  return (
    <div className="form-container">
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
      <div className="sidebar">
        <h3>On this page</h3>
        <ul>
          {formConfig.map((stepData, index) => (
            <li key={index} style={{ marginBottom: '1rem' }} onClick={() => setCurrentStep(index)}>
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