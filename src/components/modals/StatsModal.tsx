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
      <h4 className="text-lg font-medium leading-6 ">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        isLatestGame={isLatestGame}
        gameStats={gameStats}
        isGameWon={isGameWon}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 columns-2 items-center items-stretch justify-center text-center sm:mt-6">
          <div className="w-full">
            {isLatestGame && (
              <>
                <div className="flex-grow">{NEW_WORD_TEXT}</div>
                <Countdown className="" date={tomorrow} daysInHours={true} />
              </>
            )}
          </div>
        </div>
      )}
    </BaseModal>
  )
}
