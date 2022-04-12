import './sidebar.css';
import { LineStyle, 
        Timeline, 
        PermIdentity, 
        Home, 
        PeopleOutline, 
        FolderOpen, 
        Splitscreen, 
        ListAlt, 
        MailOutline, 
        NotificationsNone, 
        Settings,
        HelpOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dasboard Menu</h3>
                    <ul className="sidebarList">

                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon"/> Home
                            </li>
                        </Link>

                        <Tooltip title="Not real. Just here for Design.">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/> News
                            </li>
                        </Tooltip>

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
                                    <PeopleOutline className="sidebarIcon"/> Students
                                </li>
                            </Link>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <FolderOpen className="sidebarIcon"/> Projects
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <Splitscreen className="sidebarIcon"/> Tasks
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <ListAlt className="sidebarIcon"/> Assignments
                                </li>
                            </Tooltip>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">System Menu</h3>
                        <ul className="sidebarList">
                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <PermIdentity className="sidebarIcon"/> Profile
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <NotificationsNone className="sidebarIcon"/> Notifications
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <MailOutline className="sidebarIcon"/> Messages
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <Settings className="sidebarIcon"/> Settings
                                </li>
                            </Tooltip>

                            <Tooltip title="Not real. Just here for Design.">
                                <li className="sidebarListItem">
                                    <HelpOutline className="sidebarIcon"/> Help
                                </li>
                            </Tooltip>
                    </ul>
                </div>

            </div>
        </div>
    );
}
