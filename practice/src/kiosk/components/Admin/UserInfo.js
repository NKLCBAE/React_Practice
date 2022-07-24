
function UserInfo(props) {
    const id = props.id
    const users = JSON.parse(localStorage.getItem('userLogin'));
    const setModify = () => {
        props.setComp("Modify");    
    }
    const setList = () => {
        props.setComp("List");
    }
    const setDelete = () => {
        props.setComp("Delete");
    }

    let user;
    for (let i in users) {
        if (users[i].userId === id) {
            user = users[i];
            console.log(user);
        }
    }
    

    return (
        <div>
            <h1>유저 상세 정보</h1>
            <h2>ID: {user.userId}</h2>
            <h2>비밀번호: {user.password}</h2>
            <h2>이름: {user.name}</h2>
            <h2>나이: {user.userAge}</h2>
            <h2>키 : {user.userHeight}cm</h2>
            <h2>이메일: {user.email}</h2>
            <h2>의자 높이 단계: {user.seatSet}</h2>
            <h2>모니터 높이 단계: {user.monitorSet}</h2>
            <button onClick={setList}>뒤로가기</button>
            <button onClick={setModify}>수정하기</button>
            <button onClick={setDelete}>삭제하기</button>
        </div>
    )
}

export default UserInfo;