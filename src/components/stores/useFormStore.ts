import { create } from 'zustand';

type FormState = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const useFormStore = create<FormState>((set) => ({
  currentStep: 0,
  setCurrentStep: (step: number) => set({ currentStep: step }),
}));
