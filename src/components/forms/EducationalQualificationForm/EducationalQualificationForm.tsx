import { useFormStore } from "../../stores/useFormStore"
export default function EducationalQualificationForm() {
  const { currentStep } = useFormStore()
  const thisStep = 1;
  return (
    <div>
      <h3>Educational Qualifications</h3>
      <div>This is where we show the form</div>
      {currentStep === thisStep ? (
        <div>We show the form fields here</div>
      ) : <div>Form fields are hidden</div>}
    </div>
  )
}