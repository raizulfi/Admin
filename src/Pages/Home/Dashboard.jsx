import "./Dashboard.scss"
import SideBar from "../../Components/sidebar/SideBar.jsx"
// import Header from "../../Components/sidebar/Header.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Widget from "../../Components/widget/Widget.jsx"

function Dashboard() {
  return (
    <div className="home">
        <SideBar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="PendAccount"/>
                <Widget type="ActiveAccount"/>
                <Widget type="ActiveCentra"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
