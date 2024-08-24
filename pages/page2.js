export default `
<div class="page-one page-wrapper ">

    <div class="divider">
          <label class="top-label">3. Have you been treated by a doctor, hospital or clinic in the last year?</label>
        <div class="radios">
            <label>
                <input type="radio" name="treated" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="treated" value="no"> No
            </label>
        </div>
    </div>
  
  <div class="divider mb-1">
        <label class="mt-1 mb-1" style="display: block">4. Have you had a full time job within the past 5 years?</label>
        <div class="radios">
            <label>
                <input type="radio" name="out_of_work" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="out_of_work" value="no"> No
            </label>
        </div>
    </div>
    <button class="next-step step mb-xl" data-next="3" >Next Step</button>
    
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