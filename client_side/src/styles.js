import { makeStyles } from "@material-ui/core/styles";

//The makeStyles function is used to define and create custom styles for components in a React application by defining CSS-in-JS styles. 

export default makeStyles(function(){
    return { // Using { } to return key-value pairs
        appBar: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            },
        heading: {
            color: 'rgba(0,183,255, 1)',
        },
        image: {
            marginLeft: '15px',
        }
    }
  })
  