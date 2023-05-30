import '../../../assets/css/styles.css'

const Socials = () => {
    return (
        <section className="d-flex justify-content-center gap-2 w-100">
            <div className="d-inline-flex flex-column" style={{color: '#666666'}}>
                <div className="" style={{fontSize: '16px'}}>3.6k</div>
                <div className="" style={{fontSize: '9px'}}>
                    Shares
                </div>
            </div>
            <div className="d-inline-flex gap-2 col-6">
                <div className="social-icons" style={{backgroundColor: '#4167b2'}}>
                    <img src="https://platform-cdn.sharethis.com/img/facebook.svg" alt="facebook"/>
                </div>
                <div className="social-icons" style={{backgroundColor: '#54aced'}}>
                    <img src="https://platform-cdn.sharethis.com/img/twitter.svg" alt="twitter"/>
                </div>
                <div className="social-icons" style={{backgroundColor: '#23d366'}}>
                    <img src="https://platform-cdn.sharethis.com/img/whatsapp.svg" alt="whatsapp"/>
                </div>
                <div className="social-icons" style={{backgroundColor: '#4489ff'}}>
                    <img src="https://platform-cdn.sharethis.com/img/messenger.svg" alt="facebook"/>
                </div>
                <div className="social-icons" style={{backgroundColor: '#fe4500'}}>
                    <img src="https://platform-cdn.sharethis.com/img/reddit.svg" alt="facebook"/>
                </div>
                <div className="social-icons" style={{backgroundColor: '#0088cb'}}>
                    <img src="https://platform-cdn.sharethis.com/img/telegram.svg" alt="facebook"/>
                </div>
            </div>
        </section>
    )
}

export {Socials}