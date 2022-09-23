import Films from './films/Films';
import Nav from './navBar/Nav';

function Main(){
    return(
        <div className="wrap__content_main">
        <Nav/>
        <Films/>
      </div>
    )
}

export default Main