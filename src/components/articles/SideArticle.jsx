import React from "react";

export default function SideArticle() {
  return (
    <div className="side">
      <h2>New</h2>
      <div>
        <h3>
          {" "}
          <a href="">Hydrogen VS Electric Cars</a>
        </h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h3>
          <a href="">The Downsides of AI Artistry</a>
        </h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h3>
          <a href="">Is VC Funding Drying Up?</a>
        </h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}
