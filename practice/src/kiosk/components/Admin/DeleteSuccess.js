function DeleteSuccess(props){
    setTimeout(() => {
        props.setComp("List");
    }, 3000);

    return(
        <div>
            <h1>삭제가 완료되었습니다.</h1>
        </div>
    )
}

export default DeleteSuccess;