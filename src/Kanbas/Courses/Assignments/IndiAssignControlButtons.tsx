import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteConfirm from "./AssignmentDeleteConfirm";

export default function IndiAssignControlButtons(
    { assignmentId, deleteAssignment }:
        {
            assignmentId: string;
            deleteAssignment: (aId: string) => void;
        }
) {
    console.log(assignmentId);
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-confirm-delete-dialog" />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

            <AssignmentDeleteConfirm dialogTitle="Delete Assignment" assignmentId={assignmentId} deleteAssignment={() =>deleteAssignment(assignmentId)} />
        </div>
    );
}
