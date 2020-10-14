/**
 * @summary Add a new form input
 * @param {function} setInputCount Set state the new count of the form input UI
 * @param {function} setInputValues Set state the new array of input values 
 * @param {number[]} formInputCounts The ARRAY containing the current COUNT of the form input showing on the screen
 * @param {string[]} inputValues The ARRAY containing all the current VALUES in all the current form inputs
 */
export const _onAddInput = (setInputCount, setInputValues, formInputCounts, inputValues) => {

    let allInputValues = [];
    const currentInputCount = formInputCounts;

    // New form input count
    const newInputCount = currentInputCount.concat(currentInputCount[currentInputCount.length-1] + 1);
    // Set the new form input count
    setInputCount(newInputCount);

    // Current input value array. Using .concat method, we add another empty string (aka empty input value) to the array
    allInputValues = allInputValues.concat(inputValues, "");
    // Set the new input value array
    setInputValues(allInputValues);

}

/**
 * @summary Handle the change of value of each input
 * @param {string} inputValue The input value the user enters from the keyboard
 * @param {number} inputIndex The current index of the input where the user is typing
 * @param {string[]} currentInputValues The array containing all the current VALUES of all the current form inputs which are shown on the screen
 * @param {function} setInputValues Set state the new updated array of input values
 */
export const _onChangeInputValue = (inputValue, inputIndex, setInputValues, currentInputValues) => {

    // Initialize new current input values
    let newCurrentInputValues = [];
    // Initialize new questions which is used after changing (updating) the values
    let newInputValues = [];

    newCurrentInputValues = newCurrentInputValues.concat(currentInputValues);

    // At the index of the question array, we update that into a new question (inputValue)
    newCurrentInputValues[inputIndex] = inputValue;

    // Create a new updated questions from the updated question array
    newInputValues = newInputValues.concat(newCurrentInputValues);

    // Set the new question array
    setInputValues(newInputValues);

}