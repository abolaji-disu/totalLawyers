export default `
<div class="page-one">

    <label>3. Have you been treated by a doctor, hospital or clinic in the last year?</label>
    <div class="radios">
        <label>
            <input type="radio" name="treated" value="yes"> Yes
        </label>
        <label>
            <input type="radio" name="treated" value="no"> No
        </label>
    </div>

    <label>4. Have you had a full time job within the past 5 years?</label>
    <div class="radios">
        <label>
            <input type="radio" name="out_of_work" value="yes"> Yes
        </label>
        <label>
            <input type="radio" name="out_of_work" value="no"> No
        </label>
    </div>
    <button class="next-step" data-next="3" >Next Step</button>
</div>
`