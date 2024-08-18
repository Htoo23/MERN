import { useState, useEffect } from "react";
import postService from "../services/postService";
// import { post } from "../../../../routes/postRoute";

function ShowComponent() {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        setPosts(await postService.getPosts());

    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const deletePost = async (id, e) => {
        var response = await postService.deletePost(id);
        if (response.data.success == true) {
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();

        }
        else {
            alert(response.data.msg);

        }
    }


    return (
        <div className="App">
            <h1>Posts</h1>
            {posts.data != undefined && posts.data.data.length > 0 && (
                <table style={{ width: '100%' }} border='1'>
                    <thead>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {posts.data.data.map(posts => (
                            <tr>
                                <td>{posts.title}</td>
                                <td>{posts.date}</td>
                                <td>
                                    <img src={'http://127.0.0.1:8000/api/postImages/' + posts.image} style={{ width: 'auto', height: '100px' }} />
                                </td>
                                <td>
                                    <button id={posts._id} onClick={(e) => deletePost(posts._id, e)}>Delete</button>
                                </td>
                            </tr>
                        )

                        )}
                    </tbody>
                </table>
            )}
        </div>
    );

}
export default ShowComponent;