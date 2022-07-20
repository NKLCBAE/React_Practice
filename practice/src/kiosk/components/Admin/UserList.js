import DetailButton from "./DetailButton.js"

function UserList(){
    const users = JSON.parse(localStorage.getItem('users'));

    return(<div><h1>사용자 목록</h1>
    {users.map((user)=> (
        <div key={user.id}>
        <div>ID:{user.id} 이름:{user.name} 나이:{user.age} <DetailButton/></div>
        </div>

    ))}
    </div>)
}

export default UserList;