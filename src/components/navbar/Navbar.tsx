import { CalendarIcon, ChartBarIcon } from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsStatsModalOpen: (value: boolean) => void
}

export const Navbar = ({ setIsStatsModalOpen }: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex"></div>
        <p className="text-xl font-bold">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="mr-3 h-6 w-6 cursor-pointer"
            onClick={() => setIsStatsModalOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}
