/**
 * Selector for getting actual auto-complete result
 *
 * @function selectNamesEqualToInputString
 * @param {string} stringFromInput - actual data from auto-complete input
 * @param {string[]} allNamesFromApi - actual data from users API
 * @return {string[]}
 * @example
 * // [Maxim, Mark]
 * selectNamesEqualToInputString(ma, [Maxim, Mark, John])
 */
export const selectNamesEqualToInputString = (
    stringFromInput,
    allNamesFromApi
) => {
    const getActualNames = () =>
        allNamesFromApi.filter(
            (name) =>
                name.slice(0, stringFromInput.length).toLowerCase() ===
                stringFromInput.toLowerCase()
        )

    return stringFromInput.length > 0 ? getActualNames() : []
}
