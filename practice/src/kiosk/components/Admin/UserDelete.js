
function UserDelete(props) {
    const id = props.id
    let users = JSON.parse(localStorage.getItem('userLogin'));
    const deleteUser = (e) => {
        e.target.disabled = 'disabled'
        users = users.filter((element) => element.userId !==id);
        localStorage.setItem("userLogin", JSON.stringify(users));
        setTimeout(() => {
            props.setComp("DeleteSuccess");
        }, 300);
        
    }
    const setInfo = () => {
        props.setComp("Info");
    }
    return (
        <div>
            <h1>{id} 계정을 정말 삭제하시겠습니까?</h1>     
            <button onClick={deleteUser}>YES</button>

            <button onClick={setInfo}>NO</button>
        </div>
    )
}

export default UserDelete;