import { z } from 'zod';

const employmentHistorySchema = z.object({
  employmentType: z.enum(['FULL-TIME', 'PART-TIME', 'CONTRACT'], {
    errorMap: () => ({ message: 'Employment type field cannot be blank' }),
  }),
  hoursEmployed: z.coerce
    .number()
    .int()
    .max(2890, { message: 'Hours employed must be at most 2890' })
    .positive({ message: 'Hours employed must be a positive integer' }),
});

export default employmentHistorySchema;
