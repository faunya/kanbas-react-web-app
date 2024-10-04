import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}