import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faICursor,
  faBook,
  faCog,
  faQuestionCircle,
  faMousePointer,
  faArrowsAltH
} from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import FlowChart from "./images/flow-chart.png";

class Panel extends Component {
  render() {
    return (
      <div>
        <div className="panel-container">
          <div className="left-panel">
            <div className="panel-icons">
              <Link className="function input-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faICursor}
                  color="gray"
                />
                <p className="icon-task">input</p>
              </Link>
              <Link className="function click-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faHandPointUp}
                  color="gray"
                />
                <p className="icon-task">click</p>
              </Link>
              <Link className="function paginate-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faBook}
                  color="gray"
                />
                <p className="icon-task">paginate</p>
              </Link>
              <Link className="function extract-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faWindows}
                  color="gray"
                />
                <p className="icon-task">extract</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faCog}
                  color="gray"
                />
                <p className="icon-task">state</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faQuestionCircle}
                  color="gray"
                />
                <p className="icon-task">help</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faQuestionCircle}
                  color="gray"
                />
                <p className="icon-task">Let's go</p>
              </Link>
            </div>
          </div>
          <div className="right-panel">
            <div className="top-container">
              <p className="site-name">Hacker News</p>
              <p className="site-url">hackernews.ycombinator.com</p>
              <hr className="devider" />
              <FontAwesomeIcon className="panel-icon" color="gray" icon={faMousePointer} />
              <span className="spacer"></span>
              <FontAwesomeIcon className="panel-icon" color="gray" icon={faArrowsAltH} />
            </div>
            <img src={FlowChart} alt="flow-chart" className="flow-chart" />
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
