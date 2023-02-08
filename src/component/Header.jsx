import { NavLink } from "react-router-dom";

function Header(){
    return(
        <>
        <header>
    <nav className="Tom">
        <h1>Apna Card</h1>
        <ul className="jerry">
            
            <li>
                <NavLink style={{textDecoration:"none" , margin:"25px" }} to="/home">Home</NavLink>
            </li>
            <li style={{textDecoration:"none"}}>
                <NavLink style={{textDecoration:"none" , margin:"25px" }} to="/about">About</NavLink>
            </li>
            <li style={{textDecoration:"none"}}>
                <NavLink style={{textDecoration:"none" , margin:"25px" }} to="/context">Context</NavLink>
            </li>
    
        </ul>
    </nav>
</header>
        </>
    );
}


export default Header;