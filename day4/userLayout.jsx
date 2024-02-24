import propTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'

const UserLayout = ({children}) => {
    return (
        <div style={{width: "100%", marginTop: "0%"}}>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
    <Footer/>          
      </footer>
        </div>
    )
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout