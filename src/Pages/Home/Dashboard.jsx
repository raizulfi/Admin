import "./Dashboard.scss"
import SideBar from "../../Components/sidebar/SideBar.jsx"
// import Header from "../../Components/sidebar/Header.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Widget from "../../Components/widget/Widget.jsx"
import WelcomeWidget from "../../Components/widget/Welcomewidget.jsx"
import Featured from "../../Components/featured/Featured.jsx"
import Chart from "../../Components/charts/Chart.jsx"

function Dashboard() {
  return (
    <div className="home">
        <SideBar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="welcomewidget">
              <WelcomeWidget/>
            </div>
            <div className="widgets">
                <Widget type="PendAccount"/>
                <Widget type="ActiveAccount"/>
                <Widget type="ActiveCentra"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
