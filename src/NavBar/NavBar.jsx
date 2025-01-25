

import Styles from "./NavBar.module.css"
import {Link} from "react-router-dom"

function NavBar(){

   return( 
    
    <div className={Styles.Container}>
    <h2 className={Styles.h2}>#VANLIFE</h2>
    <div>
        <Link to ="/usersmanager" >Users Manger</Link>
    <Link to ="/adduser" >Add User</Link>
    <Link to ="/loagin" >Loag in</Link>
    </div>

    </div>)

}

export default NavBar

