import React, { Component } from "react";
import LibraryNav from "../../Component/Library/LibraryNav/LibraryNav";
import SingleSettings from "../../Containers/Settings/SingleSettings";
import "./Settings.css";
import { MdSort, MdPlace } from "react-icons/md";
import { FaEllipsisV,FaAngleDown } from "react-icons/fa";
import { Button } from "reactstrap";

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <LibraryNav
          title="Settings"
          icon={<MdSort className="library-nav-icon icon-size " />}
          icon2={<MdPlace className="library-nav-icon icon-2" />}
          icon3={<FaEllipsisV className="library-nav-icon " />}
        />
        <div className="settings-title-cont">
          <h6 className="setting-title">Free Account</h6>
          <Button className="settings-btn"> Go to Premium</Button>
        </div>
       
            <div className="setting-section">
                     {/* Premium section */}
                <div className="single-setting-section">
                <h6 className="settings-section-title"> Playback &nbsp;<span className="section-subtitle">(Premium Featuers)</span></h6>
                <SingleSettings title="Offline mode" icon />
                <SingleSettings title="Compress all my tracks" icon />
                </div>
                     {/* Notification section */}
                <div className="single-setting-section">
                <h6 className="settings-section-title"> Notifications </h6>
                <SingleSettings title="Enable notification" icon active/>
                <SingleSettings title="Recommended music" icon active/>
                <SingleSettings title="Playlists updates" icon active/>
                <SingleSettings title="Artists updates" icon active/>
                </div>
                     {/* Notification section */}
                <div className="single-setting-section">
                <h6 className="settings-section-title"> About </h6>
                <SingleSettings title="Terms and conditions"  active/>
                <SingleSettings title="Privacy policy"  active/>
                <SingleSettings title="Support"  active/>
                <SingleSettings title="Language" text="English" texticon={<FaAngleDown/>} active/>
                <SingleSettings title="App version" text="1.2.3000"  active/>
                </div>
            </div>
      </div>
    );
  }
}
