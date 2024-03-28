import { MultiStepForm } from "./components"

// create the formConfig data
const formConfig = [
  {
    stepName: 'Personal Details',
    fields: []
  },
  {
    stepName: 'Education Qualifications',
    fields: []
  },
  {
    stepName: 'Employment Details',
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
