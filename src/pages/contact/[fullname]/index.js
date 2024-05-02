import { useRouter } from 'next/router'

const ContactName = () => {
    let router = useRouter();
    console.log("Router", router.query);
    let { fullname } = router.query;

    return (
        <div>
            <div>
                <h4>Hello, {fullname}</h4>
            </div>
        </div>
    )
}

export default ContactName;