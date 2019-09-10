import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faICursor,
  faBook,
  faCog,
  faQuestionCircle,
  faMousePointer,
  faArrowsAltH,
  faHome,
  faEllipsisV,
  faEyeDropper
} from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                  color="#4f5565"
                />
                <p className="icon-task">input</p>
              </Link>
              <Link className="function click-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faHandPointUp}
                  color="#4f5565"
                />
                <p className="icon-task">click</p>
              </Link>
              <Link className="function paginate-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faBook}
                  color="#4f5565"
                />
                <p className="icon-task">paginate</p>
              </Link>
              <Link className="function extract-function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faWindows}
                  color="#4f5565"
                />
                <p className="icon-task">extract</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faCog}
                  color="#4f5565"
                />
                <p className="icon-task">state</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faQuestionCircle}
                  color="#4f5565"
                />
                <p className="icon-task">help</p>
              </Link>
              <Link className="function" to="#">
                <FontAwesomeIcon
                  className="panel-icon"
                  icon={faQuestionCircle}
                  color="#4f5565"
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
              <FontAwesomeIcon
                className="panel-icon"
                color="#5c5e66"
                icon={faMousePointer}
              />
              <span className="spacer"></span>
              <FontAwesomeIcon
                className="panel-icon"
                color="#5c5e66"
                icon={faArrowsAltH}
              />
            </div>
            <div className="flow-chart">
              <div className="start-box box">
                <div className="box-left">
                  <FontAwesomeIcon icon={faHome} />
                  <p className="process-name">
                    start
                    <br />
                    <span>starting point</span>
                  </p>
                </div>
                <div className="box-right">
                  <FontAwesomeIcon className="options" icon={faEllipsisV} />
                </div>
              </div>
              <div className="input-box box">
                <div className="box-left">
                  <FontAwesomeIcon icon={faICursor} />
                  <p className="process-name">
                    input
                    <br />
                    <span>input 1assfsf</span>
                  </p>
                  <div className="notification">29</div>
                </div>
                <div className="box-right">
                  <FontAwesomeIcon className="options" icon={faEllipsisV} />
                </div>
              </div>
              <div className="extract-box box">
                <div className="box-left">
                  <FontAwesomeIcon icon={faWindows} />
                  <p className="process-name">
                    extract
                    <br />
                    <span>property 1</span>
                  </p>
                  <div className="notification"><FontAwesomeIcon icon={faEyeDropper} color="#fff" /></div>
                </div>
                <div className="box-right">
                  <FontAwesomeIcon className="options" icon={faEllipsisV} />
                </div>
              </div>
              <div className="paginate-box box">
                <div className="box-left">
                  <FontAwesomeIcon icon={faBook} />
                  <p className="process-name">
                    paginate
                    <br />
                    <span>standerd</span>
                  </p>
                  <div className="notification"><FontAwesomeIcon icon={faEyeDropper} color="#fff" /></div>
                </div>
                <div className="box-right">
                  <FontAwesomeIcon className="options" icon={faEllipsisV} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
