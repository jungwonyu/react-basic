import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼 눌릭 ㅋ");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="김유리"
        title="프론트엔드 개발자"
        isNew={true}
      />

      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="김철수"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1666118704505-068a65b5283f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        name="김영희"
        title="백엔드 개발자"
      />
    </>
  );
}

export default AppProfile;
