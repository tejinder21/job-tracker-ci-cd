"use client";

import { useState } from "react";
import type { JobApplication } from "../types/jobs";

type JobListProps = {
  jobs: JobApplication[];
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    company: string,
    position: string,
    status: JobApplication["status"]
  ) => void;
};

export default function JobList({
  jobs,
  onDelete,
  onUpdate,
}: JobListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCompany, setEditCompany] = useState("");
  const [editPosition, setEditPosition] = useState("");
  const [editStatus, setEditStatus] =
    useState<JobApplication["status"]>("applied");

  const startEditing = (job: JobApplication) => {
    setEditingId(job.id);
    setEditCompany(job.company);
    setEditPosition(job.position);
    setEditStatus(job.status);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditCompany("");
    setEditPosition("");
    setEditStatus("applied");
  };

  const saveEdit = (id: string) => {
    onUpdate(id, editCompany, editPosition, editStatus);
    cancelEditing();
  };

  const getStatusClass = (
    status: JobApplication["status"]
  ) => {
    switch (status) {
      case "applied":
        return "status-applied";

      case "interview":
        return "status-interview";

      case "offer":
        return "status-offer";

      case "rejected":
        return "status-rejected";

      default:
        return "";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        Applications
      </h2>

      {jobs.map((job) => {
        const isEditing = editingId === job.id;

        return (
          <div key={job.id} className="job-card">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editCompany}
                  onChange={(e) =>
                    setEditCompany(e.target.value)
                  }
                  placeholder="Company"
                />

                <input
                  type="text"
                  value={editPosition}
                  onChange={(e) =>
                    setEditPosition(e.target.value)
                  }
                  placeholder="Position"
                />

                <select
                  value={editStatus}
                  onChange={(e) =>
                    setEditStatus(
                      e.target.value as JobApplication["status"]
                    )
                  }
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>

                <p>Notes: {job.notes}</p>

                <p>
                  Created:{" "}
                  {new Date(
                    job.createdAt
                  ).toLocaleDateString("fi-FI")}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => saveEdit(job.id)}
                  >
                    Save
                  </button>

                  <button onClick={cancelEditing}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold">
                  {job.company}
                </h3>

                <p>{job.position}</p>
                <p>
                  Status:{" "}
                  <span className={getStatusClass(job.status)}>
                    {job.status}
                  </span>
                </p>
                <p>Notes: {job.notes}</p>

                <p>
                  Created:{" "}
                  {new Date(
                    job.createdAt
                  ).toLocaleDateString("fi-FI")}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() =>
                      startEditing(job)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(job.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}