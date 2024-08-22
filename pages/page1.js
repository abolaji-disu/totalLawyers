
export default `
<div class="default-page page-wrapper" >

    <div class="divider mt-2">
        <label for="age">
            1. How old are you?
        </label>
        <select id="age" name="age">
            <option value="" selected>Select an answer</option>
        </select>
    </div>
    
    <div class="divider mb-1">
        <label>2. Do you expect to be out of work for at least a year due to your health?</label>
        <div class="radios">
            <label>
                <input type="radio" name="out_of_work" value="yes"> Yes
            </label>
            <label>
                <input type="radio" name="out_of_work" value="no"> No
            </label>
        </div>
    </div>
    
    <button class="next-step mb-xl" data-next="2" >Next Step</button>
</div>
`