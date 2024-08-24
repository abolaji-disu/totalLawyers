
export default `
<div class="default-page page-wrapper" >

    <div class="divider mt-2">
        <label for="age" class="mb-1" style="display: block">
            1. How old are you?
        </label>
        <select id="age" name="age">
            <option value="" selected>Select an answer</option>
        </select>
    </div>
    
    <div class="divider mb-1">
        <label class="mb-1" style="display: block">2. Do you expect to be out of work for at least a year due to your health?</label>
        <div class="radios">
            <label>
                <input type="radio" name="out_of_work" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="out_of_work" value="no"> No
            </label>
        </div>
    </div>
    
    <button class="next-step step" data-next="2" >Next Step</button>
    
    <div class="lower-content" id="lower-2">
            <p class="sub-header" id="sub2">
                Join over 1M+ others who chose us to connect with a  lawyer - for free
            </p>
            <div class="base-logos">
                <img src="assets/google-rating.png" alt="google_rating_image.png"/>
                <img src="assets/norton-secured.png" alt="secure_image.png"/>
                <img src="assets/accredited.png" alt="accredited_business_image.png"/>
            </div>
       </div>
</div>
`