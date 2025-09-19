import { useNavigate } from "react-router-dom";
import * as S from "../styles/PostDetail";

const STORAGE_KEY = "myPosts";

export default function DeletePostButton({ id }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("정말 삭제할까요?")) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const posts = raw ? JSON.parse(raw) : [];
      const next = posts.filter((p) => String(p.id) !== String(id));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      navigate("/"); 
    } catch (e) {
      alert("삭제 중 오류가 발생했습니다.");
      console.error(e);
    }
  };

  return <S.DangerButton onClick={handleDelete}>삭제</S.DangerButton>;
}
