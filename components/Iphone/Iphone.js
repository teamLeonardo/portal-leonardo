
export default ({ children }) => (
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
                {
                    children
                }
            </div>

            <div class="bottom">
                <div></div>
            </div>
        </div>
    </figure>
)