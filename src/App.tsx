import { MultiStepForm } from "./components"

// create the formConfig data
const formConfig = [
  {
    stepName: 'Personal Details',
    progressValue: 0,
    fields: []
  },
  {
    stepName: 'Education Qualifications',
    progressValue: 50,
    fields: []
  },
  {
    stepName: 'Employment Details',
    progressValue: 80,
    fields: []
  }
]
function App() {

  return (
    <>
      <MultiStepForm formConfig={formConfig} />
    </>
  )
}

export default App
