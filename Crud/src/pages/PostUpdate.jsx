import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import * as S from "../styles/PostUpdate";

const STORAGE_KEY = "myPosts";

export default function PostUpdate() {
  const { id } = useParams(); // 게시글 번호
  const navigate = useNavigate(); // 페이지 이동에 필요

  const [title, setTitle] = useState(""); // 제목 입력값 (새로운 제목)
  const [content, setContent] = useState(""); // 내용 입력값 (새로운 내용)
  const [notFound, setNotFound] = useState(false); // 글이 존재하지 않을 때 (에러발생 방지)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY); // 로컬스토리지에서 꺼내온 값
    const posts = stored ? JSON.parse(stored) : []; // stored에 값 있으면 js로 변환, 그런데 값 없으면 빈 배열로 채워봄
    const target = posts.find((p) => String(p.id) === String(id)); // 원하는 게시글의 id 반환하는 배열 find() 함수

    if (!target) {
      setNotFound(true); // 게시글 못 찾으면 진행X
      return;
    }

    setTitle(target.title); // 기존 제목 보이기
    setContent(target.content);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력해주세요");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요");
      return;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    const posts = stored ? JSON.parse(stored) : [];

    const idx = posts.findIndex((p) => String(p.id) === String(id)); // 수정할 게시글 찾는 코드

    const updated = { // 수정된 게시글 만드는 코드
      ...posts[idx],
      title: title.trim(),
      content: content.trim(),
    };

    const nextPosts = [...posts]; // 수정된 걸 배열에 반영
    nextPosts[idx] = updated;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts)); // 저장
    navigate(`/posts/${updated.id}`); // 수정된 글로 이동하는 코드
  };

  return (
    <>
      <S.Title>글 수정</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          <S.LabelText>제목</S.LabelText>
          <S.Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </S.Label>

        <S.Label>
          <S.LabelText>내용</S.LabelText>
          <S.Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            rows={8}
          />
        </S.Label>

        <div style={{ display: "flex", gap: 8 }}> {/* 스타일에 만들기 귀찮아서 그냥 여기에 했습니다ㅎ */}
          <S.Button type="submit">수정하기</S.Button>
          <S.Button as={Link} to={`/posts/${id}`}>
            취소 {/* 취소하면 원래 목록으로 돌아가기 */}
          </S.Button>
        </div>
      </S.Form>
    </>
  );
}