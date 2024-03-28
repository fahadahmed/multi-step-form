import { useFormStore } from "../../stores/useFormStore"
export default function EmploymentHistoryForm() {
  const { currentStep } = useFormStore()
  const thisStep = 2;
  return (
    <div>
      <h3>Employment History</h3>
      <div>This is where we show the form</div>
      {currentStep === thisStep ? (
        <div>We show the form fields here</div>
      ) : <div>Form fields are hidden</div>}
    </div>
  )
}