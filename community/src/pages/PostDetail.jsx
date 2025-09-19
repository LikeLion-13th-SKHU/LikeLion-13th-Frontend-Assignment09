import { useParams, Link, useNavigate } from "react-router-dom";
import * as S from "../styles/PostDetail";
import { DeletePostButton } from "../styles/DeletePostButton"; // 삭제 버튼

const STORAGE_KEY = "myPosts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  let posts = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    posts = raw ? JSON.parse(raw) : [];
  } catch {
    posts = [];
  }

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <>
        <S.Title>존재하지 않는 게시글입니다.</S.Title>
        <S.Divider />
        <S.Actions>
          <Link to="/"><S.SecondaryButton>목록으로</S.SecondaryButton></Link>
        </S.Actions>
      </>
    );
  }

  // 삭제 핸들러
  const onDelete = () => {
    if (!window.confirm("정말 삭제할까요?")) return;
    const next = posts.filter((p) => String(p.id) !== String(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    navigate("/"); 
  };

  return (
    <>
      <S.Title>{post.title}</S.Title>
      <S.Divider />
      <S.Article>{post.content}</S.Article>

      <S.Actions>
        <Link to={`/edit/${post.id}`}>
          <S.PrimaryButton>수정</S.PrimaryButton>
        </Link>
        <DeletePostButton onClick={onDelete}>삭제</DeletePostButton>
        <Link to="/"><S.SecondaryButton>목록</S.SecondaryButton></Link>
      </S.Actions>
    </>
  );
}

