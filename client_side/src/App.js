import React from "react";
import { Container,AppBar,Typography,Grow,Grid } from "@material-ui/core";

import memories from "./images/stupa.png"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles" // useStyles is a hook returned by the makeStyles function. Here, hook provides access to the generated CSS classes. Hook is special functions that helps use certain React features in functional components

// Material-UI is UI framework for React applications

// The Container controls the layout of content on the page. Wrap the content inside a Container to align and space according to Material Design principles.
// The AppBar component is used to create a top app bar or navigation bar in the application.
// The Typography component is used for text and typography-related styling. It is used to set text styles such as font size, font weight, and color.
// The Grid component helps to create rows and columns of content and align and position elements on the page.
// The Grow component is used to add subtle grow/shrink animations to elements when entering or exiting the view.
 
// Container wraps the entire content -> AppBar creates a top app bar -> Typography to set the app title -> Grid to create a layout with two columns -> Grow to apply an animation to the content when it enters the view.

function App(){
    const classes = useStyles()
    return (
    <Container maxWidth="lg"> {/*container will have a large maximum width */}
        <AppBar className = {classes.appBar} position="static" color="inherit"> {/* position="static" -> app bar should have a fixed position at the top of the page. color="inherit" -> app bar's background color to inherit the color from its parent element. */}
            <Typography className = {classes.heading} variant="h2" align="center" >Photo</Typography> { /* variant="h2" -> text should be displayed as a heading with a large font size.*/ }
            <img className = {classes.image} src={memories} alt="stupa photo" height= "60"/>
        </AppBar>
        {/* <Grow in>  in is a boolean prop that specifies whether the animation should be applied. Hers, the animation is applied because it is set to in. */}
        <Container>
            <Grid container justifyContent ="space-between" alignItems="stretch" spacing={3}> {/* container indicates that this <Grid> is a container for grid items.*/}
                
                <Grid item xs={12} sm={7}> {/* These are individual <Grid> items within the layout grid. */}
                    <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form/>
                </Grid>

            </Grid>
        </Container>
        {/* </Grow> */}
    </Container>
    )
}

export default App