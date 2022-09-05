const Loading = ({ infoLoad }) => {
    return (
        <div className="loadingContent">
            <img className="loadingImg" src="/assets/img/aguilaLoading.jpg" alt="aguila"></img>
            <h3 className="loading-text">{infoLoad}</h3>
        </div>
    )
}
export default Loading;