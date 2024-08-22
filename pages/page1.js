
export default `
<div class="default-page" >
    <label for="age">
        1. How old are you?
    </label>
    <select id="age" name="age">
        <option value="" selected>Select an answer</option>
    </select>

    <label>2. Do you expect to be out of work for at least a year due to your health?</label>
    <div class="radios">
        <label>
            <input type="radio" name="out_of_work" value="yes"> Yes
        </label>
        <label>
            <input type="radio" name="out_of_work" value="no"> No
        </label>
    </div>
    <button class="next-step" data-next="2" >Next Step</button>
</div>
`