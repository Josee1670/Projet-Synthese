export interface RequeteStage {
  id: String,
  title: String,
  description: String
  enterprise: String,
  startDate: Date,
  endDate: Date,
  program: String,
  requirements: String,
  stageType: String,
  hoursPerWeek: Number,
  additionalInfo: String,
  paid: String[];
  skills: String[];
  published: Boolean,
  updatedAt: Date,
  active: Boolean, 
}
