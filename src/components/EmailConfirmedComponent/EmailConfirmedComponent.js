import { Fragment, useEffect, useState } from "react";
import EmailConfirmService from "../../services/EmailConfirmService/EmailConfirmService";

const EmailConfirmedComponent = (props) =>{

    const [contentToShow, setContentToShow] = useState(<div>Something happens...</div>)   

/* eslint-disable */
    useEffect(()=>{              

        let normalizedToken = props.params.get("emailtoken").replace(/ /g,"+");        

        EmailConfirmService(props.params.get("userid"), normalizedToken).then(response => {
            
            if(response === null || response.statusCode >= 400 || response.confirmationResult === false ){                
                setContentToShow(errorContent);
            }else if (response.confirmationResult === true){                
                setContentToShow(okContent);
            }            

        })
    },[])
/* eslint-enable */

    const errorContent = (<div>Что-то пошло не так</div>);
    const okContent = (<div>Спасибо за подтверждение</div>);

    return <Fragment>
        {contentToShow}
    </Fragment>
}

export default EmailConfirmedComponent;