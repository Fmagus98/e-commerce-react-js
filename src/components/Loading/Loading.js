const Loading =({infoLoad})=>{
    return(
        <>
        <img className="loadingImg" src="/assets/img/aguilaLoading.jpg" alt="aguila"></img>
        <h3 className="loading-text">{infoLoad}</h3>
        </>
    )
}
export default Loading;