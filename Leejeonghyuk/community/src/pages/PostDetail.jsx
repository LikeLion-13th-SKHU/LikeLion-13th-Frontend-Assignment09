import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/PostDetail";

const STORAGE_KEY = "myPosts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedPosts = localStorage.getItem(STORAGE_KEY);
  const posts = storedPosts ? JSON.parse(storedPosts) : [];
  const post = posts.find((p) => String(p.id) === String(id));

  const handleDelete = () => {
    let currentPosts = storedPosts ? JSON.parse(storedPosts) : [];
    const updatedPosts = currentPosts.filter(
      (p) => String(p.id) !== String(id)
    );
    const updatedPostsString = JSON.stringify(updatedPosts);
    localStorage.setItem(STORAGE_KEY, updatedPostsString);

    navigate(`/`);
  };

  const handleModify = () => {
    navigate(`/update/${post.id}`);
  };
  return (
    <>
      <S.Title>{post.title}</S.Title>
      <S.Divider />
      <S.Article>{post.content}</S.Article>
      <S.Btn onClick={handleModify}>수정</S.Btn>
      <S.Btn onClick={handleDelete}>삭제</S.Btn>
    </>
  );
}
