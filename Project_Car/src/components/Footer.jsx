import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_copyright">
          <div className="container">
            <div className="footer_copyright_content">
              <div className="footer_copyright_left">
                Copyright © 2023 <span>Travel</span> . Around the world.
              </div>
              <div className="footer_copyright_right">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
