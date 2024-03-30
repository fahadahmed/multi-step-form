import { z } from 'zod';

const educationalQualificationSchema = z.object({
  qualificationType: z.enum(['MASTERS', 'BACHELORS', 'HIGH-SCHOOL'], {
    errorMap: () => ({ message: 'Qualification type field cannot be blank' }),
  }),
  courseName: z
    .string()
    .min(2, { message: 'Course name must be at least 2 characters long' })
    .max(50, { message: 'Course name must be at most 50 characters long' }),
});

export default educationalQualificationSchema;
