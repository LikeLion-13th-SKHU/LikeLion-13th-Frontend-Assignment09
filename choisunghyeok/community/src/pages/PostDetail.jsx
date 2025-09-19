import { useParams, useNavigate } from "react-router-dom";
import * as S from "../styles/PostDetail";

const STORAGE_KEY ="myPosts";

export default function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const storedPost = localStorage.getItem(STORAGE_KEY);
    const posts = storedPost ? JSON.parse(storedPost) : [];
    const post = posts.find((p) => String(p.id) === String(id));

if (!post) {
    return <p>해당 글을 찾을 수 없습니다.</p>
}

const handleDelete = () => {
    const  updatedPosts = posts.filter((p) => String(p.id) !== String(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    alert("삭제되었습니다.");
    navigate("/");
};

const handleEdit = () => {
    navigate(`/write?id=${id}`);
};

    return (
        <>
            <S.Title>{post.title}</S.Title>
            <S.Divider />
            <S.Article>{post.content}</S.Article>

            <S.ButtonGroup>
                <S.Button onClick={handleEdit}>수정</S.Button>
                <S.Button onClick={handleDelete}>삭제</S.Button>
            </S.ButtonGroup>
        </>
    );
}