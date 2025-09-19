import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import * as S from "../styles/PostDetail";

const STORAGE_KEY = "myPosts";

export default function PostDetail() {
  const { id } = useParams();

  const storedPost = localStorage.getItem(STORAGE_KEY);
  const posts = storedPost ? JSON.parse(storedPost) : [];
  const post = posts.find((p) => String(p.id) === String(id));

  return ( // 수정, 삭제 버튼 추가
    <>
      <div style={{ display: "flex", gap: 8, marginTop: 10}}>
        <S.Title>{post.title}</S.Title>
        <S.Gap />
        <S.Button as={Link} to={`/posts/${post.id}/edit`}>수정</S.Button>
        <S.Button as={Link} to={`/posts/${post.id}/delete`}>
          삭제
        </S.Button>
      </div>
      
      <S.Divider />
      <S.Article>{post.content}</S.Article>
    </>
  );
}