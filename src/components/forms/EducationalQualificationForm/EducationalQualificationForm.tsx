import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "../../stores/useFormStore"
import educationalQualificationSchema from "./educationalQualificationSchema"
import '../../../App.css';

export default function EducationalQualificationForm() {
  const { currentStep, setCurrentStep } = useFormStore()
  const thisStep = 1;
  const { handleSubmit, formState: { errors }, register } = useForm({
    resolver: zodResolver(educationalQualificationSchema)
  });

  if (errors) {
    console.log(errors);
  }
  const onSubmit = (_data: any) => {
    const qualificationType = _data.qualificationType;
    const courseName = _data.courseName;

    // This is where the mutation to create a new staff member would go
    console.log(qualificationType, courseName);
    // If successful, move to the next step - condition needs to be applied here.
    setCurrentStep(thisStep + 1)
  }
  return (
    <div>
      <h3 style={{ color: currentStep !== thisStep ? '#000' : "#87189D" }}>Educational Qualifications</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'grid' }}>
          <label htmlFor="qualificationType">Qualification Type</label>
          {errors?.qualificationType && <small>{errors?.qualificationType?.message as string}</small>}
          <select id="qualificationType" disabled={currentStep !== thisStep} {...register('qualificationType')}>
            <option value="">Select</option>
            <option value="MASTERS">Masters Degree</option>
            <option value="BACHELORS">Bachelors Degree</option>
            <option value="HIGH-SCHOOL">High School</option>
          </select>
        </div>
        <div style={{ display: 'grid' }}>
          <label htmlFor="courseName">Course Name</label>
          {errors?.courseName && <small>{errors?.courseName?.message as string}</small>}
          <input type="text" placeholder="" id="courseName" disabled={currentStep !== thisStep} {...register('courseName')} />
        </div>
        <div style={{ display: currentStep !== thisStep ? 'none' : 'flex', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>
          <button type="reset">Discard</button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}