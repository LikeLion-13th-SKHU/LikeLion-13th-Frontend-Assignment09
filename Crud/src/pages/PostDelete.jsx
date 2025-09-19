import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/PostDelete";

const STORAGE_KEY = "myPosts";

export default function PostDelete() {
  const { id } = useParams(); // 게시글 번호
  const navigate = useNavigate(); // 페이지 이동에 필요

  const [post, setPost] = useState(null); // 삭제할 글의 객체를 지정

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY); // 로컬스토리지에서 꺼내온 값
    const posts = stored ? JSON.parse(stored) : []; // stored에 값 있으면 js로 변환, 그런데 값 없으면 빈 배열로 채워봄
    const target = posts.find((p) => String(p.id) === String(id)); // 원하는 게시글의 id 반환하는 배열 find() 함수

    setPost(target); // post 저장
  }, [id]);

  const handleDelete = () => { // 삭제 함수
    const stored = localStorage.getItem(STORAGE_KEY);
    const posts = stored ? JSON.parse(stored) : [];
    const nextPosts = posts.filter((p) => String(p.id) !== String(id)); // 일단 삭제할 글을 제외한 배열을 만듦

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts)); // 그리고 삭제된 결과를 배열에 다시 적용
    navigate("/", { replace: true }); // 삭제하고 목록으로 돌아가는 코드
  };

  if (!post) return null;

  return (
    <>
      <S.Title>글 삭제</S.Title>
      <S.Lead as="p" style={{ lineHeight: 1.6 }}>
        정말로 <strong>“{post.title}”</strong> 글을 삭제하시겠어요?<br />
        이 작업은 되돌릴 수 없습니다.
      </S.Lead>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {/* 이 부분도 그냥 스타일 더 만들기 귀찮아서...ㅎ */}
        <S.Button
          type="button"
          onClick={handleDelete}
        >
          삭제하기
        </S.Button>
        <S.Button as={Link} to={`/posts/${post.id}`}> 
          취소
        </S.Button> {/* 이 부분에서 type="button"을 사용해서 링크를 이어주는 방법은 없을까? */}
      </div>
    </>
  );
}