import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

       <div className="container text-center my-5 partner-section">
  <p className="mb-5 text-muted fs-5">
    Extend your trading and investment experience even further with our partner platforms
  </p>

  <div className="row justify-content-center">
    <div className="col-md-4 mb-5">
      <img src="media/images/zerodhafundhouse.png" className="partner-logo" />
      <p className="partner-text">
        Our asset management venture that is creating simple and transparent
        index funds to help you save for your goals.
      </p>
    </div>

    <div className="col-md-4 mb-5">
      <img src="media/images/sensibullLogo.svg" className="partner-logo" />
      <p className="partner-text">
        Options trading platform that lets you create strategies, analyze
        positions, and examine data points like open interest, FII/DII, and more.
      </p>
    </div>

    <div className="col-md-4 mb-5">
      <img src="media/images/tijori.svg" className="partner-logo" />
      <p className="partner-text">
        Investment research platform that offers detailed insights on
        stocks, sectors, supply chains, and more.
      </p>
    </div>

    <div className="col-md-4 mb-5">
      <img src="media/images/streakLogo.png" className="partner-logo" />
      <p className="partner-text">
        Systematic trading platform that allows you to create and backtest
        strategies without coding.
      </p>
    </div>

    <div className="col-md-4 mb-5">
      <img src="media/images/smallcaseLogo.png" className="partner-logo" />
      <p className="partner-text">
        Thematic investing platform that helps you invest in diversified
        baskets of stocks on ETFs.
      </p>
    </div>

    <div className="col-md-4 mb-5">
      <img src="media/images/dittoLogo.png" className="partner-logo" />
      <p className="partner-text">
        Personalized advice on life and health insurance. No spam and no
        mis-selling.
      </p>
    </div>
  </div>
</div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
