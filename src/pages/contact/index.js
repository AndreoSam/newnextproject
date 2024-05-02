import Link from "next/link"

const Contact = () => {
    const username = "John Doe"

    return (
        <div>
            <div>
                {/* <h2>Contact</h2>
                <p>Barrackpore, Kolkata, West Bengal</p> */}
                <h2>Get in touch</h2>
                <button>
                    <Link href={`/contact/${username}`}>Click me</Link>
                </button>
            </div>
        </div>
    )
}

export default Contact