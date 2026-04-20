export type JobStatus =
  | "saved"
  | "applied"
  | "interview"
  | "offer"
  | "rejected";

export type JobApplication = {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  notes: string;
  createdAt: string;
};
