import UserList from "../components/Admin/UserList";
import UserInfo from "../components/Admin/UserInfo";
import UserModify from "../components/Admin/UserModify";
import UserDelete from "../components/Admin/UserDelete";
import ModifySuccess from "../components/Admin/ModifySucces";
import DeleteSuccess from "../components/Admin/DeleteSuccess";
import { useState } from "react";

function Admin() {
    const [comp, setComp] = useState("List");
    const [id, setId] = useState("");
    // localStorage.setItem('userLogin', JSON.stringify([
    //     { id: 1, userId: 'ssafy0', password: '123123', cardNo: '1234567', name: '배윤호', userAge: 29, userHeight: 177, email: "bem2183@naver.com", seatSet: 1, monitorSet: 3, bday:"1994-12-10"},
    //     { id: 2, userId: 'ssafy1', password: '123123', cardNo: '1234568', name: '홍길동', userAge: 30, userHeight: 178, email: "ssafy1@naver.com", seatSet: 2, monitorSet: 3, bday:"1995-09-27" },
    //     { id: 3, userId: 'ssafy2', password: '123123', cardNo: '1234569', name: '단군', userAge: 31, userHeight: 180, email: "ssafy2@naver.com", seatSet: 5, monitorSet: 4, bday:"1996-08-15" },
    //     { id: 4, userId: 'ssafy3', password: '123123', cardNo: '1234560', name: '동명왕', userAge: 32, userHeight: 165, email: "ssafy3@naver.com", seatSet: 7, monitorSet: 2, bday:"2022-07-04"},
    //     { id: 5, userId: 'ssafy4', password: '123123', cardNo: '1234561', name: '온조왕', userAge: 33, userHeight: 168, email: "ssafy4@naver.com", seatSet: 4, monitorSet: 5, bday:"2022-07-03"},
    //     { id: 6, userId: 'ssafy5', password: '123123', cardNo: '1234562', name: '혁거세', userAge: 34, userHeight: 173, email: "ssafy5@naver.com", seatSet: 6, monitorSet: 1, bday:"2022-07-05"},
    //     { id: 7, userId: 'ssafy6', password: '123123', cardNo: '1234563', name: '광개토', userAge: 35, userHeight: 188, email: "ssafy6@naver.com", seatSet: 3, monitorSet: 6, bday:"2022-07-07"},
    //     { id: 8, userId: 'ssafy7', password: '123123', cardNo: '1234564', name: '이사부', userAge: 36, userHeight: 155, email: "ssafy7@naver.com", seatSet: 5, monitorSet: 4, bday:"2022-07-08"},
    //     { id: 9, userId: 'ssafy8', password: '123123', cardNo: '1234565', name: '백결', userAge: 38, userHeight: 149, email: "ssafy8@naver.com", seatSet: 4, monitorSet: 7, bday:"1991-03-13"},
    //     { id: 10, userId: 'ssafy9', password: '123123', cardNo: '1234566', name: '계백', userAge: 40, userHeight: 157, email: "ssafy9@naver.com", seatSet: 2, monitorSet: 5, bday:"1979-05-12" }
    // ]));
    return (<div>
        <h1>관리자 페이지</h1>
        <div>
            {comp === "List" ? <UserList setComp={setComp} setId={setId} /> : null}
            {comp === "Info" ? <UserInfo setComp={setComp} id={id} /> : null}
            {comp === "Modify" ? <UserModify setComp={setComp} id={id} /> : null}
            {comp === "Delete" ? <UserDelete setComp={setComp} id={id} /> : null}
            {comp === "ModifySuccess" ? <ModifySuccess setComp={setComp} id={id} /> : null}
            {comp === "DeleteSuccess" ? <DeleteSuccess setComp={setComp} id={id} /> : null}
        </div>
    </div>)
}

export default Admin;