import '../../../assets/css/styles.css'

const Breadcrumb = () => {
    return (
        <div className="d-inline-flex">
            <p>Home</p> <i className="bi bi-dot" style={{color: ' #969695'}}/>
            <p>Movies</p> <i className="bi bi-dot" style={{color: ' #969695'}}/>
            <p style={{color:' #969695'}}>Ghosted</p>
        </div>
    )
}

export {Breadcrumb}