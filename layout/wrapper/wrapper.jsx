import dynamic from "next/dynamic"


let Header = dynamic(() => import("../header/header"))
let Footer = dynamic(() => import("../footer/footer"))

const Wrapper = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Wrapper