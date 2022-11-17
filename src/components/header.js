import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
    return(
        <header className={classes.header}>
           <Link to="/">Main Page i guess</Link> 
        </header>
    )
}
export default Header