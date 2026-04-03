export const GAME_TITLE = 'Kiras eigenes Wordle'

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nicht genug Buchstaben :('
export const WORD_NOT_FOUND_MESSAGE = 'Das Wort gibt es leider nicht :/'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Löschen'
export const STATISTICS_TITLE = 'Statistiken'
export const GUESS_DISTRIBUTION_TEXT = 'Verteilung der Versuche'
export const NEW_WORD_TEXT = 'Neues Wort in'
export const TOTAL_TRIES_TEXT = 'Gesamte Anzahl von Versuchen'
export const SUCCESS_RATE_TEXT = 'Erfolgsrate'
export const CURRENT_STREAK_TEXT = 'Jetzige Streak'
export const BEST_STREAK_TEXT = 'Beste Streak'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'today'
export const ARCHIVE_GAMEDATE_TEXT = 'Game date'
