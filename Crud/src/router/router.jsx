import { Routes, Route, Outlet } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";
import PostUpdate from "../pages/PostUpdate";
import PostDelete from "../pages/PostDelete";
import * as S from "../styles/Layout";

function Layout() {
  return (
    <S.Container>
      <S.NavWrap>
        <S.Gap />
        <S.LinkBtn to="/">목록</S.LinkBtn>
        <S.LinkBtn to="/write">글쓰기</S.LinkBtn>
      </S.NavWrap>
      <Outlet />
    </S.Container>
  );
}

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/write" element={<PostWrite />} />
        <Route path="/modify" element={<PostUpdate />} />
        <Route path="/delete" element={<PostDelete />} />
        <Route path="/posts/:id/edit" element={<PostUpdate />} />
        <Route path="/posts/:id/delete" element={<PostDelete />} />
      </Route>
    </Routes>
  );
}