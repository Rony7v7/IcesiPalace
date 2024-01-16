import React , {useState} from "react";
import "../styles/Post/CreatePostForm.css";
import DataAcces from "../services/DataAccess";

export default function CreatePostForm(props) {


    const [formData, setFormData] = useState({
        post_title: "",
        post_price: "",
        category: "volvo", // Set default category if needed
        post_description: "",
        post_image: null, // Use null for file input
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        // Handle file input separately
        const file = e.target.files[0];
        setFormData({
            ...formData,
            post_image: file,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { post_title, post_price, category, post_description, post_image } = formData;
        DataAcces.createPost(post_title, post_description, post_price, category, post_image)
            .catch((err) => {
                console.log(err);
            });
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger rounded-circle" onClick={() => props.setTrigger()}>Close</button>
                </div>
                <h1>Create Post</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="post-title">Title</label>
                        <input name="post_title"  id="post-title" type="text" className="form-control" placeholder="Enter the Post title" onChange={handleChange} required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="post-description" > Description</label>
                        <textarea name="post_description" id="post-description" className="form-control" placeholder="Enter the Post description" onChange={handleChange} required />
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="post-price">Price</label>
                            <input name="post_price" id="post-price" type="number" className="form-control" min={0} placeholder="Enter the Post price" onChange={handleChange} required /> </div>
                        <div className="col">
                            <label htmlFor="dropdownMenuButton">Category</label>
                            <div id="dropdownMenyButton">
                                <select name="category" id="dropDownSelect" className="form-select" onChange={handleChange} required>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="OTHER">OTHER</option>
                                </select> {/*TODO: Add categories */}
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-3">
                        <label htmlFor="post-image">Image</label>
                        <input name="post_image" id="post-image" type="file" className="form-control" onChange={handleImageChange}/>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button id="submit" className="btn btn-success"> submit</button>
                    </div>
                </form>
            </div>
        </div>
    ) : "";
}