export const TYPE_TEXT = 'TYPE_TEXT'

export function typeText(inputText) {
  return {
    type: TYPE_TEXT,
    inputText: inputText,
  }
}