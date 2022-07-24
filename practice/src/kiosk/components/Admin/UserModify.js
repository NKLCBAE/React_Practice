import React, { useState } from "react";

function UserModify(props) {
    const id = props.id
    const users = JSON.parse(localStorage.getItem('userLogin'));
    let user;
    let no;
    for (let i in users) {
        if (users[i].userId === id) {
            user = users[i];
            no = i;
        }
    }
    const [inpval, setInpval] = useState(user);

    const setInfo = () => {
        props.setComp("Info");
    }

    const getData = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
        console.log(inpval);
    }

    const setAndGo = (e) => {
        e.target.disabled = 'disabled'
        users[no] = inpval
        localStorage.setItem("userLogin", JSON.stringify(users));
        setTimeout(() => {
            props.setComp("ModifySuccess");
        }, 100);

    }

    return (
        <div>
            <div id="header">
                <div id="wrapper">
                    <div id="content">
                        <div>
                            <form>
                                <h3>아이디</h3>
                                <span>
                                    <input name="userID" value={inpval.userId} disabled />
                                </span>
                                <h3>비밀번호</h3>
                                <span>
                                    <input name="password" onChange={getData} value={inpval.password} />
                                </span>
                                <h3>이름</h3>
                                <span>
                                    <input name="name" onChange={getData} value={inpval.name} />
                                </span>
                                <h3>나이</h3>
                                <span>
                                    <input name="userAge" onChange={getData} value={inpval.userAge} />
                                </span>
                                <h3>키</h3>
                                <span>
                                    <input name="userHeight" onChange={getData} value={inpval.userHeight} />
                                </span>
                                <h3>이메일</h3>
                                <span>
                                    <input name="email" onChange={getData} value={inpval.email} />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <button onClick={setInfo}>뒤로가기</button>
                <button onClick={setAndGo}>수정하기</button>
            </div>

            {/* <form>
                <h1>회원 정보 수정</h1>
                ID: <input onChange={getData} value={user.userId} disabled />
                <br></br>
                회원증번호 : <input onChange={getData} value={user.cardNo} disabled />
                <h2></h2>
                <h2>이름: {user.userName}</h2>
                <h2>나이: {user.userAge}</h2>
                <h2>키 : {user.userHeight}cm</h2>
                <h2>이메일: {user.mail}</h2>
                <h2>전화번호: {user.phone}</h2>
                <h2>의자 높이 단계: {user.seatSet}</h2>
                <h2>모니터 높이 단계: {user.monitorSet}</h2>
                <button onClick={setInfo}>뒤로가기</button>
                <button>수정하기</button>
            </form> */}
        </div>
    )
}

export default UserModify;