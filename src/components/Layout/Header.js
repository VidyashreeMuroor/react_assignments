import { Fragment } from 'react';
import FoodOrderImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css"
const Header = (props) => {
    return <Fragment > 
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onDisplay={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={FoodOrderImage} alt="Food_Image"/>
        </div>
    </Fragment>
};
export default Header;