import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const TravelInviteModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Du hast das Wort erraten!"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
        Willst du die Reise von Spinni sehen?
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <a
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          href="https://spinnisreise.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Ja
        </a>
        <button
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          onClick={handleClose}
        >
          Nein
        </button>
      </div>
    </BaseModal>
  )
}
