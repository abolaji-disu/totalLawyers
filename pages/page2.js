export default `
<div class="page-one page-wrapper ">

    <div class="divider mt-2">
          <label>3. Have you been treated by a doctor, hospital or clinic in the last year?</label>
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
        <label>4. Have you had a full time job within the past 5 years?</label>
        <div class="radios">
            <label>
                <input type="radio" name="out_of_work" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="out_of_work" value="no"> No
            </label>
        </div>
    </div>
    <button class="next-step mb-xl" data-next="3" >Next Step</button>
</div>
`