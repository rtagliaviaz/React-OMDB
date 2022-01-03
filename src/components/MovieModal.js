import React from 'react'

const MovieModal = ({movieInfo, handleClose}) => {
<<<<<<< HEAD

=======
  console.log('asda', movieInfo)
>>>>>>> 7dd6ca833c9f233954c03134ee6a7786b9fd6cf8
  return (
    <div className="modal display-block">
                <section className="modal-main">
                  
                  <div className="modal-body">
                    <div className="modal-img">
                      <img src={movieInfo.Poster} alt="Poster"/>
                    </div>
                    <div className="modal-info">
                      <p><b>Actors:</b> {movieInfo.Actors}</p>
                      <p><b>Genre:</b> {movieInfo.Genre}</p>
                      <p><b>Director:</b> {movieInfo.Director}</p>
                      <p><b>Released:</b> {movieInfo.Released}</p>
                      <p><b>Plot:</b> {movieInfo.Plot}</p>
                    </div>
                    
                  </div>
                  <button className="modal-closebtn" onClick={handleClose}>Close</button>
                </section>
              </div>
  )
}

export default MovieModal
