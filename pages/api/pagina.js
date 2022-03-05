
export default function handler(req, res) {
    res.status(200).send(`<div className="section-proyect">
    <div className="titel-proyect">
      <h1>
        CALCULADORA JS
      </h1>
    </div>
    <div
      className="img-phone"

    >
      <figure class="iphone">
        <div class="side-buttons">
          <div></div>
        </div>
        <div class="phone">
          <div class="top">
            <div>
              <span class="camera"></span>
              <span class="speaker"></span>
            </div>
          </div>

          <div class="screen">
            <img
              src="/img/calculadora-1-phone.png"
              alt="asda"
            />
          </div>

          <div class="bottom">
            <div></div>
          </div>
        </div>
      </figure>
      <figure class="iphone">
        <div class="side-buttons">
          <div></div>
        </div>
        <div class="phone">
          <div class="top">
            <div>
              <span class="camera"></span>
              <span class="speaker"></span>
            </div>
          </div>

          <div class="screen">
            <img
              src="/img/calculadora-2-phone.png"
              alt="asda"
            />
          </div>

          <div class="bottom">
            <div></div>
          </div>
        </div>
      </figure>
      <figure class="iphone">
        <div class="side-buttons">
          <div></div>
        </div>
        <div class="phone">
          <div class="top">
            <div>
              <span class="camera"></span>
              <span class="speaker"></span>
            </div>
          </div>

          <div class="screen">
            <img
              src="/img/calculadora-3-phone.png"
              alt="asda"
            />
          </div>

          <div class="bottom">
            <div></div>
          </div>
        </div>
      </figure>
    </div>
    
  </div>`)
}