import { Newsletter } from "./Newsletter";



export const MailChimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.}$id=${process.env.REACT_APP_MAILCHIMP_ID} `;

    return (
        <>
            <MailChimpForm 
                url= {postUrl}

                render={({ subscribe, status, message})=> (
                    <Newsletter>
                        status={status}
                        message={message}
                        oninvalidated={FormData => subscribe(FormData)}
                    </Newsletter>
                    
                )}
                />
        </>
    )
}
export default MailChimpForm;