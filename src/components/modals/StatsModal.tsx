import { ClockIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import Countdown from 'react-countdown'

import { DATE_LOCALE, ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import {
  ARCHIVE_GAMEDATE_TEXT,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  STATISTICS_TITLE,
} from '../../constants/strings'
import { GameStats } from '../../lib/localStorage'
import { solutionGameDate, tomorrow } from '../../lib/words'
import { Histogram } from '../stats/Histogram'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  gameStats: GameStats
  isLatestGame: boolean
  isGameLost: boolean
  isGameWon: boolean
  handleMigrateStatsButton: () => void
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        isLatestGame={isLatestGame}
        gameStats={gameStats}
        isGameWon={isGameWon}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 columns-2 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-left">
            {(!ENABLE_ARCHIVED_GAMES || isLatestGame) && (
              <div>
                <h5>{NEW_WORD_TEXT}</h5>
                <Countdown
                  className="text-lg font-medium text-gray-900 dark:text-gray-100"
                  date={tomorrow}
                  daysInHours={true}
                />
              </div>
            )}
            {ENABLE_ARCHIVED_GAMES && !isLatestGame && (
              <div className="mt-2 inline-flex">
                <ClockIcon className="mr-1 mt-2 mt-1 h-5 w-5 stroke-black dark:stroke-white" />
                <div className="mt-1 ml-1 text-center text-sm sm:text-base">
                  <strong>{ARCHIVE_GAMEDATE_TEXT}:</strong>
                  <br />
                  {format(solutionGameDate, 'd MMMM yyyy', {
                    locale: DATE_LOCALE,
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </BaseModal>
  )
}
