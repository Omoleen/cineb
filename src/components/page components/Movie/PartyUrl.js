import {SET_PARTYURL} from "../../../redux/watch party/actions";
import {useDispatch} from "react-redux";
import {useState} from "react";


const PartyUrl = () => {
    const dispatch = useDispatch()
    const [tempUrl, setTempUrl] = useState('')
    const handleChange = e => {
        setTempUrl(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(SET_PARTYURL(tempUrl))
        setTempUrl('')
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