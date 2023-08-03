
import "./main.css";

import img from "../img/document.svg";
import svg from "../img/person.svg";
import yuang from "../img/yuang.svg";
import electri from "../img/electri.svg";



function task1() {
  return (
    <div className="body ">
{/* task 1*/}
      <header className="padingtop">
        <div className="box ">
          <span></span>

          <div className="hero_documnet">
            <img src={img} className="hero_documnet_logo" alt="" />
            <p className="documentbuttonP">100</p>
            <text className="documentbuttontext">Transportlar</text>
          </div>
        </div>

        <br />

        <ydiv className="box ">
          <span></span>
          <div className="hero_documnet">
            <img src={svg} className="hero_documnet_logo" alt="" />
            <p className="documentbuttonP">1228</p>
            <text className="documentbuttontext1">Avtobuslar</text>
          </div>
        </ydiv>

        <br />

        <div className="box ">
          <span></span>
          <div className="hero_documnet">
            <img src={yuang} className="hero_documnet_logo" alt="" />
            <p className="documentbuttonP1">3908</p>
            <text className="documentbuttontext">Kameralar</text>
          </div>
        </div>
      </header>
      <br />
      <br />
{/* task 2 */}
      <main>
        <div className="Hero_section">
          <div className="Hero_buttons">
            <div className="Hero_button_left">
              <p className="Hero_text">Tadbirkor</p>
              <p className="Hero_number">92</p>
              <div className="Hero_skrol_left">
                
              </div>
            </div>

            <div className="Hero_button_right">
              <p className="Hero_text">Biznesman</p>
              <p className="Hero_number">38</p>
              <div className=" Hero_skrol_right">

              </div>
            </div>
          </div>
          <div className="Hero_centercomponents">
            <div className="skrolElectri_div">
              <span>
              </span>
            </div>
            <div className="electri_div">
              
              <img src={electri} className="electri" alt="charger icon" />
            </div>
          </div>

          <div className="Hero_buttons">
            <div className="Button_left_down">
              <p className="Hero_text">Fermar</p>
              <p className="Hero_number">20</p>
              <div className="Hero_skrol_left_down">

              </div>
            </div>
            <div className="Button_right_down">
              <p className="Hero_text">YTT</p>
              <p className="Hero_number">16</p>
              <div className="Hero_skrol_right_down">
                
              </div>
              <span className="Button_right_down_span"></span>
            </div>
          </div> 
        </div>
      </main>
    </div>
  );
}

export default task1;
