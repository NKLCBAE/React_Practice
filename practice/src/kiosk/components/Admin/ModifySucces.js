function ModifySuccess(props){
    setTimeout(() => {
        props.setComp("Info");
    }, 3000);

    return(
        <div>
            <h1>정보가 수정되었습니다.</h1>
        </div>
    )
}

export default ModifySuccess;