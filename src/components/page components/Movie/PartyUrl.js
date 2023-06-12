import {SET_PARTYURL} from "../../../redux/watch party/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";


const PartyUrl = () => {
    const dispatch = useDispatch()
    const authData = useSelector(state => state.auth)
    const wpData = useSelector(state => state.wp)
    const [tempUrl, setTempUrl] = useState('')
    const handleChange = e => {
        setTempUrl(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(SET_PARTYURL(tempUrl))
        const send_party_data = async (tempUrl) => {
                await axios.patch(`${authData.url}watch/group/${wpData.partyId}/`, {
                    url: tempUrl,
                    is_playing: false,
                    current_time: 0
                }).then(response => {
                    if (response.status === 200) {
                        // const data = response.data
                        // console.log(data)
                    }
                }).catch(error => console.log(error))
              }

        setTempUrl('')
        if (wpData.partyId) {
            send_party_data(tempUrl)
        }
    }

  return (
      <div className='d-flex justify-content-center mb-3'>
          <form className='party-url' onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                  <button className="input-group-prepend border-0" onClick={handleSubmit}>
                      <div className="input-group-text border-end-0" style={{backgroundColor: 'white'}}>
                          <i className="bi bi-search" style={{color: '#273227'}}/>
                      </div>
                  </button>
                  <input type="text" value={tempUrl} className="form-control border-start-0" id="inlineFormInputGroup" placeholder="https://www.youtube.com/watch........." onChange={handleChange}/>
              </div>
        </form>
      </div>

  )
}

export {PartyUrl}