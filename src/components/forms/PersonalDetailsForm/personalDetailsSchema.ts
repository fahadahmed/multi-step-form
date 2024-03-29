import { z } from 'zod';
import { GENDER, STAFF_TYPE } from '../../../types/staff';

const personalDetailsSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(50, { message: 'First name must be at most 50 characters long' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .max(50, { message: 'Last name must be at most 50 characters' }),
  gender: z.enum(GENDER, {
    errorMap: () => ({ message: 'Gender field cannot be blank' }),
  }),
  staffType: z.enum(STAFF_TYPE, {
    errorMap: () => ({ message: 'Role field cannot be blank' }),
  }),
  vitNumber: z
    .string()
    .min(6, { message: 'VIT number must be at least 6 characters long' })
    .max(6, { message: 'VIT number must be at most 6 characters long' }),
});

export default personalDetailsSchema;
