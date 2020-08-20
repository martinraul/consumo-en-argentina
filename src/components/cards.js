import React from "react";
import { Link } from "react-router-dom";
import Page1 from "./Pages/Card1.html";
import Page2 from "./Pages/Card2.html";
import Page3 from "./Pages/Card3.html";
import Page4 from "./Pages/Card4.html";
import Page5 from "./Pages/Card5.html";
import Page6 from "./Pages/Card6.html";
import Page7 from "./Pages/Card7.html";
import Page8 from "./Pages/Card8.html";
export var htmlDoc1 = { __html: Page1 };
export var htmlDoc2 = { __html: Page2 };
export var htmlDoc3 = { __html: Page3 };
export var htmlDoc4 = { __html: Page4 };
export var htmlDoc5 = { __html: Page5 };
export var htmlDoc6 = { __html: Page6 };
export var htmlDoc7 = { __html: Page7 };
export var htmlDoc8 = { __html: Page8 };

const Card1 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc1} />
    </div>
  );
};

const Card2 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc2} />
    </div>
  );
};

 const Card3 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc3} />
    </div>
  );
};

 const Card4 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc4} />
    </div>
  );
};

 const Card5 = () => {
  return (
    <div id="AnchorTag">
    <div className="font-weight-bold bg-light  "
    ><Link to="/" >🢁 HOME 🢁</Link></div>
      <div dangerouslySetInnerHTML={htmlDoc5} />
    </div>
  );
};

 const Card6 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc6} />
    </div>
  );
};

 const Card7 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc7} />
    </div>
  );
};

 const Card8 = () => {
  return (
    <div id="AnchorTag">
      <div className="font-weight-bold bg-light  ">
        <Link to="/">🢁 HOME 🢁</Link>
      </div>
      <div dangerouslySetInnerHTML={htmlDoc8} />
    </div>
  );
};
export { Card1, Card2, Card3, Card4,Card5, Card6, Card7, Card8 };
