import './sidebar.css';
import { LineStyle, Timeline, PermIdentity, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">

                        <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <Home className="sidebarIcon"/> Home
                        </li>
                        </Link>

                        <Link to="/analytics" className="link">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytics
                        </li>
                        </Link>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <Link to="/studentlist" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/> Students
                        </li>
                        </Link>

                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/> Projects
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}
