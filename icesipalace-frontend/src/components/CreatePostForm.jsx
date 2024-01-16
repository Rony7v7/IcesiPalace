import React from "react";
import "../styles/Post/CreatePostForm.css";

export default function CreatePostForm(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger rounded-circle" onClick={() => props.setTrigger()}>Close</button>
                </div>
                <h1>Create Post</h1>

                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="post-title">Title</label>
                        <input id="post-title" type="text" className="form-control" placeholder="Enter the Post title" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="post-description" > Description</label>
                        <textarea id="post-description" className="form-control" placeholder="Enter the Post description" />
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="post-price">Price</label>
                            <input id="post-price" type="number" className="form-control" min={0} placeholder="Enter the Post price" />
                        </div>
                        <div className="col">
                            <label htmlFor="dropdownMenuButton">Category</label>
                            <div id="dropdownMenyButton">
                                <select name="cars" id="dropDownSelect" className="form-select">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select> {/*TODO: Add categories */}
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-3">
                        <label htmlFor="post-image">Image</label>
                        <input id="post-image" type="file" className="form-control" />
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button id="submit" className="btn btn-success"> submit</button>
                    </div>
                </form>
            </div>
        </div>
    ) : "";
}