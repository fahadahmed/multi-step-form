import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "../../stores/useFormStore"
import personalDetailsSchema from "./personalDetailsSchema"
import '../../../App.css';

export default function PersonalDetailsForm() {
  const { currentStep, setCurrentStep } = useFormStore()
  const thisStep = 0;
  const { handleSubmit, formState: { errors }, register } = useForm({
    resolver: zodResolver(personalDetailsSchema)
  });

  const onSubmit = (_data: any) => {
    const firstName = _data.firstName;
    const lastName = _data.lastName;
    const gender = _data.gender;
    const staffType = _data.staffType;
    const vitNumber = _data.vitNumber;

    // This is where the mutation to create a new staff member would go
    console.log(firstName, lastName, gender, staffType, vitNumber);
    // If successful, move to the next step - condition needs to be applied here.
    setCurrentStep(thisStep + 1)
  }

  if (errors) {
    console.log(errors);
  }

  return (
    <div>
      <h3 style={{ color: currentStep !== thisStep ? '#000' : "#87189D" }}>Personal Details</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'grid' }}>
            <label htmlFor="firstName">First Name</label>
            {errors?.firstName && <small>{errors?.firstName?.message as string}</small>}
            <input
              type="text"
              placeholder=""
              id="firstName"
              {...register('firstName')}
              disabled={currentStep !== thisStep}
              className="input-field"
            />
          </div>
          <div style={{ display: 'grid' }}>
            <label htmlFor="lastName">Last Name</label>
            {errors?.lastName && <small>{errors?.lastName?.message as string}</small>}
            <input type="text" placeholder="" id="lastName" {...register('lastName')} disabled={currentStep !== thisStep} className="input-field" />
          </div>
          <div style={{ display: 'grid' }}>
            <label htmlFor="gender">Gender</label>
            {errors?.gender && <small>{errors?.gender?.message as string}</small>}
            <select id="gender" {...register('gender')} disabled={currentStep !== thisStep}>
              <option value="">Select</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>

          </div>
          <div style={{ display: 'grid' }}>
            <label htmlFor="staffType">Role</label>
            {errors?.staffType && <small>{errors?.staffType?.message as string}</small>}
            <select id="staffType" {...register('staffType')} disabled={currentStep !== thisStep}>
              <option value="">Select</option>
              <option value="TEACHER">Teacher</option>
              <option value="EDUCATOR">Educator</option>
            </select>

          </div>
          <div style={{ display: 'grid' }}>
            <label htmlFor="vitNumber">VIT number</label>
            {errors?.vitNumber && <small>{errors?.vitNumber?.message as string}</small>}
            <input type="text" placeholder="" id="vitNumber" {...register('vitNumber')} disabled={currentStep !== thisStep} className="input-field" />
          </div>
        </div>
        <div style={{ display: currentStep !== thisStep ? 'none' : 'flex', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>
          <button type="reset">Discard</button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  )
}