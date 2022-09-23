import Dog from '../../img/dog.png';

function ItemFilms (){
    return(
        <div className="content__card">
          <img src={Dog} alt="постер" className="content__card_img" />
          <h4 className="content__card_headding">название</h4>
        </div>
    )
}

export default ItemFilms