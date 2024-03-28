import { MultiStepForm } from "./components"
import { EducationalQualificationForm, EmploymentHistoryForm, PersonalDetailsForm } from "./components/forms"

// create the formConfig data
const formConfig = [
  {
    stepName: 'Personal Details',
    progressValue: 0,
    section: PersonalDetailsForm
  },
  {
    stepName: 'Education Qualifications',
    progressValue: 50,
    section: EducationalQualificationForm
  },
  {
    stepName: 'Employment Details',
    progressValue: 80,
    section: EmploymentHistoryForm
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
