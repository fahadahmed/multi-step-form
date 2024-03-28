import { useState } from "react"

type FormConfigType = {
  stepName: string
  // fields: any[]

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

  const handleFormBtnClick = (action: string) => {
    if (action === "next") {
      if (step < formConfig.length - 1) {
        setStep(step + 1)
      }
    } else if (action === "previous") {
      if (step > 0) {
        setStep(step - 1)
      }
    }
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', width: '100%', height: '100%' }}>
      <div>
        {formConfig.map((stepData, index) => {
          return (
            <>
              <div key={index} style={{ display: 'grid', background: '#e6e6e6', padding: '2rem', gridTemplateRows: '11fr 1fr', gridTemplateColumns: '1fr' }}>
                <div>
                  <h2>{stepData.stepName}</h2>
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
        <h3>Form Data</h3>
        <p>Current Step: {formConfig[step].stepName}</p>
      </div>
    </div>
  )
}