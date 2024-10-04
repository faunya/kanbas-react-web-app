export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div id="wd-css-responsive-forms-2">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="wd-name" className="col-form-label">
                            Assignment Name </label>
                        <div>
                            <input id="wd-name" type="input" className="form-control" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div>
                            <textarea className="form-control" rows={10} id="wd-description">
                                The assignment is available online Submit a link to the landing page of
                            </textarea>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-points"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Points </label>

                        <div className="col-sm-5">
                            <input type="text" className="form-control"
                                id="wd-points" value={100} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assignment Group </label>
                        <div className="col-sm-5">
                            <select id="wd-group" className="form-control">
                                <option selected>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-display-grade-as"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Display Grade as
                        </label>

                        <div className="col-sm-5">
                            <select id="wd-display-grade-as" className="form-control">
                                <option selected>Percentage</option>
                            </select>
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label htmlFor="wd-submission-type"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Submission Type </label>

                        <div className="col-sm-5" >
                            <div className="grey-border have-border p-3">
                                <select id="wd-submission-type" className="form-control">
                                    <option selected>Online</option>
                                </select>

                                <p className="margin=10" style={{ fontWeight: "bold", marginLeft: "10px" }}>
                                    Online Entry Options<br />
                                </p>

                                <input type="checkbox" name="check-entry" id="wd-text-entry" className="form-check-input margin-10" />
                                <label htmlFor="wd-text-entry" className="col-form-label">Text Entry</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-website-url" className="form-check-input margin-10" />
                                <label htmlFor="wd-website-url" className="col-form-label">Website URL</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-media-recordings" className="form-check-input margin-10" />
                                <label htmlFor="wd-media-recordings" className="col-form-label">Media Recordings</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-student-annotation" className="form-check-input margin-10" />
                                <label htmlFor="wd-student-annotation" className="col-form-label">Student Annotation</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-file-upload" className="form-check-input margin-10" />
                                <label htmlFor="wd-file-upload" className="col-form-label">File Uploads</label>
                            </div>

                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assign
                        </label>

                        <div className="col-sm-5" >

                            <div className="grey-border have-border p-3">
                                <label className="form-label margin-10" htmlFor="wd-assign-to" style={{ fontWeight: "bold" }} >Assign to</label><br />
                                <input className="form-control margin-10" value="Everyone" id="wd-assign-to" />

                                <label htmlFor="wd-due-date" className="form-label margin-10" style={{ fontWeight: "bold" }}>Due</label> <br />
                                <input type="date" value="2021-01-01" id="wd-due-date" className="form-control margin-10 " /><br />

                                <div className="row">
                                    <div className="col-sm-5" >
                                        <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                                        <input type="date" value="2021-01-01" id="wd-available-from" className="form-control" />
                                    </div>

                                    <div className="col-sm-5" >
                                        <label htmlFor="wd-available-until" className="col-form-label">Until</label>
                                        <input type="date" value="2021-01-01" id="wd-available-until" className="form-control" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </form>
            </div>

            <hr />
            <button className="btn btn-danger float-end "><a  className="save-btn" href="index.html">Save</a></button>
            <button className="btn btn-secondary float-end"><a className="cancel-btn" href="index.html">Cancel</a></button>
        </div>
    );
}
