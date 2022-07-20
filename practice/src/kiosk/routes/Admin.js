import UserList from "../components/Admin/UserList";
import { useState } from "react";

function Admin() {
//       localStorage.setItem('users',JSON.stringify( [
//     { id: "ssafy", password: "ssafy", name: "김싸피", age: 29, height: 178, email:"ssafy@ssafy.com", phone:"010-1234-5678"},
//     { id: "happy", password: "happy", name: "이싸피", age: 25, height: 165, email:"happy@happy.com",phone:"010-4321-9876"},
//     { id: "house", password: "house", name: "박싸피", age: 33,height: 185, email:"house@house.com", phone:"010-1111-2222"}
//   ]));
  const [Do, setDo] = useState("List");
    return (<div>
        <h1>관리자 페이지</h1>
        {Do==="List"? <UserList/>: null};
    </div>)
}

export default Admin;