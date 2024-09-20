export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea cols={60} rows={10} id="wd-description" >
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select>
                            <option selected>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected>Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected>Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td />
                    <td align="left" valign="top">
                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label> <br />

                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label> <br />

                        <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label> <br />

                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <br />

                <tr><td />
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign Assignment to</label><br />
                        <input value="Everyone" id="wd-assign-to" />
                    </td>
                </tr>
                <br />

                <tr><td />
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label> <br />
                        <input type="date" value="2021-01-01" id="wd-due-date" />
                    </td>
                </tr>
                <br />

                <tr><td />
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available From</label><br />
                        <input type="date" value="2021-01-01" id="wd-available-from" /><br />
                    </td>
                    <td>

                        <label htmlFor="wd-available-until">Until</label> <br />
                        <input type="date" value="2021-01-01" id="wd-available-until" /><br /><br />
                    </td>
                </tr>

            </table>

            <hr />
            <button><a href="index.html">Cancel</a></button>
            <button><a href="index.html">Save</a></button>
        </div>
    );
}
