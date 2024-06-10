import './Account.scss';
import SideBar from '../../Components/sidebar/SideBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import AccountTable from '../../Components/AccountTable/AccountTable.jsx';
import CreateAccountButton from '../../Components/AccountTable/CreateAccountButton.jsx';

function Account() {
  const handleAddAccount = () => {
    // Handle add account logic here
    console.log('Add Account clicked');
  };

  return (
    <div className="accountPage">
      <SideBar />
      <div className="accountContent">
        <Navbar />
        <div className="accountTableContainer">
          <div className="accountHeader">
            <h1 className="accountTitle">Account</h1>
            <CreateAccountButton onClick={handleAddAccount} />
          </div>
          <AccountTable />
        </div>
      </div>
    </div>
  );
}

export default Account;
