"use client";

import { useEffect, useState } from "react";
import JobForm from "@/components/JobForm";
import JobList from "@/components/JobList";
import type { JobApplication } from "@/types/jobs";

const STORAGE_KEY = "job-tracker-jobs";

const defaultJobs: JobApplication[] = [
  {
    id: "1",
    company: "Google",
    position: "Frontend Developer",
    status: "applied",
    notes: "Applied through LinkedIn",
    createdAt: "2026-04-05",
  },
  {
    id: "2",
    company: "Microsoft",
    position: "Software Engineer",
    status: "interview",
    notes: "First interview scheduled",
    createdAt: "2026-04-04",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState<JobApplication[]>(defaultJobs);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedJobs = localStorage.getItem(STORAGE_KEY);

    const timeout = window.setTimeout(() => {
      if (savedJobs) {
        setJobs(JSON.parse(savedJobs) as JobApplication[]);
      }
      setIsLoaded(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs, isLoaded]);

  const handleDelete = (id: string) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const handleUpdate = (
    id: string,
    updatedCompany: string,
    updatedPosition: string,
    updatedStatus: JobApplication["status"]
  ) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              company: updatedCompany,
              position: updatedPosition,
              status: updatedStatus,
            }
          : job
      )
    );
  };

  const addJob = (company: string, position: string) => {
    const newJob: JobApplication = {
      id: crypto.randomUUID(),
      company,
      position,
      status: "applied",
      notes: "",
      createdAt: new Date().toISOString(),
    };

    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Tracker</h1>

      <JobForm onAdd={addJob} />

      <input
        type="text"
        placeholder="Search by company or position"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <JobList
        jobs={filteredJobs}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </main>
  );
}