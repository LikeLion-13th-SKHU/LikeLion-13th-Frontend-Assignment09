import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/PostEdit";

const STORAGE_KEY = "myPosts";

export default function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const posts = raw ? JSON.parse(raw) : [];
    const target = posts.find((p) => String(p.id) === String(id));

    if (!target) {
      alert("게시글을 찾을 수 없습니다.");
      navigate("/");
      return;
    }
    setTitle(target.title ?? "");
    setContent(target.content ?? "");
  }, [id, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    const c = content.trim();
    if (!t || !c) {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    const posts = raw ? JSON.parse(raw) : [];
    const next = posts.map((p) =>
      String(p.id) === String(id) ? { ...p, title: t, content: c } : p
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    navigate(`/posts/${id}`); 
  };

  return (
    <S.Wrap>
      <S.Title>글 수정</S.Title>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <S.Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <S.Actions>
          <S.PrimaryButton type="submit">저장</S.PrimaryButton>
          <S.SecondaryButton type="button" onClick={() => navigate(-1)}>
            취소
          </S.SecondaryButton>
        </S.Actions>
      </S.Form>
    </S.Wrap>
  );
}

