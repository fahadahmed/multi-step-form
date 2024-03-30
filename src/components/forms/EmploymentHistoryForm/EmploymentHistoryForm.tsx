import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "../../stores/useFormStore"
import employmentHistorySchema from "./employmentHistorySchema"
import '../../../App.css';

export default function EmploymentHistoryForm() {
  const { currentStep, stepCompleted } = useFormStore()
  const thisStep = 2;
  const { handleSubmit, formState: { errors }, register, reset } = useForm({
    resolver: zodResolver(employmentHistorySchema)
  });

  if (errors) {
    console.log(errors);
  }

  const onSubmit = (_data: any) => {
    const employmentType = _data.employmentType;
    const hoursEmployed = parseInt(_data.hoursEmployed);

    // This is where the mutation to create a new staff member would go
    console.log(employmentType, hoursEmployed);
    // If successful, move to the next step - condition needs to be applied here.
    // setCurrentStep(thisStep + 1)
  }
  return (
    <div>
      <h3 style={{ color: currentStep !== thisStep ? '#000' : "#87189D" }}>Employment History</h3>
      {stepCompleted !== 'educationalQualifications'
        ? <div>Complete the Personal Details section before editing this section</div>
        : <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'grid' }}>
              <label htmlFor="employmentType">Employment Type</label>
              {errors?.employmentType && <small>{errors?.employmentType?.message as string}</small>}
              <select id="employmentType" disabled={currentStep !== thisStep} {...register('employmentType')}>
                <option value="">Select</option>
                <option value="FULL-TIME">Full Time</option>
                <option value="PART-TIME">Part Time</option>
                <option value="CONTRACT">Contract</option>
              </select>
            </div>
            <div style={{ display: 'grid' }}>
              <label htmlFor="hoursEmployed">Hours employed</label>
              {errors?.hoursEmployed && <small>{errors?.hoursEmployed?.message as string}</small>}
              <input type="number" placeholder="0" id="hoursEmployed" disabled={currentStep !== thisStep} {...register('hoursEmployed')} />
            </div>
          </div>
          <div style={{ display: currentStep !== thisStep ? 'none' : 'flex', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>
            <button type="reset" onClick={() => reset({
              employmentType: '',
              hoursEmployed: ''
            })}>Discard</button>
            <button type="submit">Continue</button>
          </div>
        </form>
      }

    </div>
  )
}