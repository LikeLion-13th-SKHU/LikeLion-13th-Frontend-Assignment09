import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/PostWrite";

const STORAGE_KEY = "myPosts";

export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const storedPosts = localStorage.getItem(STORAGE_KEY);
  const posts = storedPosts ? JSON.parse(storedPosts) : [];
  const post = posts.find((p) => String(p.id) === String(id));

  const handleSubmit = () => {
    // if (!post.title.trim()) {
    //   alert("제목을 입력해주세요!");
    //   return;
    // }
    // if (!post.content.trim()) {
    //   alert("내용을 입력해주세요!");
    //   return;
    // }

    let currentPosts = storedPosts ? JSON.parse(storedPosts) : [];
    const updatedPosts = currentPosts.filter(
      (p) => String(p.id) !== String(id)
    );

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
    };

    const nextPosts = [newPost, ...updatedPosts];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts));

    navigate(`/posts/${newPost.id}`);
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
    post.title = title;
  };

  const contentChange = (e) => {
    setContent(e.target.value);
    post.content = content;
  };

  return (
    <>
      <S.Title>글쓰기</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          <S.LabelText>제목</S.LabelText>
          <S.Input defaultValue={post.title} onChange={titleChange} />
        </S.Label>
        <S.Label>
          <S.LabelText>내용</S.LabelText>
          <S.Textarea
            defaultValue={post.content}
            onChange={contentChange}
            rows={8}
          />
        </S.Label>
        <S.Button type="submit">수정하기</S.Button>
      </S.Form>
    </>
  );
}
